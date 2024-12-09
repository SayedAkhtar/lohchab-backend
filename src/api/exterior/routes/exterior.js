'use strict';

/**
 * exterior router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::exterior.exterior');
