'use strict';

/**
 * loan-eligibility service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loan-eligibility.loan-eligibility');
