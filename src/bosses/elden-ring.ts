import type { Boss } from "@/interfaces";

interface EldenRingBoss extends Boss {
  game: 'Elden Ring'
}

export const eldenRingBosses:EldenRingBoss[] = [
  {
    "name": "Godrick the Grafted",
    "game": "Elden Ring",
    health: 6080,
    souls: 20000,
    weaknesses: [],
    resistances: ["holy"]
  },
  {
    "name": "Rennala, Queen of the Full Moon",
    "game": "Elden Ring",
    health: 7590,
    souls: 40000,
    weaknesses: ["physical", "slash", "thrust"],
    resistances: ["magic"]
  },
  {
    "name": "Starscourge Radahn",
    "game": "Elden Ring",
    health: 9572,
    souls: 70000,
    weaknesses: ["thrust"],
    resistances: ["holy"]
  },
  {
    "name": "Morgott, The Omen King",
    "game": "Elden Ring",
    health: 10399,
    souls: 120000,
    weaknesses: ["slash"],
    resistances: ["holy"]
  },
  {
    "name": "God-Devouring Serpent",
    "game": "Elden Ring",
    health: 30493,
    souls: 130000,
    weaknesses: [],
    resistances: ["fire"]
  },
  {
    "name": "Rykard, Lord of Blasphemy",
    "game": "Elden Ring",
    health: 59174,
    souls: 130000,
    weaknesses: ["fire"],
    resistances: []
  },
  {
    "name": "Mohg, Lord of Blood",
    "game": "Elden Ring",
    health: 18389,
    souls: 420000,
    weaknesses: [],
    resistances: ["fire"]
  },
  {
    "name": "Malenia, Blade of Miquella",
    "game": "Elden Ring",
    health: 33251,
    souls: 480000,
    weaknesses: ["fire"],
    resistances: ["holy"]
  },
  {
    "name": "Lichdragon Fortissax",
    "game": "Elden Ring",
    health: 12903,
    souls: 90000,
    weaknesses: ["thrust"],
    resistances: ["lightning", "holy"]
  },
  {
    "name": "Beast Clergyman",
    "game": "Elden Ring",
    health: 10620,
    souls: 220000,
    weaknesses: [],
    resistances: ["holy"]
  },
  {
    "name": "Maliketh, The Black Blade",
    "game": "Elden Ring",
    health: 10620,
    souls: 220000,
    weaknesses: [],
    resistances: ["holy"]
  },
  {
    "name": "Astel, Naturalborn of the Void",
    "game": "Elden Ring",
    health: 11170,
    souls: 80000,
    weaknesses: [],
    resistances: []
  },
  {
    "name": "Regal Ancestor Spirit",
    "game": "Elden Ring",
    health: 6301,
    souls: 24000,
    weaknesses: ["fire", "holy", "slash"],
    resistances: ["magic"]
  },
  {
    "name": "Radagon of the Golden Order",
    "game": "Elden Ring",
    health: 13339,
    souls: 500000,
    weaknesses: ["strike"],
    resistances: ["holy"]
  },
  {
    "name": "Elden Beast",
    "game": "Elden Ring",
    health: 22127,
    souls: 500000,
    weaknesses: [],
    resistances: ["holy"]
  },
  {
    "name": "Godfrey, First Elden Lord",
    "game": "Elden Ring",
    health: 21903,
    souls: 300000,
    weaknesses: [],
    resistances: ["magic", "fire", "holy"]
  },
  {
    "name": "Hoarah Loux, Warrior",
    "game": "Elden Ring",
    health: 21903,
    souls: 300000,
    weaknesses: ["slash"],
    resistances: ["holy"]
  },
  {
    "name": "Fire Giant",
    "game": "Elden Ring",
    health: 42363,
    souls: 180000,
    weaknesses: ["slash"],
    resistances: ["fire"]
  },
  {
    "name": "Dragonlord Placidusax",
    "game": "Elden Ring",
    health: 26651,
    souls: 210000,
    weaknesses: ["thrust"],
    resistances: []
  },
  {
    "name": "Ancestor Spirit",
    "game": "Elden Ring",
    health: 4393,
    souls: 13000,
    weaknesses: ["fire", "holy", "slash"],
    resistances: ["magic"]
  },
  {
    "name": "Margit, the Fell Omen",
    "game": "Elden Ring",
    health: 4174,
    souls: 12000,
    weaknesses: ["slash"],
    resistances: ["holy"]
  },
  {
    "name": "Flying Dragon Agheel",
    "game": "Elden Ring",
    health: 3200,
    souls: 5000,
    weaknesses: ["thrust"],
    resistances: []
  },
  {
    "name": "Dragonkin Soldier of Nokstella",
    "game": "Elden Ring",
    health: 4372,
    souls: 12000,
    weaknesses: ["slash"],
    resistances: ["lightning"]
  },
  {
    "name": "Leonine Misbegotten",
    "game": "Elden Ring",
    health: 2198,
    souls: 3800,
    weaknesses: ["fire", "slash"],
    resistances: []
  },
  {
    "name": "Red Wolf of Radagon",
    "game": "Elden Ring",
    health: 2204,
    souls: 14000,
    weaknesses: ["slash"],
    resistances: ["magic"]
  },
  {
    "name": "Glintstone Dragon Adula",
    "game": "Elden Ring",
    health: 11550,
    souls: 120000,
    weaknesses: ["thrust"],
    resistances: ["magic"]
  },
  {
    "name": "Borealis, the Freezing Fog",
    "game": "Elden Ring",
    health: 11268,
    souls: 100000,
    weaknesses: ["strike"],
    resistances: ["slash", "thrust"]
  },
  {
    "name": "Decaying Ekzykes",
    "game": "Elden Ring",
    health: 23731,
    souls: 38000,
    weaknesses: ["fire"],
    resistances: []
  },
  {
    "name": "Sir Gideon Ofnir, The All-Knowing",
    "game": "Elden Ring",
    health: 6226,
    souls: 150000,
    weaknesses: ["lightning"],
    resistances: []
  },
  {
    "name": "Ancient Dragon Lansseax",
    "game": "Elden Ring",
    health: 9087,
    souls: 60000,
    weaknesses: ["thrust"],
    resistances: ["lightning"]
  },
  {
    "name": "Commander O'Neil",
    "game": "Elden Ring",
    health: 9210,
    souls: 12000,
    weaknesses: ["thrust"],
    resistances: ["slash"]
  },
  {
    "name": "Commander Niall",
    "game": "Elden Ring",
    health: 15541,
    souls: 90000,
    weaknesses: ["thrust"],
    resistances: ["slash"]
  },
  {
    "name": "Crucible Knight Siluria",
    "game": "Elden Ring",
    health: 4606,
    souls: 25000,
    weaknesses: [],
    resistances: ["magic", "holy"]
  },
  {
    "name": "Elemer of the Briar",
    "game": "Elden Ring",
    health: 4897,
    souls: 24000,
    weaknesses: [],
    resistances: ["magic", "fire", "holy"]
  },
  {
    "name": "Flying Dragon Greyll",
    "game": "Elden Ring",
    health: 11500,
    souls: 80000,
    weaknesses: ["thrust"],
    resistances: []
  },
  {
    "name": "Glintstone Dragon Smarag",
    "game": "Elden Ring",
    health: 6069,
    souls: 14000,
    weaknesses: ["thrust"],
    resistances: ["magic"]
  },
  {
    "name": "Godfrey, First Elden Lord (Golden Shade)",
    "game": "Elden Ring",
    health: 7099,
    souls: 80000,
    weaknesses: ["lightning", "thrust"],
    resistances: ["holy"]
  },
  {
    "name": "Godskin Apostle",
    "game": "Elden Ring",
    health: 13596,
    souls: 94000,
    weaknesses: ["slash"],
    resistances: ["fire", "holy"]
  },
  {
    "name": "Fia's Champions",
    "game": "Elden Ring",
    health: 8569,
    souls: 40000,
    weaknesses: [],
    resistances: []
  },
  {
    "name": "Godskin Noble",
    "game": "Elden Ring",
    health: 10060,
    souls: 50000,
    weaknesses: ["thrust"],
    resistances: ["fire", "holy", "strike"]
  },
  {
    "name": "Great Wyrm Theodorix",
    "game": "Elden Ring",
    health: 25649,
    souls: 180000,
    weaknesses: ["physical", "strike", "thrust"],
    resistances: ["fire"]
  },
  {
    "name": "Loretta, Knight of the Haligtree",
    "game": "Elden Ring",
    health: 13397,
    souls: 200000,
    weaknesses: ["lightning"],
    resistances: ["magic", "fire"]
  },
  {
    "name": "Royal Knight Loretta",
    "game": "Elden Ring",
    health: 4214,
    souls: 7500,
    weaknesses: ["lightning"],
    resistances: ["magic", "fire"]
  },
  {
    "name": "Magma Wyrm Makar",
    "game": "Elden Ring",
    health: 7141,
    souls: 24000,
    weaknesses: ["physical", "strike", "thrust"],
    resistances: ["fire"]
  },
  {
    "name": "Mohg, the Omen",
    "game": "Elden Ring",
    health: 14000,
    souls: 100000,
    weaknesses: [],
    resistances: ["fire"]
  },
  {
    "name": "Mimic Tear",
    "game": "Elden Ring",
    health: 19536,
    souls: 10000,
    weaknesses: [],
    resistances: []
  }
]
