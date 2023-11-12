import type { Game, DamageTypeList } from './'

export interface Known {
  name: string
  game: '?' | Game
  souls: '?' | number
  health: '?' | number
  weaknesses: DamageTypeList
  resistances: DamageTypeList
  hasNo: {
    weaknesses: boolean
    resistances: boolean
  }
}