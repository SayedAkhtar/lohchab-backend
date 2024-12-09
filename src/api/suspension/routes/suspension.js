'use strict';

/**
 * suspension router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::suspension.suspension');
