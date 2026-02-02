import { getRandomInt } from './drops'

export function calculateDamage(attacker: { attack: number }, defender: { defense: number }) {
  const base = attacker.attack - defender.defense
  const variance = getRandomInt(-2, 2)
  return Math.max(1, base + variance)
}