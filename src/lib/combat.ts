export function fightEnemy(level: number, weaponBonus: number = 0) {
  const enemyHp = 30 + level * 10;
  const enemyDamage = 8 + level * 2;

  const playerDamage = 12 + weaponBonus;

  const win = playerDamage >= enemyHp;

  return {
    win,
    damageTaken: win ? enemyDamage : enemyDamage * 2,
    gold: win ? 40 + level * 10 : 10,
    log: win
      ? [
          `⚔️ Você derrotou o Yokai!`,
          `💥 Você recebeu ${enemyDamage} de dano`
        ]
      : [
          `💀 Você foi ferido gravemente!`,
          `💥 Você recebeu ${enemyDamage * 2} de dano`
        ]
  };
}
