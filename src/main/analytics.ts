import * as analyticsService from "../services/analytics-service";

const statTotalHabits = document.getElementById("stat-total-habits")!;
const statCompletionRate = document.getElementById("stat-completion-rate")!;
const statStreak = document.getElementById("stat-streak")!;

export async function loadAnalytics() {
  try {
    const data = await analyticsService.getAnalyticsSummary();
    if (statTotalHabits)
      statTotalHabits.textContent =
        (data.total_habits ?? data.totalHabits)?.toString() || "0";
    if (statCompletionRate) {
      const rate = data.completion_rate ?? data.completionRate;
      statCompletionRate.textContent = rate
        ? `${Math.round(rate * 100)}%`
        : "Н/Д";
    }
    if (statStreak)
      statStreak.textContent = `${data.current_streak ?? data.currentStreak ?? 0} дней`;
  } catch (e) {
    console.warn("Ошибка аналитики", e);
  }
}
