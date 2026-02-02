export function fightEnemy(level: number) {
  const enemyHp = 30 + level * 10;
  const enemyAtk = 5 + level * 2;

  const playerAtk = 10 + level * 3;

  let log: string[] = [];
  let hp = enemyHp;

  while (hp > 0) {
    const dmg = Math.floor(playerAtk + Math.random() * 8);
    hp -= dmg;

    log.push(`⚔️ Você golpeia o Yokai causando -${dmg} HP`);

    if (hp <= 0) {
      log.push("🏆 Yokai derrotado!");
      break;
    }

    const enemyDmg = Math.floor(enemyAtk + Math.random() * 5);
    log.push(`👹 Yokai contra-ataca causando -${enemyDmg} HP`);
  }

  return {
    win: true,
    log,
    gold: 20 + level * 5
  };
}
