---
description: "Character Overreach — a Greyhawk University house rule for forcing a spent resource: one engine, two branches (Spell Overreach and Ability Overreach), each with a scaling check and an equally scaling backlash."
tags: [university, character-creation, house-rules, magic]
draft: true
---

# 🔥 Character Overreach

*When the well is dry and the moment can't wait, you can still reach for power you no longer have — but it reaches back.*

> [!warning] A Desperate Measure
> Character Overreach is a last resort, not a free extra resource. Forcing a spent ability is always *possible*; the question is whether you can hold it together, and how badly it tears when you can't. The more powerful the thing you force, the harder the check and the worse the backlash.

**Character Overreach has two branches that share one engine:**

| Branch | You force… | Power rating | Check skill |
|:---|:---|:---:|:---|
| [Spell Overreach](#1-spell-overreach) | A spell, with no slots left | the spell's **level** | Arcana / Religion / Nature |
| [Ability Overreach](#2-ability-overreach) | A spent class feature | the feature's **tier (1–9)** | depends on the feature |

---

## The Core Engine

Both branches use the same three beats:

1. **Declare** the spell or feature you're forcing, and note its **power rating** (spell level, or ability tier).
2. **Make a Character Overreach check:**
   > **Roll `d20 + your relevant modifier` against `DC = 20 + power rating`.**
   > **You are always considered proficient on this check** — add your proficiency bonus. Use the modifier defined by your branch below.
3. **On a success**, the spell/feature works as normal — no resource is consumed (there's none left to spend).
   **On a failure**, it *still works*, but the [backlash](#the-backlash) lands, scaled to the same power rating.

> [!note] Why the DCs look impossibly high — and why they're fair
> Your bonus is `ability modifier + proficiency`, and **both grow as you level**. A higher-level character is exactly the one able to force higher-rated effects, so the DC climbs in lockstep with the bonus and the two curves cancel. The result is a steady, brutal success rate at every tier — and one that **stacking magic items or boosting a stat can't trivialize**, because every +1 you gain is a +1 the formula already expected.

---

## 1. Spell Overreach

**When:** you would cast a spell but have **no remaining slots of that level or higher.**

- **Power rating** = the spell's level.
- **Modifier** = the relevant skill's *proficiency*, but with your **spellcasting ability modifier** in place of the skill's normal ability (so clerics, druids, and sorcerers aren't punished for dumping Intelligence).

| Skill | Classes |
|:---|:---|
| **Arcana** | Wizard, Sorcerer, Warlock, Artificer, Eldritch Knight, Arcane Trickster |
| **Religion** | Cleric, Paladin |
| **Nature** | Druid, Ranger |

> Use the skill tied to the spell's **source class** (a Paladin spell rolls Religion even on a multiclass). You can only Overreach a spell you know or have prepared, and only to cast *that spell* — never to fuel Divine Smite, metamagic, or another slot-hungry feature.

| Spell forced | Earliest lvl | Typical bonus | DC (`20 + lvl`) | Chance to succeed |
|:---:|:---:|:---:|:---:|:---:|
| 1st | 1 | +5 | 21 | 25% |
| 2nd | 3 | +6 | 22 | 25% |
| 3rd | 5 | +7 | 23 | 25% |
| 4th | 7 | +8 | 24 | 25% |
| 5th | 9 | +9 | 25 | 25% |
| 6th | 11 | +9 | 26 | 20% |
| 7th | 13 | +10 | 27 | 20% |
| 8th | 15 | +10 | 28 | 15% |
| 9th | 17 | +11 | 29 | **15%** |

> [!tip] Want the top end nastier? Use **`DC = 21 + spell level`** → a forced 9th drops to 10%, a forced 1st to 20%.

> [!warning] Expertise breaks the cancel
> Bards and Rogues with **Expertise** sit ~+3 to +6 over the table. Either disallow Expertise on Overreach checks, or add their proficiency bonus to the DC to compensate.

---

## 2. Ability Overreach

**When:** you would use a finite class feature whose uses are spent (Channel Divinity, Rage, Wild Shape, Action Surge, Ki, etc.).

- **Power rating** = the feature's **tier (1–9)**, assigned by the table below (the GM rates anything not listed).
- **Modifier** = the ability/skill that fits the feature's *source* — divine, primal, arcane, or raw physical strain — always with proficiency added.

| Source | Feature (examples) | Tier | Overreach check |
|:---|:---|:---:|:---|
| **Divine** | Bardic Inspiration die | 1 | Arcana (spellcasting) |
| **Arcane** | Font of Magic conversion · Superiority die | 2 | Arcana (spellcasting) |
| **Physical** | Second Wind · Ki point · Maneuver die | 2 | **Constitution** |
| **Divine** | Channel Divinity (1 use) · Lay on Hands pool | 3 | Religion (spellcasting) |
| **Primal** | Rage (past your daily uses) | 3 | Nature (spellcasting) |
| **Physical** | Indomitable (reroll a save) · Stunning Strike | 3 | **Constitution** |
| **Primal** | Wild Shape · Arcane/Natural Recovery | 4 | Nature (spellcasting) |
| **Physical** | Action Surge | 4 | **Constitution** |
| **Divine** | Divine Intervention | 8 | Religion (spellcasting) |

> [!note] Picking the check
> Magical features use their source skill with your **spellcasting ability**. Purely martial features (no spellcasting stat to lean on) use a **Constitution check** — raw bodily strain — at the same `DC = 20 + tier`. Monks may use Wisdom for Ki if the GM prefers. Proficiency is always added either way, which keeps the cancel-math working.

The check and backlash are otherwise identical to Spell Overreach. A level-11 Fighter forcing Action Surge (tier 4, DC 24) rolls `d20 + CON + proficiency`; a level-3 Cleric forcing Channel Divinity (tier 3, DC 23) rolls `d20 + WIS + proficiency`.

---

## The Backlash

On a **failure**, the effect fires anyway — the power just tears loose on its way out. Apply **both** costs, scaled to the power rating:

| Cost | Amount |
|:---|:---|
| **Shock** | `power rating × your character level` damage, no save. Type fits the source: **force** (arcane), **radiant** (divine), **necrotic** (primal), or untyped bodily strain (physical). |
| **Exhaustion** | **1 level per 3 rating**, rounded up (rating 1–3 = 1 level, 4–6 = 2, 7–9 = 3). |

> [!info] Why exhaustion is the real cost
> The damage hurts now; exhaustion is what stops Overreach being abused right before a rest — a long rest removes only **one** level. Force a tier-9 effect and fail, and you carry that weight for **three full days** of recovery.

### Optional: the Backlash Table

For a memorable disaster instead of (or stacked atop) raw Shock, roll a `d8`, flavored to the source:

| d8 | Backlash |
|:---:|:---|
| 1 | The effect lands on the wrong target (GM's choice, including you). |
| 2 | A 15-ft. burst of raw power: everyone nearby takes the Shock damage. |
| 3 | You are knocked **prone** and **deafened/dazed** until the end of your next turn. |
| 4 | You can't use that resource (spells of that level / that feature) until you finish a short rest. |
| 5 | A surge of wild magic — roll on the standard Wild Magic Surge table. |
| 6 | You visibly age or fray; gain a point of strain/corruption per your campaign. |
| 7 | The effect is halved — duration, area, or number of targets. |
| 8 | Reality flinches — a minor, lasting omen marks the site of the Overreach. |

---

## Running It in Fantasy Grounds

A companion **Character Overreach** extension (5E ruleset) automates the check and backlash. The easiest trigger is the **Overreach button** on the character sheet: click it to open a chooser, set the rating, tick *as Spell* if it's a spell, then click the ability to roll. Or use the chat commands:

| Command | What it does |
|:---|:---|
| `/overreach spell <1-9> <ability>` | Spell branch. Validates your slots first — blocks unless the sheet has slots of that level **and** every slot of that level or higher is spent. |
| `/overreach ability <1-9> <ability> [feature]` | Ability branch. Optional feature name triggers a fuzzy "do you have this?" warning (never blocks). |
| `/overreach <1-9> <ability>` | Shorthand alias for the ability branch (no checks). |
| `/overreach slots` | Diagnostic — prints your slot counts so the GM can confirm setup. |

Ability is one of `str dex con int wis cha`. Examples:

- `/overreach spell 9 int` — force a 9th-level wizard spell (DC 29, rolled as an INT check + proficiency).
- `/overreach ability 3 wis Channel Divinity` — force Channel Divinity (DC 23, WIS check + proficiency).
- `/overreach ability 4 con Action Surge` — force Action Surge (DC 24, CON check + proficiency).

The roll posts as a standard ability-check card (`[CHECK] <Ability>` + the d20 result) routed through the ruleset's own check engine, so advantage, guidance, and similar effects apply automatically. On a failure it auto-applies the Shock damage and an `EXHAUSTION` effect (the ruleset interprets it for legacy or 2024 rules). The character must be on the Combat Tracker for exhaustion to land.

> [!note] Caveats
> Warlock **Pact Magic** slots aren't auto-validated yet — pact casters should use the ability branch. Each machine that will type the command needs the extension installed. The roll modifier comes from the named ability; the GM still adjudicates that you actually have the spell/feature.

---

## Designer's Notes

- **One engine, two faces.** `DC = 20 + power rating`, always-proficient check, backlash scaled to the same rating. Spell level and ability tier are just two ways of measuring "how much power are you forcing."
- **Self-balancing.** The *prize* of a high-rated effect scales faster than linearly, so the *success rate* is tuned to fall as the rating climbs, keeping expected value in check. You never have to re-balance for magic items or ability-score increases — the cancel holds.
- **Hangs cleanly into an extension.** The two branches map directly onto a single Fantasy Grounds module: one check-and-backlash function, fed by either a spell's level or a feature's tier. See planning notes when we scaffold the `.ext`.
- Sit any table-specific consequences (corruption tracks, the regional cold of the binding network) on the Backlash table for Sepia Uplands flavor.

---

> [!tip] Full rating tables
> For per-feature suggested ratings across both rule editions, see [[start-here/character-options/Character Overreach - Power Ratings|Character Overreach — Power Rating Reference]] (and the companion spreadsheet for a sortable working copy).

*See also: [[start-here/character-options/Character Overreach - Power Ratings|Power Rating Reference]] · [[start-here/character-options/index|Character Options MOC]] · [[library/relics/Relics of the Flanaess|Relics of the Flanaess]]*
