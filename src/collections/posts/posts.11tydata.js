"use strict";

const { generatePermalink } = require("eleventy-plugin-fluid");

module.exports = {
    layout: "layouts/post",
    eleventyComputed: {
        permalink: data => generatePermalink(data, "posts")
    }
};
