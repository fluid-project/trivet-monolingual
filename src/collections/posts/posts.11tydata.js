"use strict";

const i18n = require("eleventy-plugin-i18n-gettext");
const { generatePermalink } = require("eleventy-plugin-fluid");

module.exports = {
    layout: "layouts/post",
    eleventyComputed: {
        langDir: data => data.supportedLanguages[data.locale].dir,
        permalink: data => {
            const locale = data.locale;
            return generatePermalink(data, "posts", i18n._(locale, "posts"));
        }
    }
};
