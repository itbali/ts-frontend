import * as analyticsService from "../services/analytics-service";

export async function loadAchievements() {
  const list = document.getElementById("achievements-list");
  if (!list) return;

  list.innerHTML = "<p>Загрузка...</p>";
  try {
    const badges: any[] = await analyticsService.getAchievements();
    list.innerHTML = "";
    if (badges.length === 0) {
      list.innerHTML = "<p>Пока нет достижений. Продолжайте формировать привычки!</p>";
      return;
    }
    badges.forEach((badge) => {
      const card = document.createElement("div");
      card.className = "stat-card";
      card.innerHTML = `
        <h3>${badge.name}</h3>
        <p>🏆</p>
        <small>${badge.description}</small>
      `;
      list.appendChild(card);
    });
  } catch (e) {
    list.innerHTML = "<p>Не удалось загрузить достижения.</p>";
  }
}
