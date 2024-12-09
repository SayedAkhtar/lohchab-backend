'use strict';

/**
 * safety router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::safety.safety');
