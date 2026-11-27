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
    // Replace G-XXXXXXXXXX with the measurement ID from rpgsidebar.com.
    analytics: {
      provider: "google",
      tagId: "G-XXXXXXXXXX",
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
        // Placeholder Greyhawk palette — swap for RPG Sidebar brand colours once the logo is in.
        lightMode: {
          light: "#f4ecd8",
          lightgray: "#e2d5b5",
          gray: "#a8956b",
          darkgray: "#3d2f1f",
          dark: "#24180e",
          secondary: "#8b1e1e",
          tertiary: "#b08a2e",
          highlight: "rgba(176, 138, 46, 0.15)",
          textHighlight: "#e8c76a88",
        },
        darkMode: {
          light: "#17120d",
          lightgray: "#2e241a",
          gray: "#6e5c43",
          darkgray: "#d9ccb0",
          dark: "#f1e6cc",
          secondary: "#d4a24a",
          tertiary: "#c0563f",
          highlight: "rgba(212, 162, 74, 0.12)",
          textHighlight: "#b0802a66",
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
