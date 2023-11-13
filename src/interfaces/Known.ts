import type { Game, DamageType } from './'

export interface Known {
  name: string
  game: Game | '?'
  souls: number | '?'
  health: number | '?'
  weaknesses: DamageType[]
  resistances: DamageType[]
  hasNo: {
    weaknesses: boolean
    resistances: boolean
  }
}