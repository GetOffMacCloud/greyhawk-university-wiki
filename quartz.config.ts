import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Greyhawk University",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    // Same Google Analytics property as rpgsidebar.com, so wiki traffic counts with the main site.
    analytics: {
      provider: "google",
      tagId: "G-3E6FMXVMSV",
    },
    locale: "en-US",
    baseUrl: "greyhawk-university.rpgsidebar.com",
    ignorePatterns: ["private", "templates", "gm-only", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",
        body: "EB Garamond",
        code: "IBM Plex Mono",
      },
      colors: {
        // Crest palette (navy, steel, royal blue, gold) from the Greyhawk University crest.
        lightMode: {
          light: "#eef1f5",
          lightgray: "#d3dae3",
          gray: "#7d8ea3",
          darkgray: "#2b3445",
          dark: "#121826",
          secondary: "#2f5fd0",
          tertiary: "#b8923a",
          highlight: "rgba(47, 95, 208, 0.10)",
          textHighlight: "#d0b05066",
        },
        darkMode: {
          light: "#0b0e16",
          lightgray: "#1c2333",
          gray: "#5c7491",
          darkgray: "#c8d3df",
          dark: "#eef2f7",
          secondary: "#5aa0f0",
          tertiary: "#d0b060",
          highlight: "rgba(90, 160, 240, 0.12)",
          textHighlight: "#d0b05055",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Writes the CNAME file so GitHub Pages keeps the custom domain
      Plugin.CNAME(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
