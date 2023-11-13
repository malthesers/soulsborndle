import type { Game, DamageTypeList } from './'

export interface Answer {
  name: string
  game: Game | '?'
  souls: number
  health: number
  weaknesses: DamageTypeList
  resistances: DamageTypeList
}