import * as logService from "../services/log-service";

export let todaysLogs: { [key: string]: boolean } = {};

/**
 * Устанавливает логи на сегодня
 */
export function setTodaysLogs(logs: any[]) {
  const today = new Date().toISOString().split("T")[0];
  todaysLogs = {};
  logs.forEach((l) => {
    if (l.completedAt.startsWith(today)) todaysLogs[l.habitId] = true;
  });
}

/**
 * Переключает состояние выполнения привычки
 */
export async function toggleHabitLog(habitId: string) {
  return await logService.createLog({ habitId });
}

/**
 * Получает все логи
 */
export async function fetchAllLogs() {
  return await logService.getAllLogs();
}
