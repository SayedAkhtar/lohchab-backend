const { sanitize } = require("@strapi/utils");
const crypto = require("crypto");

module.exports = {
    async login(ctx) {
        const { mobile } = ctx.request.body;

        if (!mobile) {
            return ctx.badRequest("Mobile number and password are required.");
        }

        // Find user by mobile number
        const user = await strapi.db.query("plugin::users-permissions.user").findOne({
            where: { mobile },
        });

        if (!user) {
            return ctx.badRequest("Invalid mobile number or password.");
        }

        // // Verify the password
        // const isValidPassword = await strapi
        //     .service("plugin::users-permissions.user")
        //     .validatePassword(password, user.password);

        // if (!isValidPassword) {
        //     return ctx.badRequest("Invalid mobile number or password.");
        // }

        // Generate JWT token
        const token = strapi.plugins["users-permissions"].services.jwt.issue({
            id: user.id,
        });

        // Sanitize user data
        const schema = strapi.getModel("plugin::users-permissions.user");
        const sanitizedUser = await sanitize.contentAPI.output(user, schema);

        return ctx.send({
            jwt: token,
            user: sanitizedUser,
        });
    },
    // Request OTP
    async requestOtp(ctx) {
        const { mobile } = ctx.request.body;

        if (!mobile) {
            return ctx.badRequest("Mobile number is required.");
        }
        let user = null
        try {
            user = await strapi.db.query("plugin::users-permissions.user").findOne({
                where: { mobile },
            });
        } catch (error) {
            console.log(error);
        }
        // Find the user by mobile number


        if (!user) {
            return ctx.badRequest("User with this mobile number does not exist.");
        }

        // Generate OTP
        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiry

        // Update user record with OTP and expiry
        await strapi.db.query("plugin::users-permissions.user").update({
            where: { id: user.id },
            data: {
                otp,
                otpExpiry,
            },
        });

        // Send OTP via SMS (replace console.log with your SMS gateway integration)
        console.log(`OTP for ${mobile}: ${otp}`);

        return ctx.send({ message: "OTP sent successfully." });
    },

    // Login with OTP
    async loginWithOtp(ctx) {
        const { mobile, otp } = ctx.request.body;

        if (!mobile || !otp) {
            return ctx.badRequest("Mobile number and OTP are required.");
        }

        // Find the user by mobile number
        const user = await strapi.db.query("plugin::users-permissions.user").findOne({
            where: { mobile },
        });

        if (!user) {
            return ctx.badRequest("User not found.");
        }

        // Check if OTP matches and is still valid
        if (user.otp !== otp || new Date() > new Date(user.otpExpiry)) {
            return ctx.badRequest("Invalid or expired OTP.");
        }

        // Clear OTP fields after successful login
        await strapi.db.query("plugin::users-permissions.user").update({
            where: { id: user.id },
            data: {
                otp: null,
                otpExpiry: null,
            },
        });

        // Generate JWT token
        const token = strapi.plugins["users-permissions"].services.jwt.issue({
            id: user.id,
        });

        // Sanitize user data
        const schema = strapi.getModel("plugin::users-permissions.user");
        const sanitizedUser = await sanitize.contentAPI.output(user, schema);

        return ctx.send({
            jwt: token,
            user: sanitizedUser,
        });
    },
};
