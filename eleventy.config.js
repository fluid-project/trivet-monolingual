import {env} from 'node:process';
import fluidPlugin from 'eleventy-plugin-fluid';
import fontAwesomePlugin from '@11ty/font-awesome';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import {RenderPlugin} from '@11ty/eleventy';
import {feedPlugin} from '@11ty/eleventy-plugin-rss';
import syntaxHighlightPlugin from '@11ty/eleventy-plugin-syntaxhighlight';

// Import transforms
import parseTransform from './src/_transforms/parse-transform.js';

// Import data files
import siteConfig from './src/_data/config.json' with {type: 'json'};
import siteData from './src/_data/site.json' with {type: 'json'};

// Functions
const now = new Date();
const livePosts = post => post.date <= now && !post.data.draft;

/**
 * @param {object} eleventyConfig The Eleventy configuration object.
 * @returns {object} Eleventy configuration.
 */
export default function eleventy(eleventyConfig) {
	// Global Data
	// eleventyConfig.addGlobalData('now', () => new Date());

	// Filters

	// Shortcodes
	eleventyConfig.addShortcode('uioCustomInit', () => {
		const options = {
			preferences: ['fluid.prefs.lineSpace', 'fluid.prefs.textFont', 'fluid.prefs.contrast', 'fluid.prefs.enhanceInputs'],
			auxiliarySchema: {
				terms: {
					templatePrefix: '/lib/infusion/src/framework/preferences/html',
					messagePrefix: '/lib/infusion/src/framework/preferences/messages',
				},
			},
			prefsEditorLoader: {
				lazyLoad: true,
			},
		};

		return `<script>fluid.uiOptions(".flc-prefsEditor-separatedPanel", ${JSON.stringify(options)});</script>`;
	});

	// Transforms
	eleventyConfig.addTransform('parse', parseTransform);

	// Passthrough copy
	eleventyConfig.addPassthroughCopy({'src/admin/config.yml': 'admin/config.yml'});
	eleventyConfig.addPassthroughCopy({'src/assets/icons': '/'});
	eleventyConfig.addPassthroughCopy({'src/assets/images': 'assets/images'});

	// Custom collections
	eleventyConfig.addCollection('posts', collection => collection.getFilteredByGlob('./src/collections/posts/*.md').filter(posts => livePosts(posts)));

	// The following collection is used to create a collection of posts for the RSS feed.
	eleventyConfig.addCollection('postFeed', collection => collection.getFilteredByGlob('./src/collections/posts/*.md').filter(posts => livePosts(posts))
		.toReversed()
		.slice(0, siteConfig.maxPostsInFeed));

	// Plugins
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(fluidPlugin, {
		defaultLanguage: 'en-CA',
		i18n: false,
	});
	eleventyConfig.addPlugin(feedPlugin, {
		type: 'atom',
		outputPath: '/feed.xml',
		collection: {
			name: 'posts',
			limit: siteConfig.maxPostsInFeed,
		},
		metadata: {
			language: 'en',
			title: siteData.name,
			subtitle: siteData.description,
			base: siteConfig.url,
			author: {
				name: siteData.authorName,
				email: siteData.authorEmail,
			},
		},
	});
	eleventyConfig.addPlugin(fontAwesomePlugin);
	eleventyConfig.addPlugin(RenderPlugin);
	eleventyConfig.addPlugin(syntaxHighlightPlugin);

	// Preprocessors
	eleventyConfig.addPreprocessor('drafts', '*', (data, _content) => {
		if (data.draft && env.ELEVENTY_RUN_MODE === 'build') {
			return false;
		}
	});

	return {
		dir: {
			input: 'src',
		},
		templateFormats: ['njk', 'md', 'css', 'png', 'jpg', 'svg'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
	};
}
