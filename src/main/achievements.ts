import * as analyticsService from "../services/analytics-service";

export async function loadAchievements() {
  const list = document.getElementById("achievements-list");
  if (!list) return;

  list.innerHTML = "<p>Загрузка...</p>";
  try {
    // Полученные достижения пользователя
    const badges: any[] = await analyticsService.getAchievements();
    // Доступные достижения с прогрессом
    const available: any[] = await analyticsService.getAvailableAchievements();

    list.innerHTML = "";

    if (badges.length === 0 && available.length === 0) {
      list.innerHTML =
        "<p>Пока нет достижений. Продолжайте формировать привычки!</p>";
      return;
    }

    // Отображаем полученные достижения
    badges.forEach((badge) => {
      const card = document.createElement("div");
      card.className = "stat-card";
      const date = badge.unlocked_at
        ? new Date(badge.unlocked_at).toLocaleDateString()
        : "";
      card.innerHTML = `
        <h3>${badge.type}</h3>
        <p>🏆</p>
        <small>Уровень ${badge.level || 1}${date ? ` · ${date}` : ""}</small>
      `;
      list.appendChild(card);
    });

    // Отображаем доступные достижения с прогрессом
    available.forEach((ach) => {
      const card = document.createElement("div");
      card.className = "stat-card";
      card.style.opacity = ach.progress < 100 ? "0.7" : "1";
      card.innerHTML = `
        <h3>${ach.type}</h3>
        <p>🎯 ${ach.progress}%</p>
        <small>${ach.requirement}</small>
      `;
      list.appendChild(card);
    });
  } catch (e) {
    list.innerHTML = "<p>Не удалось загрузить достижения.</p>";
  }
}
