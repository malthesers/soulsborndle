import type { Boss } from '@/interfaces';

interface BloodborneBoss extends Boss {
  game: 'Bloodborne'
}

export const bloodborneBosses:BloodborneBoss[] = [
  {
    name: 'Amygdala',
    game: 'Bloodborne',
    health: 6404,
    souls: 21000,
    weaknesses: ['magic', 'fire', 'lightning'],
    resistances: ['strike']
  },
  {
    name: 'Blood-starved Beast',
    game: 'Bloodborne',
    health: 3470,
    souls: 6600,
    weaknesses: ['fire'],
    resistances: []
  },
  {
    name: 'Celestial Emissary',
    game: 'Bloodborne',
    health: 2764,
    souls: 24640,
    weaknesses: ['lightning', 'thrust'],
    resistances: ['physical', 'strike']
  },
  {
    name: 'Cleric Beast',
    game: 'Bloodborne',
    health: 3015,
    souls: 4000,
    weaknesses: ['fire'],
    resistances: ['strike']
  },
  {
    name: 'Darkbeast Paarl',
    game: 'Bloodborne',
    health: 4552,
    souls: 21000,
    weaknesses: ['magic', 'fire'],
    resistances: ['lightning', 'strike']
  },
  {
    name: 'Ebrietas, Daughter of the Cosmos',
    game: 'Bloodborne',
    health: 12493,
    souls: 36300,
    weaknesses: ['lightning', 'thrust'],
    resistances: ['strike']
  },
  {
    name: 'Father Gascoigne (Human)',
    game: 'Bloodborne',
    health: 2031,
    souls: 1800,
    weaknesses: ['fire'],
    resistances: ['lightning']
  },
  {
    name: 'Father Gascoigne (Beast)',
    game: 'Bloodborne',
    health: 2031,
    souls: 1800,
    weaknesses: ['fire'],
    resistances: []
  },
  {
    name: 'Gehrman, the First Hunter',
    game: 'Bloodborne',
    health: 14293,
    souls: 128000,
    weaknesses: ['magic', 'lightning'],
    resistances: []
  },
  {
    name: 'Martyr Logarius',
    game: 'Bloodborne',
    health: 9081,
    souls: 25600,
    weaknesses: [],
    resistances: ['magic']
  },
  {
    name: 'Mergo\'s Wet Nurse',
    game: 'Bloodborne',
    health: 14081,
    souls: 72000,
    weaknesses: ['magic', 'fire', 'lightning'],
    resistances: ['strike']
  },
  {
    name: 'Micolash, Host of the Nightmare',
    game: 'Bloodborne',
    health: 5250,
    souls: 48400,
    weaknesses: [],
    resistances: ['magic']
  },
  {
    name: 'Moon Presence',
    game: 'Bloodborne',
    health: 8909,
    souls: 230000,
    weaknesses: ['magic', 'fire', 'lightning'],
    resistances: []
  },
  {
    name: 'The One Reborn',
    game: 'Bloodborne',
    health: 10375,
    souls: 36300,
    weaknesses: ['fire', 'lightning'],
    resistances: ['magic']
  },
  {
    name: 'Rom, the Vacuous Spider',
    game: 'Bloodborne',
    health: 5058,
    souls: 36300,
    weaknesses: ['magic', 'fire', 'lightning'],
    resistances: []
  },
  {
    name: 'Shadow of Yharnam (Sword)',
    game: 'Bloodborne',
    health: 3645,
    souls: 18500,
    weaknesses: ['magic', 'lightning'],
    resistances: []
  },
  {
    name: 'Shadow of Yharnam (Candle)',
    game: 'Bloodborne',
    health: 2302,
    souls: 18500,
    weaknesses: ['magic', 'lightning'],
    resistances: []
  },
  {
    name: 'Shadow of Yharnam (Fireball)',
    game: 'Bloodborne',
    health: 2046,
    souls: 18500,
    weaknesses: ['fire'],
    resistances: []
  },
  {
    name: 'Vicar Amelia',
    game: 'Bloodborne',
    health: 5367,
    souls: 15000,
    weaknesses: ['fire'],
    resistances: ['strike']
  },
  {
    name: 'Witch of Hemwick',
    game: 'Bloodborne',
    health: 2611,
    souls: 11800,
    weaknesses: [],
    resistances: []
  },
  {
    name: 'Ludwig, The Accursed',
    game: 'Bloodborne',
    health: 16658,
    souls: 34500,
    weaknesses: ['fire'],
    resistances: []
  },
  {
    name: 'Ludwig, The Holy Blade',
    game: 'Bloodborne',
    health: 16658,
    souls: 34500,
    weaknesses: [],
    resistances: []
  },
  {
    name: 'Orphan of Kos',
    game: 'Bloodborne',
    health: 19217,
    souls: 60000,
    weaknesses: ['fire'],
    resistances: ['magic']
  },
  {
    name: 'Lady Maria of the Astral Clocktower',
    game: 'Bloodborne',
    health: 14081,
    souls: 39000,
    weaknesses: ['magic', 'lightning'],
    resistances: ['fire']
  },
  {
    name: 'Living Failures',
    game: 'Bloodborne',
    health: 20646,
    souls: 22000,
    weaknesses: ['lightning', 'thrust'],
    resistances: ['magic']
  },
  {
    name: 'Laurence, The First Vicar',
    game: 'Bloodborne',
    health: 21242,
    souls: 29500,
    weaknesses: ['strike'],
    resistances: ['fire']
  }
]
