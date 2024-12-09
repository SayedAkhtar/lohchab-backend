'use strict';

/**
 * brand controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitize } = require('@strapi/utils');

module.exports = createCoreController('api::brand.brand', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.request.params;
        const contentType = strapi.contentType("api::brand.brand");
	const name = id.split('-').join(' ');
        
	const brand = await strapi.entityService.findMany("api::brand.brand", {
            filters: {
                name: {
                    $eqi: name
                },
            },
            ...ctx.query
        });
        console.log('Debug Log', brand);
        const data = await sanitize.contentAPI.output(brand, contentType);
        return this.transformResponse(data[0]);
    }
}));
