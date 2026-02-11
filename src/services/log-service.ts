/**
 * Сервис логов - ЗАДАЧА СТУДЕНТА
 */

import { mockLogs } from "../mocks/logs";

let logs: any[] = [...mockLogs];

export async function getAllLogs(): Promise<any[]> {
  // TODO: Заменить на вызов API
  return Promise.resolve([...logs]);
}

export async function getLogsByHabit(habitId: string): Promise<any[]> {
  // TODO: Реализовать
  return Promise.resolve(logs.filter((l) => l.habitId === habitId));
}

export async function createLog(data: any): Promise<any> {
  // TODO: Заменить на вызов API
  const newLog = {
    id: `log-${Date.now()}`,
    userId: "user-1",
    ...data,
    completedAt: data.completedAt || new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  logs.push(newLog);
  return Promise.resolve(newLog);
}

export async function deleteLog(id: string): Promise<void> {
  // TODO: Реализовать
  const index = logs.findIndex((l) => l.id === id);
  if (index !== -1) {
    logs.splice(index, 1);
  }
  return Promise.resolve();
}
