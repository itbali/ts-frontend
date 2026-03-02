/**
 * Сервис аналитики
 */

import { get } from "../api";
import type { AnalyticsSummary, Achievement } from "../types";

// --- Аналитика (GET /api/v1/analytics/) ---

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  return get<AnalyticsSummary>("/analytics/");
}

export async function getCalendar(
  startDate?: string,
  endDate?: string,
  habitIds?: string[],
): Promise<any[]> {
  const params = new URLSearchParams();
  if (startDate) params.set("startDate", startDate);
  if (endDate) params.set("endDate", endDate);
  if (habitIds?.length) params.set("habitIds", habitIds.join(","));
  const qs = params.toString();
  return get<any[]>(`/analytics/calendar${qs ? `?${qs}` : ""}`);
}

export async function getHeatmap(
  startDate?: string,
  endDate?: string,
): Promise<any[]> {
  const params = new URLSearchParams();
  if (startDate) params.set("startDate", startDate);
  if (endDate) params.set("endDate", endDate);
  const qs = params.toString();
  return get<any[]>(`/analytics/heatmap${qs ? `?${qs}` : ""}`);
}

export async function getTrends(
  startDate?: string,
  endDate?: string,
  groupBy?: "week" | "month",
): Promise<any[]> {
  const params = new URLSearchParams();
  if (startDate) params.set("startDate", startDate);
  if (endDate) params.set("endDate", endDate);
  if (groupBy) params.set("groupBy", groupBy);
  const qs = params.toString();
  return get<any[]>(`/analytics/trends${qs ? `?${qs}` : ""}`);
}

export async function getCompletionRate(
  startDate?: string,
  endDate?: string,
): Promise<any> {
  const params = new URLSearchParams();
  if (startDate) params.set("startDate", startDate);
  if (endDate) params.set("endDate", endDate);
  const qs = params.toString();
  return get<any>(`/analytics/completion-rate${qs ? `?${qs}` : ""}`);
}

// --- Достижения (GET /api/v1/achievements/) ---

export async function getAchievements(): Promise<Achievement[]> {
  return get<Achievement[]>("/achievements/");
}

export async function getAvailableAchievements(): Promise<any[]> {
  return get<any[]>("/achievements/available");
}

export async function exportData(): Promise<any> {
  return get<any>("/analytics/export");
}
