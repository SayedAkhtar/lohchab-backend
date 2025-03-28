require("dotenv").config();
const mysql = require("mysql2");
const knex = require("knex")({
  client: "mysql2", // Change to "pg" if using PostgreSQL
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: false, // For remote connections
    authPlugins: {
      mysql_clear_password: () => () => process.env.DB_PASSWORD,
    },
  },
});

// Configurations
const OLD_BASE_URL = "/uploads/"; // Strapi local URL pattern
const NEW_CDN_URL = "https://cdn.lohchabgroup.com/uploads"; // New CDN URL

// Update the database URLs
async function migrateFileUrls() {
  try {
    console.log("Fetching files from the database...");

    // Fetch files that still have local URLs
    const files = await knex("upload_file")
      .select("id", "url")
      .where("url", "like", `${OLD_BASE_URL}%`);

    if (files.length === 0) {
      console.log("No files need updating. Migration complete ✅");
      process.exit(0);
    }

    console.log(`Found ${files.length} files to update.`);

    for (const file of files) {
      const fileName = file.url.replace(OLD_BASE_URL, ""); // Extract filename
      const newUrl = `${NEW_CDN_URL}/${fileName}`;

      console.log(`Updating: ${file.url} → ${newUrl}`);

      // Update database
      await knex("upload_file").where({ id: file.id }).update({ url: newUrl });
    }

    console.log("✅ Migration completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed ❌", error);
    process.exit(1);
  }
}

// Run Migration
migrateFileUrls();

