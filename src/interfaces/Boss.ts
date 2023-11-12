export interface Boss {
  name: string
  game: "Demon's Souls" | "Dark Souls" | "Dark Souls II" | "Dark Souls III" | "Bloodborne" | "Elden Ring"
  health: number
  souls: number
  weaknesses: DamageTypeList
  resistances: DamageTypeList
}

type Game = "Demon's Souls" | "Dark Souls" | "Dark Souls II" | "Dark Souls III" | "Bloodborne" | "Elden Ring"
type DamageType = 'magic' | 'fire' | 'lightning' | 'dark' | 'holy' | 'physical' | 'slash' | 'strike' | 'thrust'
type DamageTypeList = [] | [DamageType] | [DamageType, DamageType] | [DamageType, DamageType, DamageType]