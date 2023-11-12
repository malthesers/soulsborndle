import demonsSoulsBosses from './demons-souls.json'
import darkSouls1Bosses from './dark-souls-1.json'
import darkSouls2Bosses from './dark-souls-2.json'
import darkSouls3Bosses from './dark-souls-3.json'
import bloodborneBosses from './bloodborne.json'
import eldenRingBosses from './elden-ring.json'

const bosses = [
  ...demonsSoulsBosses,
  ...darkSouls1Bosses,
  ...darkSouls2Bosses,
  ...darkSouls3Bosses,
  ...bloodborneBosses,
  ...eldenRingBosses
]

export { bosses }
