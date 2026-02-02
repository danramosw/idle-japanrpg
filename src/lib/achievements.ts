export type Achievement = {
  id: string
  title: string
  description?: string
  unlockedAt?: string
}

export const achievements: Achievement[] = [
  { id: 'first-kill', title: 'Primeira Vitória', description: 'Derrote seu primeiro inimigo' },
]