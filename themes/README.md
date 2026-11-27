# Greyhawk University themes

Editor themes that match the published wiki's palette (`quartz.config.ts`, `quartz/styles/custom.scss`).

| Mode  | Name                 | Inspiration                                                                                                                    |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Dark  | **Free City Nights** | Greyhawk's grey stone walls after dark, lamplight gold, Celene's aquamarine and Luna's silver, the blood red of Iuz for errors |
| Light | **Flanaess Folio**   | The 1980 folio map: parchment, sepia ink, forest green, Nyr Dyv blue, ochre hills, oxblood border lines                        |

Syntax colors: keywords are gold (oxblood in light mode), functions Celene, types Luna, strings forest green, numbers Cairn Hills ochre, tags Iuz red.

## VS Code

Edit the palettes in `vscode/build.mjs`, then:

```sh
node themes/vscode/build.mjs
D=~/.vscode/extensions/greyhawk-university.greyhawk-university-theme-0.2.0
mkdir -p $D/themes && cp themes/vscode/package.json $D/ && cp themes/vscode/themes/*.json $D/themes/
```

Reload VS Code, then **Preferences: Color Theme → Greyhawk University — …**

## Obsidian

`.obsidian` is gitignored, so the source lives here. To install or update:

```sh
cp -R "themes/obsidian/Greyhawk University" "GHU Wiki (Player)/.obsidian/themes/"
```

Then **Settings → Appearance → Themes → Greyhawk University**. Light/dark follows Obsidian's own base color scheme setting. The theme styles the wiki's `infobox`, `herald`, `ledger` and `gazetteer` callouts the same way the website does. Fonts (Cinzel, EB Garamond, IBM Plex Mono) load from Google Fonts, with Garamond/Georgia as offline fallbacks.
