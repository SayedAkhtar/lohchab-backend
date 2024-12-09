'use strict';

/**
 * safety service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::safety.safety');
