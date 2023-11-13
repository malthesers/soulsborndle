import type { Game, DamageType } from './'

export interface Answer {
  name: string
  game: Game | '?'
  souls: number
  health: number
  weaknesses: DamageType[]
  resistances: DamageType[]
}