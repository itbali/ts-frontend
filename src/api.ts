/**
 * API Клиент - ЗАДАЧА СТУДЕНТА
 * 
 * @description Этот модуль отвечает за выполнение HTTP-запросов к API бэкенда.
 * Он должен обрабатывать аутентификацию, ошибки и возвращать типизированные данные.
 * 
 * @see http://188.132.184.170.nip.io/docs#/ для документации API
 */

import type { ApiResponse, ApiErrorResponse } from "./types/api";

const API_BASE_URL = "http://188.132.184.170.nip.io/api/v1";

/**
 * TODO: Реализовать функцию запроса
 *
 * Эта функция должна:
 * 1. Выполнять HTTP-запросы к API
 * 2. Добавлять заголовок Authorization с токеном
 * 3. Обрабатывать ошибки
 * 4. Возвращать типизированные данные
 *
 * Подсказка: Используйте fetch API
 */
export async function request<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const token = localStorage.getItem("accessToken");
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options?.headers,
  };

  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
  } catch {
    throw {
      success: false,
      error: { message: "Нет соединения с сервером" },
    } as ApiErrorResponse;
  }

  const body: ApiResponse<T> = await response.json();

  if (!body.success) {
    throw body;
  }

  return body.data;
}

// ─── Удобные обёртки ──────────────────────────────────────────────────────────

export function get<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint);
}

export function post<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: "POST",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

export function put<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: "PUT",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

export function patch<T>(endpoint: string, body?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: "PATCH",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

export function del<T = void>(endpoint: string): Promise<T> {
  return request<T>(endpoint, { method: "DELETE" });
}
