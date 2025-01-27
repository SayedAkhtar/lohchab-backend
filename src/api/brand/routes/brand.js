'use strict';

/**
 * brand router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::brands.brands');

//function to add override to the default router methods

module.exports = createCoreRouter('api::brand.brand');
