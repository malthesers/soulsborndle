![soulsborndle cover image](https://github.com/malthesers/soulsborndle/blob/main/public/docs/readme-cover.png)

# ![soulsborndle logo](https://github.com/malthesers/soulsborndle/blob/main/public/favicon-32x32.png) Soulsborndle

A Wordle-like Souls-like web game - guess the boss by using hints from your past guesses!

[![](https://github.com/malthesers/soulsborndle/blob/main/public/docs/new-game-link.png)](https://malthesers.github.io/soulsborndle/)

## 📋 Instructions

At every new game, a random boss will be chosen for you to guess. Start by entering any boss and use the provided feedback to figure out a new guess. Continue this way, narrowing down the potential bosses to eventually get the answer.

The info box shows the known information you have correctly guessed, updating dynamically as you go. Likewise, the resistances and weaknesses will pop up here, as they are getting confirmed by your guesses.

The _souls_ parameter is comprised of _souls_ as they are known in _Demon's Souls_ and the _Dark Souls_ series, _blood echoes_ as they are known as in Bloodborne and _runes_ as they are known as in Elden Ring.

Both _health_ and _souls_ have arrows to indicate if the correct answer is higher or lower. An arrow above means the correct answer is higher than the guessed one, while one below means the answer is lower.

The background colours of the boss information is described below.

| Colour | Indication |
| - | - |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/docs/bg-incorrect.png" style="display: block; width:100%"> | The parameter is completely incorrect |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/docs/bg-partial.png" style="display: block; width:100%"> | The parameter is partially correct |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/docs/bg-correct.png" style="display: block; width:100%"> | The parameter is completely correct |

### 💀 Bosses

Bosses included in the pool of possible answers come from the games listed below. Open the _Bosses_ modal to modify the included games. Play only _Bloodborne_, the _Dark Souls_ series or any combination you'd like!

- Demon's Souls
- Dark Souls
- Dark Souls II
- Dark Souls III
- Bloodborne
- Elden Ring

Bosses that are **part of multi-boss encounters** may or may not be split into separate entries, if they are unique enough to constitute their own entry, e.g. they have different health pools, resistances or their own name.

Bosses that have **multiple phases**, may likewise have several entries, if their resistances changes inbetween fights, e.g. Slave Knight Gael becoming more resistant to dark after first phase.

### ⚔️ Damage types

Below are the damage types used for calculationg the weaknesses and resistances, including the icons used to represent each individual damage type as well as a description, as the names of similar damage types vary throughout the games, e.g. _lightning_ being _bolt_ in Bloodborne. Hence _bolt_ is treated as _lightning_ to simplify the types of damage instead of separating them.

| Icon | Name | Description |
| - | - | - |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/magic.svg" width="35" height="35">  | Magic | Comprised of magic as well as Aacane from Bloodborne |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/fire.svg" width="35" height="35">  | Fire | Comprised of fire from each individual game |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/lightning.svg" width="35" height="35">  | Lightning | Comprised of lightning as well as bolt from Bloodborne |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/dark.svg" width="35" height="35">  | Dark | Comprised of dark from the Dark Souls series |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/holy.svg" width="35" height="35">  | Holy | Comprised of holy from Elden Ring |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/physical.svg" width="35" height="35">  | Physical | Comprised of physical as well as standard from Dark Souls III and Elden Ring |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/slash.svg" width="35" height="35">  | Slash | Comprised of slash from all the games excluding Bloodborne |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/strike.svg" width="35" height="35">  | Strike | Comprised of strike as well as blunt from Demon's Souls and Bloodborne |
| <img src="https://github.com/malthesers/soulsborndle/blob/main/public/icons/thrust.svg" width="35" height="35">  | Thrust | Comprised of thrust as well as pierce from Demon's Souls and Elden Ring |

### 🥇 Records

- Your top 10 personal best attempts are stored and can be seen in a modal by clicking the _Records_ button.
- This displays the name of the guessed boss and the amount of attempts needed to guess the boss.
- Addtionally you can see the games whose bosses were included when the given record was set.
- You can clear the currently stored records at any time by clicking the _Clear records_ button.
