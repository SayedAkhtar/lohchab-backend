const { sanitize } = require("@strapi/utils");

module.exports = {
    async login(ctx) {
        const { mobile, password } = ctx.request.body;

        if (!mobile || !password) {
            return ctx.badRequest("Mobile number and password are required.");
        }

        // Find user by mobile number
        const user = await strapi.db.query("plugin::users-permissions.user").findOne({
            where: { mobile },
        });

        if (!user) {
            return ctx.badRequest("Invalid mobile number or password.");
        }

        // Verify the password
        const isValidPassword = await strapi
            .service("plugin::users-permissions.user")
            .validatePassword(password, user.password);

        if (!isValidPassword) {
            return ctx.badRequest("Invalid mobile number or password.");
        }

        // Generate JWT token
        const token = strapi.plugins["users-permissions"].services.jwt.issue({
            id: user.id,
        });

        // Sanitize user data
        const sanitizedUser = await sanitize.contentAPI.output(user);

        return ctx.send({
            jwt: token,
            user: sanitizedUser,
        });
    },
};
