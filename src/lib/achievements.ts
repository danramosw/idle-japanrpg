export function checkAchievements(explores: number) {
  if (explores >= 50) {
    return "🏆 Conquista: Explorador do Bambu!";
  }

  if (explores >= 200) {
    return "🏆 Conquista: Caçador de Yokai!";
  }

  return null;
}
