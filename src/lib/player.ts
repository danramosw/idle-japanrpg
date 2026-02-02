import { Player } from "@/types/game";

export function createPlayer(): Player {
  return {
    hp: 100,
    maxHp: 100,
    weapon: undefined
  };
}

export function healPlayer(player: Player, amount: number) {
  player.hp = Math.min(player.maxHp, player.hp + amount);
}
