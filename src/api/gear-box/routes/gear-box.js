'use strict';

/**
 * gear-box router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::gear-box.gear-box');
