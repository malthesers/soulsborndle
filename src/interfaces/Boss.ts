import type { Game, DamageTypeList } from './'

export interface Boss {
  name: string
  game: Game
  health: number
  souls: number
  weaknesses: DamageType[]
  resistances: DamageType[]
}