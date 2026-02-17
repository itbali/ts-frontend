/**
 * ЗАДАЧА: Определите типы для ответов API и ошибок
 */
import { User, Habit, HabitLog, Category } from "./entities";

// --- API Response ---

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    code?: string;
    details?: Record<string, unknown>;
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// --- Auth ---

export type LoginCredentials = Pick<User, "email"> & { password: string };

export type RegisterData = Pick<User, "email" | "username"> & {
  password: string;
};

export interface AuthResponse {
  accessToken: string;
  user: User;
}

// --- Habits ---

export type CreateHabitData = Pick<Habit, "title"> &
  Pick<Habit, "description" 
  | "color" 
  | "icon" 
  | "categoryId" 
  | "frequencyType" 
  | "goal">;

export type UpdateHabitData = Pick<Habit, "id"> & Partial<CreateHabitData>;

// --- Categories ---

export type CreateCategoryData = Pick<Category, "name"> &
  Partial<Pick<Category, "color">>;

export type UpdateCategoryData = Pick<Category, "id"> & Partial<CreateCategoryData>;

// --- Logs ---

export type CreateLogData = Pick<HabitLog, "habitId"> &
  Partial<Pick<HabitLog, "completedAt" | "note">>;

export function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is ApiSuccessResponse<T> {
  return response.success === true;
}

export function isErrorResponse(
  response: ApiResponse<unknown>
): response is ApiErrorResponse {
  return response.success === false;
}
