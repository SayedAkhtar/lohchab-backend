'use strict';

/**
 * suspension service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::suspension.suspension');
