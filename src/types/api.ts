/**
 * ЗАДАЧА: Определите типы для ответов API и ошибок
 */
import { User } from "./entities";

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    code?: string;
    details?: any;
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface CreateHabitData {
  title: string;
  description?: string;
  color?: string;
  icon?: string;
  categoryId?: string;
  frequencyType?: "daily" | "weekly" | "monthly";
  goal?: number;
}

export interface UpdateHabitData extends Partial<CreateHabitData> {}

export interface CreateCategoryData {
  name: string;
  color?: string;
}

export interface CreateLogData {
  habitId: string;
  completedAt?: string;
  note?: string;
}

export function isSuccessResponse<T>(
  response: any
): response is ApiSuccessResponse<T> {
  return response && response.success === true && "data" in response;
}

export function isErrorResponse(
  response: any
): response is ApiErrorResponse {
  return response && response.success === false && "error" in response;
}
