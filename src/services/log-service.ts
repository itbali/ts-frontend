/**
 * Сервис логов - ЗАДАЧА СТУДЕНТА
 */

import { mockLogs } from "../mocks/logs";
import type { HabitLog, CreateLogData } from "../types";

let logs: HabitLog[] = [...mockLogs] as HabitLog[];

export async function getAllLogs(): Promise<HabitLog[]> {
  // TODO: Заменить на вызов API
  return Promise.resolve([...logs]);
}

export async function getLogsByHabit(habitId: string): Promise<HabitLog[]> {
  // TODO: Реализовать
  return Promise.resolve(logs.filter((l) => l.habitId === habitId));
}

export async function createLog(data: CreateLogData): Promise<HabitLog> {
  // TODO: Заменить на вызов API
  const newLog: HabitLog = {
    id: `log-${Date.now()}`,
    userId: "user-1",
    habitId: data.habitId,
    note: data.note,
    completedAt: data.completedAt || new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  logs.push(newLog);
  return Promise.resolve(newLog);
}

export async function deleteLog(id: string): Promise<void> {
  // TODO: Реализовать
  const index = logs.findIndex((l) => l.id === id);
  if (index === -1) {
    throw new Error("Лог не найден");
  }
  logs.splice(index, 1);
  return Promise.resolve();
}
