'use strict';

/**
 * interior router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::interior.interior');
