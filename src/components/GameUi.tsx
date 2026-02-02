"use client";

import { useEffect, useState } from "react";
import Exploration from "./Exploration";
import Inventory from "./Inventory";
import Shop from "./Shop";
import HpBar from "./HpBar";

import { Item, Player } from "@/types/game";
import { createPlayer } from "@/lib/player";
import { loadPlayer, savePlayer } from "@/lib/save";


export default function GameUI() {
  const [log, setLog] = useState<string[]>([]);
  const [gold, setGold] = useState(0);

  const [inventory, setInventory] = useState<Item[]>([]);
  const [player, setPlayer] = useState<Player>(createPlayer());

  // 🔥 Load player from Supabase
  useEffect(() => {
    async function init() {
      const data = await loadPlayer();

      setGold(data.gold);
      setInventory(data.inventory);
      setPlayer({
        hp: data.hp,
        maxHp: data.maxHp,
        weapon: data.weapon ?? undefined
      });

      addLog("📡 Player carregado do Supabase!");
    }

    init();
  }, []);
  // 🔥 Auto-save whenever state changes
  useEffect(() => {
    savePlayer(gold, player, inventory);
  }, [gold, player, inventory]);
