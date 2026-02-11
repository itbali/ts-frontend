/**
 * ЗАДАЧА: Определите типы для всех сущностей
 *
 * Используйте документацию Swagger (http://188.132.184.170.nip.io/api/v1/docs)
 */

export interface User {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface Habit {
  id: string;
  userId: string;
  categoryId?: string;
  title: string;
  description?: string;
  color: string;
  icon: string;
  frequencyType: "daily" | "weekly" | "monthly";
  goal: number;
  createdAt: string;
  updatedAt: string;
}

export interface HabitLog {
  id: string;
  habitId: string;
  userId: string;
  completedAt: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  userId: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface Achievement {
  id: string;
  userId: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface AnalyticsSummary {
  totalHabits: number;
  completionRate: number;
  currentStreak: number;
  bestStreak: number;
  totalLogs: number;
}
