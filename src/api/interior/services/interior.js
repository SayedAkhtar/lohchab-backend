'use strict';

/**
 * interior service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::interior.interior');
