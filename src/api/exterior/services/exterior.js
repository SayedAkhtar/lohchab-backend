'use strict';

/**
 * exterior service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exterior.exterior');
