/**
 * Сервис аналитики  - ЗАДАЧА СТУДЕНТА
 */

import {
  mockAnalyticsSummary,
  mockCalendar,
  mockHeatmap,
  mockTrends,
  mockCompletionRate,
} from "../mocks/analytics";
import {
  mockAchievements,
  mockAvailableAchievements,
} from "../mocks/achievements";

// --- Аналитика (GET /api/v1/analytics/) ---

export async function getAnalyticsSummary(): Promise<any> {
  // TODO: Замените на реальный API вызов
  // return request<AnalyticsSummary>('/analytics/');
  return Promise.resolve({ ...mockAnalyticsSummary });
}

export async function getCalendar(
  _startDate?: string,
  _endDate?: string,
  _habitIds?: string[],
): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<CalendarDay[]>('/analytics/calendar', { params: { startDate, endDate, habitIds } });
  return Promise.resolve([...mockCalendar]);
}

export async function getHeatmap(
  _startDate?: string,
  _endDate?: string,
): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<HeatmapItem[]>('/analytics/heatmap', { params: { startDate, endDate } });
  return Promise.resolve([...mockHeatmap]);
}

export async function getTrends(
  _startDate?: string,
  _endDate?: string,
  _groupBy?: "week" | "month",
): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<TrendItem[]>('/analytics/trends', { params: { startDate, endDate, groupBy } });
  return Promise.resolve([...mockTrends]);
}

export async function getCompletionRate(
  _startDate?: string,
  _endDate?: string,
): Promise<any> {
  // TODO: Замените на реальный API вызов
  // return request<CompletionRateData>('/analytics/completion-rate', { params: { startDate, endDate } });
  return Promise.resolve({ ...mockCompletionRate });
}

// --- Достижения (GET /api/v1/achievements/) ---

export async function getAchievements(): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<AchievementRead[]>('/achievements/');
  return Promise.resolve([...mockAchievements]);
}

export async function getAvailableAchievements(): Promise<any[]> {
  // TODO: Замените на реальный API вызов
  // return request<AvailableAchievement[]>('/achievements/available');
  return Promise.resolve([...mockAvailableAchievements]);
}

export async function exportData(): Promise<any> {
  // TODO: Имплементируйте
  return Promise.resolve({});
}
