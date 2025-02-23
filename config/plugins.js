module.exports = ({ env }) => ({
  'strapi-plugin-fcm': {
    enabled: false,
    resolve: './node_modules/strapi-plugin-fcm' // path to plugin folder
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"),  // DigitalOcean Access Key
        secret: env("DO_SPACE_SECRET_KEY"), // DigitalOcean Secret Key
        endpoint: env("DO_SPACE_ENDPOINT"), // DigitalOcean Endpoint (e.g., https://nyc3.digitaloceanspaces.com)
        space: env("DO_SPACE_NAME"), // Your Space name
        directory: env("DO_SPACE_FOLDER", ""), // Optional: Subfolder inside your Space
        cdn: env("DO_SPACE_CDN", ""), // Optional: CDN URL
      }
    }
  }
});
