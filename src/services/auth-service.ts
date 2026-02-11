/**
 * Сервис аутентификации - ЗАДАЧА СТУДЕНТА
 */

import { mockUser } from "../mocks/user";
import type {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  User,
} from "../types";

export async function login(
  _credentials: LoginCredentials,
): Promise<AuthResponse> {
  // TODO: Заменить на реальный вызов API
  // Пока что просто возвращаем мок-данные
  return Promise.resolve({
    accessToken: "mock-token-" + Date.now(),
    user: mockUser as User,
  });
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  // TODO: Реализовать
  return Promise.resolve({
    accessToken: "mock-token-" + Date.now(),
    user: { ...mockUser, ...data } as User,
  });
}

export async function getCurrentUser(): Promise<User> {
  // TODO: Заменить на вызов API
  return Promise.resolve(mockUser as User);
}

export async function logout(): Promise<void> {
  // TODO: Добавить вызов API, если необходимо
  localStorage.removeItem("accessToken");
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("accessToken");
}
