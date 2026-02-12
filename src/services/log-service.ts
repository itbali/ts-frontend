/**
 * Сервис логов
 */

import { request } from "../api";
import type { HabitLog, CreateLogData } from "../types";

export async function getAllLogs(): Promise<HabitLog[]> {
  return request<HabitLog[]>("/logs/");
}

export async function getLogsByHabit(habitId: string): Promise<HabitLog[]> {
  const allLogs = await request<HabitLog[]>("/logs/");
  return allLogs.filter((l) => l.habitId === habitId);
}

export async function createLog(data: CreateLogData): Promise<HabitLog> {
  return request<HabitLog>("/logs/", {
    method: "POST",
    body: JSON.stringify({
      habit_id: data.habitId,
      completed_at: data.completedAt || new Date().toISOString(),
      note: data.note,
    }),
  });
}

export async function deleteLog(id: string): Promise<void> {
  await request<Record<string, unknown>>(`/logs/${id}`, {
    method: "DELETE",
  });
}
