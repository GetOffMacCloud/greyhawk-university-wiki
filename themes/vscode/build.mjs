// Greyhawk University — VS Code theme generator.
// Edit the palettes below, then run:  node themes/vscode/build.mjs
//
// Free City Nights (dark): the grey stone walls of the Free City after dark,
//   lit by lamplight (gold), Celene the Handmaiden (aquamarine) and Luna (silver).
// Flanaess Folio (light): the 1980 folio map — parchment, sepia ink, forest green,
//   the blue waters of the Nyr Dyv, ochre hills and oxblood border lines.

import { writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))

const palettes = {
  dark: {
    name: "Greyhawk University — Free City Nights",
    file: "free-city-nights.json",
    type: "dark",
    bg: "#1b1d21", // grey wall stone, cool slate
    bgDeep: "#14161a", // sidebars, the Old City alleys
    bgRaised: "#252830", // widgets, hovers
    lineHi: "#22252b",
    border: "#30343c",
    fg: "#e3d9c3", // aged vellum
    fgMuted: "#a3a8b2", // weathered stone
    comment: "#848c98", // faded ink
    gold: "#d4a24a", // lamplight, Greyhawk's gold orbs
    celene: "#6cc4b4", // the Handmaiden
    luna: "#b3bfd6", // the Great Moon
    forest: "#a3bd75", // Gnarley Forest green
    ochre: "#e08a52", // Cairn Hills
    parchment: "#d8c49a",
    iuz: "#e0604a", // the Old One's blood-red banners
    rose: "#cf93ad", // wizardly sigils
    selection: "#d4a24a33",
    accentFg: "#1b1d21",
    statusBg: "#5c1c18", // oxblood banner
    statusFg: "#f1d58f",
  },
  light: {
    name: "Greyhawk University — Flanaess Folio",
    file: "flanaess-folio.json",
    type: "light",
    bg: "#f4ecd8",
    bgDeep: "#ebe0c4",
    bgRaised: "#fbf6e9",
    lineHi: "#ede3c9",
    border: "#d6c7a1",
    fg: "#2e2418", // sepia ink
    fgMuted: "#6b5a40",
    comment: "#7a6848",
    gold: "#8b1e1e", // oxblood border lines take the lead role in light mode
    celene: "#1f6b66", // Nyr Dyv waters
    luna: "#36547d", // Azure Sea
    forest: "#4c6a27",
    ochre: "#9a4a17",
    parchment: "#6b4a1f",
    iuz: "#b3261e",
    rose: "#8a3f6b",
    selection: "#b08a2e38",
    accentFg: "#f4ecd8",
    statusBg: "#3d2f1f",
    statusFg: "#f1e2b8",
  },
}

