import type { Boss } from '@/types'

interface DarkSouls2Boss extends Boss {
  game: 'Dark Souls II'
}

export const darkSouls2Bosses: DarkSouls2Boss[] = [
  {
    name: 'The Last Giant',
    game: 'Dark Souls II',
    health: 2530,
    souls: 10000,
    weaknesses: ['dark'],
    resistances: []
  },
  {
    name: 'The Pursuer',
    game: 'Dark Souls II',
    health: 3110,
    souls: 17000,
    weaknesses: ['lightning', 'strike'],
    resistances: ['dark']
  },
  {
    name: 'Executioners Chariot',
    game: 'Dark Souls II',
    health: 4140,
    souls: 19000,
    weaknesses: ['fire', 'lightning'],
    resistances: ['dark', 'strike']
  },
  {
    name: 'Looking Glass Knight',
    game: 'Dark Souls II',
    health: 6540,
    souls: 25500,
    weaknesses: ['magic', 'dark', 'strike'],
    resistances: ['lightning']
  },
  {
    name: 'Skeleton Lords (Scythe Lord)',
    game: 'Dark Souls II',
    health: 780,
    souls: 15000,
    weaknesses: ['fire', 'strike'],
    resistances: ['magic', 'thrust']
  },
  {
    name: 'Skeleton Lords (Halberd Lord)',
    game: 'Dark Souls II',
    health: 780,
    souls: 15000,
    weaknesses: ['fire', 'strike'],
    resistances: ['magic', 'thrust']
  },
  {
    name: 'Skeleton Lords (Staff Lord)',
    game: 'Dark Souls II',
    health: 520,
    souls: 15000,
    weaknesses: ['fire', 'strike'],
    resistances: ['magic', 'thrust']
  },
  {
    name: 'Flexible Sentry',
    game: 'Dark Souls II',
    health: 3150,
    souls: 14000,
    weaknesses: ['lightning'],
    resistances: ['fire']
  },
  {
    name: 'Lost Sinner',
    game: 'Dark Souls II',
    health: 3560,
    souls: 45000,
    weaknesses: ['magic'],
    resistances: ['fire']
  },
  {
    name: 'Belfry Gargoyles',
    game: 'Dark Souls II',
    health: 1400,
    souls: 25000,
    weaknesses: ['magic', 'strike'],
    resistances: []
  },
  {
    name: 'Ruin Sentinel',
    game: 'Dark Souls II',
    health: 2330,
    souls: 33000,
    weaknesses: ['lightning', 'strike'],
    resistances: []
  },
  {
    name: 'Royal Rat Vanguard',
    game: 'Dark Souls II',
    health: 1410,
    souls: 11000,
    weaknesses: ['fire'],
    resistances: []
  },
  {
    name: 'Royal Rat Authority',
    game: 'Dark Souls II',
    health: 4330,
    souls: 14000,
    weaknesses: ['fire'],
    resistances: []
  },
  {
    name: 'Scorpioness Najka',
    game: 'Dark Souls II',
    health: 5911,
    souls: 23000,
    weaknesses: ['fire'],
    resistances: ['magic']
  },
  {
    name: "The Duke's Dear Freja",
    game: 'Dark Souls II',
    health: 4220,
    souls: 42000,
    weaknesses: ['fire', 'strike'],
    resistances: ['magic', 'lightning', 'dark']
  },
  {
    name: 'Mytha, the Baneful Queen',
    game: 'Dark Souls II',
    health: 3570,
    souls: 20000,
    weaknesses: ['fire'],
    resistances: ['magic', 'lightning', 'slash']
  },
  {
    name: 'The Rotten',
    game: 'Dark Souls II',
    health: 7080,
    souls: 47000,
    weaknesses: ['lightning', 'thrust'],
    resistances: ['dark', 'strike']
  },
  {
    name: 'Old Dragonslayer',
    game: 'Dark Souls II',
    health: 2880,
    souls: 20000,
    weaknesses: [],
    resistances: ['dark']
  },
  {
    name: 'Covetous Demon',
    game: 'Dark Souls II',
    health: 4440,
    souls: 13000,
    weaknesses: ['magic', 'fire', 'thrust'],
    resistances: ['lightning', 'strike']
  },
  {
    name: 'Smelter Demon (Red)',
    game: 'Dark Souls II',
    health: 5970,
    souls: 32000,
    weaknesses: ['lightning', 'strike', 'thrust'],
    resistances: ['fire']
  },
  {
    name: 'Old Iron King',
    game: 'Dark Souls II',
    health: 6070,
    souls: 48000,
    weaknesses: ['lightning', 'strike'],
    resistances: ['fire']
  },
  {
    name: 'Guardian Dragon',
    game: 'Dark Souls II',
    health: 5270,
    souls: 37000,
    weaknesses: ['magic', 'dark'],
    resistances: ['fire']
  },
  {
    name: 'Demon of Song',
    game: 'Dark Souls II',
    health: 6180,
    souls: 26000,
    weaknesses: ['magic', 'lightning', 'dark'],
    resistances: ['fire']
  },
  {
    name: 'Velstadt, the Royal Aegis',
    game: 'Dark Souls II',
    health: 6290,
    souls: 50000,
    weaknesses: ['lightning', 'strike'],
    resistances: ['dark']
  },
  {
    name: 'Vendrick',
    game: 'Dark Souls II',
    health: 11450,
    souls: 90000,
    weaknesses: ['slash'],
    resistances: ['dark']
  },
  {
    name: 'Darklurker',
    game: 'Dark Souls II',
    health: 5770,
    souls: 35000,
    weaknesses: ['lightning'],
    resistances: ['dark']
  },
  {
    name: 'Dragonrider',
    game: 'Dark Souls II',
    health: 3050,
    souls: 12000,
    weaknesses: ['fire', 'lightning', 'strike'],
    resistances: []
  },
  {
    name: 'Twin Dragonriders (Archer)',
    game: 'Dark Souls II',
    health: 1470,
    souls: 26000,
    weaknesses: ['fire', 'lightning', 'strike'],
    resistances: []
  },
  {
    name: 'Twin Dragonriders (Warrior)',
    game: 'Dark Souls II',
    health: 3670,
    souls: 26000,
    weaknesses: ['fire', 'lightning', 'strike'],
    resistances: []
  },
  {
    name: 'Prowling Magus and Congregation',
    game: 'Dark Souls II',
    health: 2580,
    souls: 7000,
    weaknesses: [],
    resistances: []
  },
  {
    name: 'Giant Lord',
    game: 'Dark Souls II',
    health: 5970,
    souls: 75000,
    weaknesses: ['dark'],
    resistances: []
  },
  {
    name: 'Ancient Dragon',
    game: 'Dark Souls II',
    health: 19840,
    souls: 120000,
    weaknesses: ['magic', 'lightning', 'dark'],
    resistances: ['fire']
  },
  {
    name: 'Throne Watcher',
    game: 'Dark Souls II',
    health: 2760,
    souls: 68000,
    weaknesses: ['lightning', 'strike'],
    resistances: []
  },
  {
    name: 'Throne Defender',
    game: 'Dark Souls II',
    health: 3910,
    souls: 68000,
    weaknesses: ['lightning', 'strike'],
    resistances: []
  },
  {
    name: 'Nashandra',
    game: 'Dark Souls II',
    health: 8770,
    souls: 90000,
    weaknesses: ['lightning', 'strike'],
    resistances: ['dark']
  },
  {
    name: 'Aldia, Scholar of the First Sin',
    game: 'Dark Souls II',
    health: 6800,
    souls: 0,
    weaknesses: ['slash'],
    resistances: ['fire', 'dark']
  },
  {
    name: 'Elana, Squalid Queen',
    game: 'Dark Souls II',
    health: 9280,
    souls: 54000,
    weaknesses: ['magic', 'strike'],
    resistances: ['dark']
  },
  {
    name: 'Sinh, the Slumbering Dragon',
    game: 'Dark Souls II',
    health: 10030,
    souls: 96000,
    weaknesses: ['magic', 'dark'],
    resistances: ['fire', 'lightning']
  },
  {
    name: 'Afflicted Graverobber',
    game: 'Dark Souls II',
    health: 3350,
    souls: 60000,
    weaknesses: [],
    resistances: []
  },
  {
    name: 'Ancient Soldier Varg',
    game: 'Dark Souls II',
    health: 3310,
    souls: 60000,
    weaknesses: [],
    resistances: []
  },
  {
    name: 'Cerah the Old Explorer',
    game: 'Dark Souls II',
    health: 2540,
    souls: 60000,
    weaknesses: [],
    resistances: []
  },
  {
    name: 'Smelter Demon (Blue)',
    game: 'Dark Souls II',
    health: 9260,
    souls: 75000,
    weaknesses: ['dark', 'strike'],
    resistances: ['magic']
  },
  {
    name: 'Fume Knight',
    game: 'Dark Souls II',
    health: 10100,
    souls: 84000,
    weaknesses: ['lightning', 'dark', 'physical'],
    resistances: ['fire']
  },
  {
    name: 'Sir Alonne',
    game: 'Dark Souls II',
    health: 10140,
    souls: 80000,
    weaknesses: ['dark', 'thrust'],
    resistances: ['magic']
  },
  {
    name: 'Burnt Ivory King',
    game: 'Dark Souls II',
    health: 8040,
    souls: 92000,
    weaknesses: ['lightning', 'strike'],
    resistances: []
  },
  {
    name: "Aava, the King's Pet",
    game: 'Dark Souls II',
    health: 8930,
    souls: 78000,
    weaknesses: ['fire'],
    resistances: []
  },
  {
    name: "Lud, the King's Pet",
    game: 'Dark Souls II',
    health: 5070,
    souls: 56000,
    weaknesses: ['fire'],
    resistances: []
  },
  {
    name: "Zallen, the King's Pet",
    game: 'Dark Souls II',
    health: 5070,
    souls: 56000,
    weaknesses: ['fire'],
    resistances: []
  }
]
