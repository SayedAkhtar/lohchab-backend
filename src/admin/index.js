export default {
    register(app) {
        app.customizeSidebar((sidebar) => {
            const contentSection = sidebar.sections.find((section) => section.id === "content");
            console.log("Debug Log", contentSection);
            if (contentSection) {
                // Reorder the links within the 'Content' section
                contentSection.links = contentSection.links.sort((a, b) => {
                    const order = ["collectionType", "singleType"];
                    return order.indexOf(a.id) - order.indexOf(b.id);
                });
            }

            return sidebar;
        });
    },
};
