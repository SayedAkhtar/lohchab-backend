'use strict';

/**
 * safety controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::safety.safety');
