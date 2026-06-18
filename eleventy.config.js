import {EleventyRenderPlugin} from "@11ty/eleventy";
import {EleventyHtmlBasePlugin} from "@11ty/eleventy";

export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addFilter("formatDate", function(dateObj) {
        return new Date(dateObj).toLocaleDateString("en-US", {
            timeZone: "UTC",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    });
};