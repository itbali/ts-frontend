/**
 * Сервис аутентификации - ЗАДАЧА СТУДЕНТА
 */

import { mockUser } from "../mocks/user";

export async function login(credentials: any): Promise<any> {
  // TODO: Заменить на реальный вызов API
  // Пока что просто возвращаем мок-данные
  return Promise.resolve({
    accessToken: "mock-token-" + Date.now(),
    user: mockUser,
  });
}

export async function register(data: any): Promise<any> {
  // TODO: Реализовать
  return Promise.resolve({
    accessToken: "mock-token-" + Date.now(),
    user: { ...mockUser, ...data },
  });
}

export async function getCurrentUser(): Promise<any> {
  // TODO: Заменить на вызов API
  return Promise.resolve(mockUser);
}

export async function logout(): void {
  // TODO: Добавить вызов API, если необходимо
  localStorage.removeItem("accessToken");
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("accessToken");
}

type User = {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

type Admin = {
  id: string;
  isAdmin: boolean;
};

type IntersectedUser = User & Admin;

let user: IntersectedUser = {
  id: "abc",
  isAdmin: true,
};
