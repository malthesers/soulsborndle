import { demonsSoulsBosses } from './demons-souls'
import { darkSouls1Bosses } from './dark-souls-1'
import { darkSouls2Bosses } from './dark-souls-2'
import { darkSouls3Bosses } from './dark-souls-3'
import { bloodborneBosses } from './bloodborne'
import { eldenRingBosses } from './elden-ring'
import type { Boss } from '@/types'

const bosses: Boss[] = [...demonsSoulsBosses, ...darkSouls1Bosses, ...darkSouls2Bosses, ...darkSouls3Bosses, ...bloodborneBosses, ...eldenRingBosses]

export { bosses }
