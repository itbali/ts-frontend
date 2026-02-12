/**
 * Сервис аутентификации
 */

import { request } from "../api";
import type {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  User,
} from "../types";

export async function login(
  credentials: LoginCredentials,
): Promise<AuthResponse> {
  return request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  return request<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getCurrentUser(): Promise<User> {
  return request<User>("/auth/me");
}

export async function logout(): Promise<void> {
  try {
    await request<{ message: string }>("/auth/logout", { method: "POST" });
  } finally {
    localStorage.removeItem("accessToken");
  }
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("accessToken");
}
