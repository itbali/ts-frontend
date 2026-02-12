/**
 * Сервис аналитики
 */

import { request } from "../api";
import type { AnalyticsSummary, Achievement } from "../types";

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  return request<AnalyticsSummary>("/analytics/");
}

export async function getAchievements(): Promise<Achievement[]> {
  return request<Achievement[]>("/achievements/");
}

export async function exportData(): Promise<unknown> {
  return request<unknown>("/data/export");
}
