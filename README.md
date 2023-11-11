[![](/public/docs/readme-cover.png)](https://malthesers.github.io/soulsborndle/)

# <img src="/public/favicon-32x32.png" alt="soulsborndle logo" align="center"> Soulsborndle

A Wordle-like Souls-like web game - guess the boss by using hints from your past guesses!

[![](/public/docs/new-game-link.png)](https://malthesers.github.io/soulsborndle/)

## 📋 Instructions

At every new game, a random boss will be chosen for you to guess. Start by entering any boss and use the provided feedback to figure out a new guess. Continue this way, narrowing down the potential bosses to eventually get the answer.

The info box shows the known information you have correctly guessed, updating dynamically as you go. Likewise, the resistances and weaknesses will pop up here, as they are getting confirmed by your guesses.

The _souls_ parameter is comprised of _souls_ as they are known in _Demon's Souls_ and the _Dark Souls_ series, _blood echoes_ as they are known as in Bloodborne and _runes_ as they are known as in Elden Ring.

Both _health_ and _souls_ have arrows to indicate if the correct answer is higher or lower. An arrow above ( <picture><img src="/src/assets/icons/arrow_up.svg" width="15"></picture> ) means the correct answer is higher than the guessed one, while one below ( <picture><img src="/src/assets/icons/arrow_down.svg" width="15"></picture> ) means the answer is lower.

The background colours of the boss information is described below.

| Correct | Partially | Incorrect |
| - | - | - |
| <picture><img src="/public/docs/bg-incorrect.png"></picture> | <picture><img src="/public/docs/bg-partial.png"></picture> | <picture><img src="/public/docs/bg-correct.png"></picture> |

### 💀 Bosses

Bosses included in the pool of possible answers come from the games listed below. Open the _Bosses_ modal to modify the included games. Play only _Bloodborne_, the _Dark Souls_ series or any combination you'd like!

- Demon's Souls
- Dark Souls
- Dark Souls II
- Dark Souls III
- Bloodborne
- Elden Ring

Bosses that are part of **multi-boss encounters** may or may not be split into separate entries, if they are unique enough to constitute their own entry, i.e. they have different health pools, resistances or their own name.

Additionally bosses that have **multiple phases**, may have several entries, if their resistances changes inbetween fights, e.g. Slave Knight Gael becoming more resistant to dark after first phase.

### ⚔️ Damage types

Below are the damage types used for calculationg the weaknesses and resistances, including the icons used to represent each individual damage type as well as a description, as the names of similar damage types vary throughout the games, e.g. _lightning_ being _bolt_ in Bloodborne. Hence _bolt_ is treated as _lightning_ to simplify the types of damage instead of separating them.

| Icon | Name | Description |
| - | - | - |
| <picture><img src="/public/icons/magic.svg" width="35" height="35"></picture> | Magic | Comprised of magic as well as Aacane from Bloodborne |
| <picture><img src="/public/icons/fire.svg" width="35" height="35"></picture> | Fire | Comprised of fire from each individual game |
| <picture><img src="/public/icons/lightning.svg" width="35" height="35"></picture> | Lightning | Comprised of lightning as well as bolt from Bloodborne |
| <picture><img src="/public/icons/dark.svg" width="35" height="35"></picture> | Dark | Comprised of dark from the Dark Souls series |
| <picture><img src="/public/icons/holy.svg" width="35" height="35"></picture> | Holy | Comprised of holy from Elden Ring |
| <picture><img src="/public/icons/physical.svg" width="35" height="35"></picture> | Physical | Comprised of physical as well as standard from Dark Souls III and Elden Ring |
| <picture><img src="/public/icons/slash.svg" width="35" height="35"></picture> | Slash | Comprised of slash from all the games excluding Bloodborne |
| <picture><img src="/public/icons/strike.svg" width="35" height="35"></picture> | Strike | Comprised of strike as well as blunt from Demon's Souls and Bloodborne |
| <picture><img src="/public/icons/thrust.svg" width="35" height="35"></picture> | Thrust | Comprised of thrust as well as pierce from Demon's Souls and Elden Ring |

### 🥇 Records

- Your top 10 personal best attempts are stored and can be seen in a modal by clicking the _Records_ button.
- This displays the name of the guessed boss and the amount of attempts needed to guess the boss.
- Addtionally you can see the games whose bosses were included when the given record was set.
- You can clear the currently stored records at any time by clicking the _Clear records_ button.

## 🙌 Support

...is for me? 😳👉👈

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S3NYYC4)