function theme(p) {
  const c = {
    // Base
    focusBorder: p.gold + "99",
    foreground: p.fg,
    descriptionForeground: p.fgMuted,
    errorForeground: p.iuz,
    "widget.shadow": "#00000040",
    "selection.background": p.selection,
    "textLink.foreground": p.celene,
    "textLink.activeForeground": p.gold,
    "icon.foreground": p.fgMuted,

    // Editor
    "editor.background": p.bg,
    "editor.foreground": p.fg,
    "editorLineNumber.foreground": p.comment + "99",
    "editorLineNumber.activeForeground": p.gold,
    "editorCursor.foreground": p.gold,
    "editor.selectionBackground": p.selection,
    "editor.inactiveSelectionBackground": p.selection.slice(0, 7) + "1f",
    "editor.lineHighlightBackground": p.lineHi,
    "editor.lineHighlightBorder": "#00000000",
    "editor.findMatchBackground": p.celene + "55",
    "editor.findMatchHighlightBackground": p.celene + "2a",
    "editor.wordHighlightBackground": p.luna + "22",
    "editor.wordHighlightStrongBackground": p.gold + "22",
    "editorBracketMatch.background": p.gold + "22",
    "editorBracketMatch.border": p.gold + "88",
    "editorBracketHighlight.foreground1": p.gold,
    "editorBracketHighlight.foreground2": p.celene,
    "editorBracketHighlight.foreground3": p.ochre,
    "editorBracketHighlight.foreground4": p.luna,
    "editorBracketHighlight.foreground5": p.forest,
    "editorBracketHighlight.foreground6": p.rose,
    "editorIndentGuide.background1": p.border,
    "editorIndentGuide.activeBackground1": p.gold + "88",
    "editorWhitespace.foreground": p.border,
    "editorRuler.foreground": p.border,
    "editorError.foreground": p.iuz,
    "editorWarning.foreground": p.ochre,
    "editorInfo.foreground": p.celene,
    "editorGutter.addedBackground": p.forest,
    "editorGutter.modifiedBackground": p.gold,
    "editorGutter.deletedBackground": p.iuz,
    "editorWidget.background": p.bgRaised,
    "editorWidget.border": p.border,
    "editorSuggestWidget.background": p.bgRaised,
    "editorSuggestWidget.border": p.border,
    "editorSuggestWidget.selectedBackground": p.gold + "2a",
    "editorSuggestWidget.highlightForeground": p.gold,
    "editorHoverWidget.background": p.bgRaised,
    "editorHoverWidget.border": p.border,
    "editorGroupHeader.tabsBackground": p.bgDeep,
    "editorGroup.border": p.border,
    "minimap.selectionHighlight": p.gold + "66",
    "scrollbarSlider.background": p.fgMuted + "22",
    "scrollbarSlider.hoverBackground": p.fgMuted + "44",
    "scrollbarSlider.activeBackground": p.gold + "55",

    // Diff
    "diffEditor.insertedTextBackground": p.forest + "26",
    "diffEditor.removedTextBackground": p.iuz + "22",

    // Tabs
    "tab.activeBackground": p.bg,
    "tab.activeForeground": p.fg,
    "tab.activeBorderTop": p.gold,
    "tab.inactiveBackground": p.bgDeep,
    "tab.inactiveForeground": p.fgMuted,
    "tab.border": p.border,
    "tab.hoverBackground": p.bgRaised,

    // Chrome
    "titleBar.activeBackground": p.bgDeep,
    "titleBar.activeForeground": p.fg,
    "titleBar.inactiveBackground": p.bgDeep,
    "titleBar.inactiveForeground": p.fgMuted,
    "titleBar.border": p.border,
    "activityBar.background": p.bgDeep,
    "activityBar.foreground": p.gold,
    "activityBar.inactiveForeground": p.fgMuted,
    "activityBar.border": p.border,
    "activityBar.activeBorder": p.gold,
    "activityBarBadge.background": p.gold,
    "activityBarBadge.foreground": p.accentFg,
    "sideBar.background": p.bgDeep,
    "sideBar.foreground": p.fg,
    "sideBar.border": p.border,
    "sideBarTitle.foreground": p.gold,
    "sideBarSectionHeader.background": p.bgDeep,
    "sideBarSectionHeader.foreground": p.gold,
    "sideBarSectionHeader.border": p.border,
    "list.activeSelectionBackground": p.gold + "2e",
    "list.activeSelectionForeground": p.fg,
    "list.inactiveSelectionBackground": p.gold + "1a",
    "list.hoverBackground": p.bgRaised,
    "list.focusOutline": p.gold + "88",
    "list.highlightForeground": p.gold,
    "tree.indentGuidesStroke": p.border,
    "statusBar.background": p.statusBg,
    "statusBar.foreground": p.statusFg,
    "statusBar.border": p.border,
    "statusBar.noFolderBackground": p.statusBg,
    "statusBar.debuggingBackground": p.iuz,
    "statusBarItem.remoteBackground": p.gold,
    "statusBarItem.remoteForeground": p.accentFg,
    "panel.background": p.bgDeep,
    "panel.border": p.border,
    "panelTitle.activeBorder": p.gold,
    "panelTitle.activeForeground": p.fg,
    "panelTitle.inactiveForeground": p.fgMuted,
    "breadcrumb.foreground": p.fgMuted,
    "breadcrumb.focusForeground": p.fg,

    // Inputs & buttons
    "input.background": p.bgRaised,
    "input.border": p.border,
    "input.foreground": p.fg,
    "input.placeholderForeground": p.comment,
    "inputOption.activeBorder": p.gold,
    "dropdown.background": p.bgRaised,
    "dropdown.border": p.border,
    "button.background": p.gold,
    "button.foreground": p.accentFg,
    "button.hoverBackground": p.ochre,
    "button.secondaryBackground": p.bgRaised,
    "button.secondaryForeground": p.fg,
    "badge.background": p.gold,
    "badge.foreground": p.accentFg,
    "progressBar.background": p.gold,
    "quickInput.background": p.bgRaised,
    "pickerGroup.foreground": p.gold,
    "pickerGroup.border": p.border,
    "notifications.background": p.bgRaised,
    "notifications.border": p.border,

    // Git
    "gitDecoration.addedResourceForeground": p.forest,
    "gitDecoration.modifiedResourceForeground": p.gold,
    "gitDecoration.deletedResourceForeground": p.iuz,
    "gitDecoration.untrackedResourceForeground": p.celene,
    "gitDecoration.ignoredResourceForeground": p.comment,
    "gitDecoration.conflictingResourceForeground": p.rose,

    // Terminal
    "terminal.background": p.bgDeep,
    "terminal.foreground": p.fg,
    "terminalCursor.foreground": p.gold,
    "terminal.ansiBlack": p.type === "dark" ? "#2a2723" : "#3d2f1f",
    "terminal.ansiRed": p.iuz,
    "terminal.ansiGreen": p.forest,
    "terminal.ansiYellow": p.type === "dark" ? p.gold : "#8a6a12",
    "terminal.ansiBlue": p.luna,
    "terminal.ansiMagenta": p.rose,
    "terminal.ansiCyan": p.celene,
    "terminal.ansiWhite": p.type === "dark" ? p.fg : "#d6c7a1",
    "terminal.ansiBrightBlack": p.comment,
    "terminal.ansiBrightRed": p.ochre,
    "terminal.ansiBrightGreen": p.forest,
    "terminal.ansiBrightYellow": p.type === "dark" ? "#e8c76a" : "#9a6a12",
    "terminal.ansiBrightBlue": p.luna,
    "terminal.ansiBrightMagenta": p.rose,
    "terminal.ansiBrightCyan": p.celene,
    "terminal.ansiBrightWhite": p.type === "dark" ? "#f5ecd6" : "#fbf6e9",
  }

  const t = (scope, foreground, fontStyle) => ({
    scope,
    settings: { ...(foreground && { foreground }), ...(fontStyle !== undefined && { fontStyle }) },
  })

  const tokenColors = [
    t(["comment", "punctuation.definition.comment"], p.comment, "italic"),
    t(["keyword", "storage.type", "storage.modifier", "keyword.control"], p.gold),
    t(["keyword.operator", "punctuation.accessor"], p.fgMuted),
    t(["string", "string.quoted", "string.template"], p.forest),
    t(["constant.character.escape", "string.regexp"], p.rose),
    t(["constant.numeric", "constant.language", "constant.other", "support.constant"], p.ochre),
    t(["entity.name.function", "support.function", "meta.function-call"], p.celene),
    t(
      [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "support.class",
        "entity.other.inherited-class",
      ],
      p.luna,
    ),
    t(["variable", "meta.definition.variable"], p.fg),
    t(["variable.parameter"], p.parchment, "italic"),
    t(["variable.language", "variable.language.this"], p.rose, "italic"),
    t(
      [
        "variable.other.property",
        "variable.other.object.property",
        "support.type.property-name",
        "meta.object-literal.key",
      ],
      p.parchment,
    ),
    t(["entity.name.tag", "punctuation.definition.tag"], p.iuz),
    t(["entity.other.attribute-name"], p.ochre, "italic"),
    t(["entity.name.namespace", "entity.name.module"], p.luna),
    t(["punctuation", "meta.brace"], p.fgMuted),
    t(["invalid"], p.iuz, "underline"),

    // Markdown — this is a wiki, after all
    t(["markup.heading", "entity.name.section", "punctuation.definition.heading"], p.gold, "bold"),
    t(["markup.bold"], p.ochre, "bold"),
    t(["markup.italic"], p.rose, "italic"),
    t(["markup.underline.link", "string.other.link", "markup.link"], p.celene),
    t(["markup.inline.raw", "markup.fenced_code"], p.forest),
    t(["markup.quote"], p.fgMuted, "italic"),
    t(["markup.list.numbered", "markup.list.unnumbered", "punctuation.definition.list"], p.gold),
    t(["meta.embedded.block.frontmatter", "entity.name.tag.yaml"], p.luna),
    t(["markup.inserted"], p.forest),
    t(["markup.deleted"], p.iuz),
    t(["markup.changed"], p.gold),
  ]

  return {
    $schema: "vscode://schemas/color-theme",
    name: p.name,
    type: p.type,
    semanticHighlighting: true,
    colors: c,
    tokenColors,
  }
}

mkdirSync(join(here, "themes"), { recursive: true })
for (const p of Object.values(palettes)) {
  writeFileSync(join(here, "themes", p.file), JSON.stringify(theme(p), null, 2) + "\n")
  console.log("wrote", p.file)
}
