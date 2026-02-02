export type Player = {
  id: string
  name: string
  level: number
  hp: number
  maxHp: number
  attack: number
  defense: number
}

export type Item = {
  id: string
  name: string
  description?: string
  rarity?: number
}