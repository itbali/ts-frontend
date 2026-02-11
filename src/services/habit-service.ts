/**
 * Сервис привычек - ЗАДАЧА СТУДЕНТА
 *
 * ТЕКУЩЕЕ СОСТОЯНИЕ: Работает с мок-данными
 * ВАША ЗАДАЧА: Заменить на реальные вызовы API
 */

import { mockHabits } from "../mocks/habits";
import type { Habit, CreateHabitData, UpdateHabitData } from "../types";

// Временное хранилище (будет заменено на API)
let habits: Habit[] = [...mockHabits] as Habit[];

/**
 * ЗАДАЧА 1: Определить правильные типы
 *
 * Замените any на правильные типы из types/entities.ts и types/api.ts
 */

export async function getAllHabits(): Promise<Habit[]> {
  // TODO: Заменить на реальный вызов API
  // return request<Habit[]>('/habits/');

  // Пока что возвращаем моки
  return Promise.resolve([...habits]);
}

export async function getHabitById(id: string): Promise<Habit> {
  // TODO: Реализовать
  const habit = habits.find((h) => h.id === id);
  if (!habit) {
    throw new Error("Привычка не найдена");
  }
  return Promise.resolve(habit);
}

export async function createHabit(data: CreateHabitData): Promise<Habit> {
  // TODO: Заменить на реальный вызов API
  // return request<Habit>('/habits/', {
  //   method: 'POST',
  //   body: JSON.stringify(data)
  // });

  // Пока что создаем в памяти
  const newHabit: Habit = {
    id: `habit-${Date.now()}`,
    userId: "user-1",
    title: data.title,
    description: data.description,
    color: data.color || "#FF5733",
    icon: data.icon || "📝",
    frequencyType: data.frequencyType || "daily",
    goal: data.goal || 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  habits.push(newHabit);
  return Promise.resolve(newHabit);
}

export async function updateHabit(
  id: string,
  data: UpdateHabitData,
): Promise<Habit> {
  // TODO: Реализовать с реальным API
  const index = habits.findIndex((h) => h.id === id);
  if (index === -1) {
    throw new Error("Привычка не найдена");
  }

  habits[index] = {
    ...habits[index],
    ...data,
    updatedAt: new Date().toISOString(),
  } as Habit;

  return Promise.resolve(habits[index]);
}

export async function deleteHabit(id: string): Promise<void> {
  // TODO: Реализовать с реальным API
  const index = habits.findIndex((h) => h.id === id);
  if (index !== -1) {
    habits.splice(index, 1);
  }
  return Promise.resolve();
}

/**
 * ЗАДАЧА 2: Интеграция с API
 *
 * После определения типов:
 * 1. Раскомментировать import { request } from '../api'
 * 2. Заменить мок-реализации на реальные вызовы API
 * 3. Добавить обработку ошибок
 * 4. Протестировать с реальным бэкендом
 */
