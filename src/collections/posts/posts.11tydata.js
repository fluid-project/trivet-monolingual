"use strict";

const { generatePermalink } = require("eleventy-plugin-fluid");

module.exports = {
    layout: "layouts/post",
    permalink: data => generatePermalink(data, "posts")
};
