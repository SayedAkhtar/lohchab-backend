module.exports = {
    async beforeCreate(event) {
        const { params } = event;

        // Ensure `customer` is set to the authenticated user's ID
        if (params.data && !params.data.customer) {
            const user = params.auth?.credentials?.id;

            if (!user) {
                throw new Error("You must be logged in to create a booking.");
            }

            params.data.customer = user;
        }
    },

    async beforeUpdate(event) {
        const { params } = event;

        // Prevent changing the `customer` field after creation
        if (params.data && params.data.customer) {
            delete params.data.customer;
        }
    },
};
