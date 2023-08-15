"use strict";

const { generatePermalink } = require("eleventy-plugin-fluid");

module.exports = {
    permalink: data => generatePermalink(data, "pages"),
    eleventyComputed: {
        eleventyNavigation: data => {
            /* If this page has an `order` attribute, create an Eleventy Navigation object for it. */
            if (data.order) {
                return {
                    parent: data.parent,
                    order: data.order,
                    /* If a key is set, use that for the navigation item label; otherwise use the page title. */
                    key: data.hasOwnProperty("key") ? data.key : data.title
                };
            }
            return false;
        }
    }
};
