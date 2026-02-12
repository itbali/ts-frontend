/**
 * Сервис привычек
 */

import { request } from "../api";
import type { Habit, CreateHabitData, UpdateHabitData } from "../types";

export async function getAllHabits(): Promise<Habit[]> {
  return request<Habit[]>("/habits/");
}

export async function getHabitById(id: string): Promise<Habit> {
  return request<Habit>(`/habits/${id}`);
}

export async function createHabit(data: CreateHabitData): Promise<Habit> {
  return request<Habit>("/habits/", {
    method: "POST",
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      color: data.color,
      icon: data.icon,
      frequency_type: data.frequencyType || "daily",
      categoryIds:
        (data as unknown as Record<string, unknown>).categoryIds ||
        (data.categoryId ? [data.categoryId] : undefined),
    }),
  });
}

export async function updateHabit(
  id: string,
  data: UpdateHabitData,
): Promise<Habit> {
  return request<Habit>(`/habits/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      color: data.color,
      icon: data.icon,
      frequency_type: data.frequencyType,
      categoryIds:
        (data as unknown as Record<string, unknown>).categoryIds ||
        (data.categoryId ? [data.categoryId] : undefined),
    }),
  });
}

export async function deleteHabit(id: string): Promise<void> {
  await request<Record<string, unknown>>(`/habits/${id}`, {
    method: "DELETE",
  });
}
