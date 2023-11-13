export type Game = 'Demon\'s Souls' | 'Dark Souls' | 'Dark Souls II' | 'Dark Souls III' | 'Bloodborne' | 'Elden Ring'

export type DamageType = 'magic' | 'fire' | 'lightning' | 'dark' | 'holy' | 'physical' | 'slash' | 'strike' | 'thrust'

export type DamageTypeList = [] | [DamageType] | [DamageType, DamageType] | [DamageType, DamageType, DamageType]