/**
 * Log Service - STUDENT TASK
 */

import { mockLogs } from "../mocks/logs";

let logs: any[] = [...mockLogs];

export async function getAllLogs(): Promise<any[]> {
  // TODO: Replace with API call
  return Promise.resolve([...logs]);
}

export async function getLogsByHabit(habitId: string): Promise<any[]> {
  // TODO: Implement
  return Promise.resolve(logs.filter((l) => l.habitId === habitId));
}

export async function createLog(data: any): Promise<any> {
  // TODO: Replace with API call
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
  // TODO: Implement
  const index = logs.findIndex((l) => l.id === id);
  if (index !== -1) {
    logs.splice(index, 1);
  }
  return Promise.resolve();
}
