/**
 * Auth Service - STUDENT TASK
 */

import { mockUser } from "../mocks/user";

export async function login(credentials: any): Promise<any> {
  // TODO: Replace with real API call
  // For now, just return mock data
  return Promise.resolve({
    accessToken: "mock-token-" + Date.now(),
    user: mockUser,
  });
}

export async function register(data: any): Promise<any> {
  // TODO: Implement
  return Promise.resolve({
    accessToken: "mock-token-" + Date.now(),
    user: { ...mockUser, ...data },
  });
}

export async function getCurrentUser(): Promise<any> {
  // TODO: Replace with API call
  return Promise.resolve(mockUser);
}

export async function logout(): void {
  // TODO: Add API call if needed
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
