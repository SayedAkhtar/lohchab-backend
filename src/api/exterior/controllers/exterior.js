'use strict';

/**
 * exterior controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::exterior.exterior');
