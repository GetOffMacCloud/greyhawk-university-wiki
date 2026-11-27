---
description: "Relics of the Flanaess — a catalogue of legendary magic items, artifacts, and enchanted objects discovered across the World of Greyhawk."
tags: [university, compendium, magic, items]
draft: true
---

# Relics of the Flanaess

*A catalogue of legendary magic items, artifacts, and enchanted objects discovered — or still waiting — across the World of Greyhawk.*

| File                                                                                                                     | Status                         | Type                                | Rarity           | Held By                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ----------------------------------- | ---------------- | ------------------------------------------------------------------------------------------ |
| [[library/relics/The Cairn-Iron Token|The Cairn-Iron Token]]               | <ul><li>Undiscovered</li></ul> | Wondrous Item (token)               | Uncommon         | The Flan dead, F2 - The Weeping Cairns                                                 |
| [[library/relics/The Pholtan Censer|The Pholtan Censer]]                   | <ul><li>Undiscovered</li></ul> | Wondrous Item (censer)              | Uncommon         | Lost — submerged altar, B2 - The Mire-Sunk Chapel                                      |
| [[library/relics/The Antlered Circlet|The Antlered Circlet]]               | <ul><li>Undiscovered</li></ul> | Wondrous Item (circlet)             | Rare             | At the throne's foot, F6 - The Antler Throne                                           |
| [[library/relics/The Mire-Glass Lens|The Mire-Glass Lens]]                 | <ul><li>Undiscovered</li></ul> | Wondrous Item (lens / focus)        | Rare             | Sealed under glass, H4 - The Glassed Hollow                                            |
| The Verdigris Mask                   | <ul><li>Undiscovered</li></ul> | Wondrous Item (mask)                | Rare             | The reliquary, H7 - The Verdigris Tomb                                                 |
| The Sunken Bell of Kessmark | <ul><li>Undiscovered</li></ul> | Wondrous Item (bell)                | Rare             | Hung in the wreck, B6 - The Drowned Bell                                               |
| Brandt's Working Notes           | \-                             | Scholar's field notes (bound folio) | Mundane — unique | Ritterstadt Questers (requisitioned for the Capstone expedition; hers again on return) |
| [[library/relics/The Marrowstone|The Marrowstone]]                         | <ul><li>Undiscovered</li></ul> | Wondrous Item (anchor-stone core)   | Artifact         | Socket-end of the fallen pillar, I6 - The Marrowstone Reach                            |
| [[library/relics/The Sevenfold Key|The Sevenfold Key]]                     | <ul><li>Undiscovered</li></ul> | Wondrous Item (tuning-rod)          | Artifact         | Vault centre, C1 - The Sevenfold Hush                                                  |

---

## The Ritterstadt West Marches — Site Relics

> [!info] A Recurring Theme
> The relics of this frontier almost all turn on the same principle: **how you come by a thing decides what it is.** Given freely or used rightly, these objects bless. Stolen, forced, or used out of sequence, they curse — or quietly worsen the cold crisis the binding network holds back. The two **arc-critical artifacts** ([[library/relics/The Marrowstone|The Marrowstone]] and [[library/relics/The Sevenfold Key|The Sevenfold Key]]) can mend the network — or break it.

| Relic | Rarity | Site | The Catch |
|-------|--------|------|-----------|
| [[library/relics/The Pholtan Censer|The Pholtan Censer]] | Uncommon | B2 - The Mire-Sunk Chapel | Lays the chapel's Mire-Wight to rest |
| [[library/relics/The Cairn-Iron Token|The Cairn-Iron Token]] | Uncommon | F2 - The Weeping Cairns | Blessing if given, curse if stolen |
| [[library/relics/The Antlered Circlet|The Antlered Circlet]] | Rare | F6 - The Antler Throne | Gift of the Hart, or grows into a thief's skull |
| The Verdigris Mask | Rare | H7 - The Verdigris Tomb | Powerful if accepted, dead metal if looted |
| The Sunken Bell of Kessmark | Rare | B6 - The Drowned Bell | Redeemed or weaponised — choose carefully |
| [[library/relics/The Mire-Glass Lens|The Mire-Glass Lens]] | Rare | H4 - The Glassed Hollow | A fine focus that worsens the regional cold |
| [[library/relics/The Marrowstone|The Marrowstone]] | Artifact | I6 - The Marrowstone Reach | A spare anchor stone's hope (or trap) |
| [[library/relics/The Sevenfold Key|The Sevenfold Key]] | Artifact | C1 - The Sevenfold Hush | Re-balances the network — or collapses it |

---

## Discovery Lifecycle & Relic Rumors

Each relic note carries a `discovery_status` property — a single ladder tracking where the party stands with the item. Every relic starts at **Undiscovered**.

> [!info] The status ladder
> **Undiscovered** → **Rumored** → **Discovered** → **Recovered** → **Studying** → **Catalogued**
>
> - **Undiscovered** — the party has heard nothing; default state.
> - **Rumored** — a clue has been rolled into a Day Log; the item exists in play as talk.
> - **Discovered** — the party has located the site / confirmed the item is real.
> - **Recovered** — the item is physically in the party's hands.
> - **Studying** — being researched, attuned, or re-bound (relevant for the arc-critical items and the Lens/Bell).
> - **Catalogued** — returned to the Academic Registry / fully resolved.

### Seeding a clue (the go-live step)

Each unrecovered relic has a **staged rumor** waiting in the Town Engine's `Rumor Pool/` (filed `status: staged`, so it does not age or surface on its own). To roll one into play:

1. Open the staged rumor and set `go_live_date` to the day, `status: live`, and a `decay_date` (~12 days out, to taste).
2. **Flip the relic:** change its `discovery_status` from `Undiscovered` → `Rumored`.
3. Advance the ladder by hand as the party acts on it.

> [!tip] Staged relic clues — ready to seed
> ```dataview
> TABLE WITHOUT ID file.link as "Clue", linked_relic as "Relic", source_npc as "Source", intensity as "Int"
> FROM "Greyhawk University/05. The Hamlet of Ritterstadt/Town Engine/Rumor Pool"
> WHERE contains(tags, "relic-clue") AND status = "staged"
> SORT linked_relic ASC
> ```

> [!tip] Relic clues currently live in town
> ```dataview
> TABLE WITHOUT ID file.link as "Clue", linked_relic as "Relic", go_live_date as "Seeded", decay_date as "Decays"
> FROM "Greyhawk University/05. The Hamlet of Ritterstadt/Town Engine/Rumor Pool"
> WHERE contains(tags, "relic-clue") AND status = "live"
> SORT go_live_date ASC
> ```