module.exports = [
  'strapi::logger',
  'strapi::errors',

  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://lohchab-static.blr1.digitaloceanspaces.com",
            "https://market-assets.strapi.io",
          ],
        },
      },
    },
  }
];
