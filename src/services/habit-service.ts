/**
 * Habit Service - STUDENT TASK
 *
 * CURRENT STATE: Works with mock data
 * YOUR TASK: Replace with real API calls
 */

import { mockHabits } from "../mocks/habits";
// TODO: Uncomment after defining types
// import type { Habit, CreateHabitData, UpdateHabitData } from '../types';

// Temporary storage (will be replaced with API)
let habits: any[] = [...mockHabits];

/**
 * TASK 1: Define correct types
 *
 * Replace any with correct types from types/entities.ts and types/api.ts
 */

export async function getAllHabits(): Promise<any[]> {
  // TODO: Replace with real API call
  // return request<Habit[]>('/habits/');

  // For now, return mocks
  return Promise.resolve([...habits]);
}

export async function getHabitById(id: string): Promise<any> {
  // TODO: Implement
  const habit = habits.find((h) => h.id === id);
  if (!habit) {
    throw new Error("Habit not found");
  }
  return Promise.resolve(habit);
}

export async function createHabit(data: any): Promise<any> {
  // TODO: Replace with real API call
  // return request<Habit>('/habits/', {
  //   method: 'POST',
  //   body: JSON.stringify(data)
  // });

  // For now, create in memory
  const newHabit = {
    id: `habit-${Date.now()}`,
    userId: "user-1",
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  habits.push(newHabit);
  return Promise.resolve(newHabit);
}

export async function updateHabit(id: string, data: any): Promise<any> {
  // TODO: Implement with real API
  const index = habits.findIndex((h) => h.id === id);
  if (index === -1) {
    throw new Error("Habit not found");
  }

  habits[index] = {
    ...habits[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };

  return Promise.resolve(habits[index]);
}

export async function deleteHabit(id: string): Promise<void> {
  // TODO: Implement with real API
  const index = habits.findIndex((h) => h.id === id);
  if (index !== -1) {
    habits.splice(index, 1);
  }
  return Promise.resolve();
}

/**
 * TASK 2: API Integration
 *
 * After defining types:
 * 1. Uncomment import { request } from '../api'
 * 2. Replace mock implementations with real API calls
 * 3. Add error handling
 * 4. Test with real backend
 */
