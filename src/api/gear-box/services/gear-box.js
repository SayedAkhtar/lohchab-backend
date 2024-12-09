'use strict';

/**
 * gear-box service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gear-box.gear-box');
