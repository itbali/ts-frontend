/**
 * Сервис аутентификации
 */

import { post, get } from "../api";
import { AuthResponse, LoginCredentials, RegisterData, User } from "../types";

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  return post<AuthResponse>("/auth/login", credentials);
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  return post<AuthResponse>("/auth/register", data);
}

export async function getCurrentUser(): Promise<User> {
  return get<User>("/auth/me");
}

export function logout(): void {
  localStorage.removeItem("accessToken");
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("accessToken");
}
