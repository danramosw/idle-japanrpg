export function canCraft(inventory: Record<string, number>, recipe: Record<string, number>) {
  for (const key of Object.keys(recipe)) {
    if ((inventory[key] || 0) < recipe[key]) return false
  }
  return true
}

export function craft(inventory: Record<string, number>, recipe: Record<string, number>) {
  if (!canCraft(inventory, recipe)) throw new Error('Ingredientes insuficientes')
  const copy = { ...inventory }
  for (const key of Object.keys(recipe)) copy[key] -= recipe[key]
  return copy
}