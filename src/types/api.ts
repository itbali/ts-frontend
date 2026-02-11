/**
 * TASK: Define types for API requests and responses
 */

// TODO: Define generic type for successful response
export interface ApiSuccessResponse<T> {
  // Hint: API returns { success: true, data: T }
}

// TODO: Define type for error response
export interface ApiErrorResponse {
  // Hint: API returns { success: false, error: { message, code?, details? } }
}

// TODO: Define union type for response
export type ApiResponse<T> = /* Your code here */;

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

// TODO: Define AuthResponse
export interface AuthResponse {
  // What does /auth/login return?
}

// TODO: Define types for creating a habit
export interface CreateHabitData {
  // What fields are needed to create a habit?
}

// TODO: Define types for updating a habit
export interface UpdateHabitData {
  // All fields are optional (use Partial?)
}

// TODO: Define types for creating a category
export interface CreateCategoryData {
  // Your code here
}

// TODO: Define types for creating a log
export interface CreateLogData {
  // Your code here
}

// TODO: Implement type guards
export function isSuccessResponse<T>(
  response: any
): response is ApiSuccessResponse<T> {
  // Your code here
  return false;
}

export function isErrorResponse<T>(
  response: any
): response is ApiErrorResponse {
  // Your code here
  return false;
}
