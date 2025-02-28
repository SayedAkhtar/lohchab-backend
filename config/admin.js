module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  settings: {
    security: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://lohchab-static.blr1.digitaloceanspaces.com",
            "https://market-assets.strapi.io"
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://lohchab-static.blr1.digitaloceanspaces.com"
          ],
          "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          "style-src": ["'self'", "'unsafe-inline'"],
          "font-src": ["'self'", "data:"],
          "connect-src": ["'self'", "https://lohchab-static.blr1.digitaloceanspaces.com"]
        },
      },
    },
  },
});
