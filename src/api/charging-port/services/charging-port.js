'use strict';

/**
 * charging-port service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::charging-port.charging-port');
