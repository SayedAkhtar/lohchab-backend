module.exports = {
    routes: [
        {
            method: "POST",
            path: "/auth/login-mobile",
            handler: "custom-login.login",
            config: {
                auth: false, // No authentication required to access this route
            },
        },
        {
            method: "POST",
            path: "/auth/request-otp",
            handler: "custom-login.requestOtp",
            config: {
                auth: false, // No authentication required to access this route
            },
        }
    ],
};
