'use strict';

/**
 * booking controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::booking.booking', ({ strapi }) => ({
    async find(ctx) {
        try {
            // Extract authenticated user from ctx.state
            const user = ctx.state.user;

            if (!user) {
                return ctx.unauthorized("You must be logged in to view your bookings.");
            }

            // Fetch bookings only related to the authenticated user
            const userBookings = await strapi.entityService.findMany('api::booking.booking', {
                filters: {
                    customer: user.id, // Ensure bookings belong to the logged-in customer
                },
                populate: ['customer', 'service'], // Populate required relations if needed
            });

            return ctx.send({ data: userBookings });
        } catch (error) {
            strapi.log.error("Error fetching user bookings:", error);
            return ctx.internalServerError("Something went wrong.");
        }
    },
}));

