import { supabase } from "./supabase";
import { Player, Item } from "@/types/game";

export async function loadPlayer() {
  // login anon
  const {
    data: { user }
  } = await supabase.auth.signInAnonymously();

  if (!user) throw new Error("No user");

  // buscar player
  const { data } = await supabase
    .from("players")
    .select("*")
    .eq("id", user.id)
    .single();

  // se não existe → cria
  if (!data) {
    await supabase.from("players").insert({
      id: user.id,
      gold: 0,
      hp: 100,
      max_hp: 100,
      inventory: [],
      weapon: null
    });

    return {
      id: user.id,
      gold: 0,
      hp: 100,
      maxHp: 100,
      inventory: [],
      weapon: null
    };
  }

  return {
    id: user.id,
    gold: data.gold,
    hp: data.hp,
    maxHp: data.max_hp,
    inventory: data.inventory as Item[],
    weapon: data.weapon as Item | null
  };
}

export async function savePlayer(
  gold: number,
  player: Player,
  inventory: Item[]
) {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("players").upsert({
    id: user.id,
    gold,
    hp: player.hp,
    max_hp: player.maxHp,
    inventory,
    weapon: player.weapon
  });
}
