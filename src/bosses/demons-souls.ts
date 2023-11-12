import { Boss } from "../interfaces/Boss";

interface DemonsSoulsBoss extends Boss {
  game: "Demon's Souls"
}

export const demonsSoulsBosses:DemonsSoulsBoss[] = [
  {
    "name": "Phalanx",
    "game": "Demon's Souls",
    "health": 1150,
    "souls": 1270,
    "weaknesses": ["fire"],
    "resistances": ["strike"]
  },
  {
    "name": "Tower Knight",
    "game": "Demon's Souls",
    "health": 1365,
    "souls": 8570,
    "weaknesses": ["magic"],
    "resistances": []
  },
  {
    "name": "Penetrator",
    "game": "Demon's Souls",
    "health": 2960,
    "souls": 35850,
    "weaknesses": ["magic", "strike"],
    "resistances": []
  },
  {
    "name": "Old King Allant",
    "game": "Demon's Souls",
    "health": 2960,
    "souls": 75500,
    "weaknesses": ["fire"],
    "resistances": ["magic"]
  },
  {
    "name": "Armor Spider",
    "game": "Demon's Souls",
    "health": 1732,
    "souls": 5950,
    "weaknesses": ["magic"],
    "resistances": ["fire", "slash"]
  },
  {
    "name": "Flamelurker",
    "game": "Demon's Souls",
    "health": 3720,
    "souls": 22500,
    "weaknesses": ["magic"],
    "resistances": ["fire", "slash", "thrust"]
  },
  {
    "name": "Dragon God",
    "game": "Demon's Souls",
    "health": 4340,
    "souls": 26800,
    "weaknesses": [],
    "resistances": ["fire"]
  },
  {
    "name": "Fool's Idol",
    "game": "Demon's Souls",
    "health": 1864,
    "souls": 8430,
    "weaknesses": ["fire"],
    "resistances": ["magic"]
  },
  {
    "name": "Maneater",
    "game": "Demon's Souls",
    "health": 2790,
    "souls": 13880,
    "weaknesses": ["fire"],
    "resistances": []
  },
  {
    "name": "Old Monk",
    "game": "Demon's Souls",
    "health": 0,
    "souls": 0,
    "weaknesses": ["magic"],
    "resistances": ["slash"]
  },
  {
    "name": "Adjudicator",
    "game": "Demon's Souls",
    "health": 1306,
    "souls": 11700,
    "weaknesses": [],
    "resistances": ["magic", "fire"]
  },
  {
    "name": "Old Hero",
    "game": "Demon's Souls",
    "health": 4410,
    "souls": 33750,
    "weaknesses": ["fire"],
    "resistances": []
  },
  {
    "name": "Storm King",
    "game": "Demon's Souls",
    "health": 1172,
    "souls": 40400,
    "weaknesses": ["magic"],
    "resistances": []
  },
  {
    "name": "Leechmonger",
    "game": "Demon's Souls",
    "health": 2047,
    "souls": 8249,
    "weaknesses": ["fire"],
    "resistances": []
  },
  {
    "name": "Dirty Colossus",
    "game": "Demon's Souls",
    "health": 3367,
    "souls": 33433,
    "weaknesses": ["fire"],
    "resistances": ["thrust"]
  },
  {
    "name": "Garl Vinland",
    "game": "Demon's Souls",
    "health": 1320,
    "souls": 16750,
    "weaknesses": ["fire"],
    "resistances": ["magic"]
  },
  {
    "name": "Maiden Astraea",
    "game": "Demon's Souls",
    "health": 3055,
    "souls": 23400,
    "weaknesses": ["fire"],
    "resistances": []
  }
]
