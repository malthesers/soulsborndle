export type Game = '?' | "Demon's Souls" | 'Dark Souls' | 'Dark Souls II' | 'Dark Souls III' | 'Bloodborne' | 'Elden Ring'

export type DamageType = 'magic' | 'fire' | 'lightning' | 'dark' | 'holy' | 'physical' | 'slash' | 'strike' | 'thrust'

export type DamageTypeList = [] | [DamageType] | [DamageType, DamageType] | [DamageType, DamageType, DamageType]

export interface Boss {
  name: string
  game: Game
  health: number
  souls: number
  weaknesses: DamageType[]
  resistances: DamageType[]
}

export interface Known extends Boss {
  game: Game | '?'
  souls: number | '?'
  health: number | '?'
  hasNo: {
    weaknesses: boolean
    resistances: boolean
  }
}

export interface Chosen {
  demonsSouls: boolean
  darkSouls1: boolean
  bloodborne: boolean
  darkSouls2: boolean
  eldenRing: boolean
  darkSouls3: boolean
}
