/**
 * Сервис логов
 */

import { get, post, del } from "../api";
import type { HabitLog, CreateLogData } from "../types";

export async function getAllLogs(): Promise<HabitLog[]> {
  return get<HabitLog[]>("/logs/");
}

export async function getLogsByHabit(habitId: Pick<HabitLog, "habitId">["habitId"]): Promise<HabitLog[]> {
  return get<HabitLog[]>(`/logs/?habitId=${habitId}`);
}

export async function createLog(data: CreateLogData): Promise<HabitLog> {
  return post<HabitLog>("/logs/", data);
}

export async function deleteLog(id: string): Promise<void> {
  return del(`/logs/${id}`);
}
