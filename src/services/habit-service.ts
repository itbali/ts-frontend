/**
 * Сервис привычек
 */

import { get, post, patch, del } from "../api";
import type { Habit, CreateHabitData, UpdateHabitData } from '../types';

export async function getAllHabits(): Promise<Habit[]> {
  return get<Habit[]>("/habits/");
}

export async function getHabitById(id: Pick<Habit, "id">['id']): Promise<Habit> {
  return get<Habit>(`/habits/${id}`);
}

export async function createHabit(data: CreateHabitData): Promise<Habit> {
  return post<Habit>("/habits/", data);
}

export async function updateHabit(data: UpdateHabitData): Promise<Habit> {
  const { id, ...body } = data;
  return patch<Habit>(`/habits/${id}`, body);
}

export async function deleteHabit(id: string): Promise<void> {
  return del(`/habits/${id}`);
}
