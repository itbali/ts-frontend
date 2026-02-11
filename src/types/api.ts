/**
 * ЗАДАЧА: Определите типы для ответов API и ошибок
 */

// TODO: Определите тип для успешного ответа, который содержит данные типа T
export interface ApiSuccessResponse<T> {
  // Подсказка: API возвращает { success: true, data: T }
}

// TODO: Определите тип для ошибки API
export interface ApiErrorResponse {
  // Подсказка: API возвращает { success: false, error: { message, code?, details? } }
}

// TODO: Определите общий тип для ответа API, который может быть либо успешным, либо ошибкой
export type ApiResponse<T> = any/* Ваш код здесь */;

// Готовые типы для аутентификации и регистрации
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

// TODO: Определите тип для ответа при аутентификации
export interface AuthResponse {
  // Подсказка: что возвращает API при успешной аутентификации? (смотри документацию Swagger)
}

// TODO: Определите тип для создания привычки
export interface CreateHabitData {
  // Подсказка: какие поля нужны для создания привычки? (смотри документацию Swagger)
}

// TODO: Определите тип для обновления привычки (может быть частичным, так что используйте Partial?)
export interface UpdateHabitData {
  // Все поля должны быть необязательными (используйте Partial?)
}

// TODO: Определите тип для создания категории
export interface CreateCategoryData {
  // Ваш код здесь
}

// TODO: Определите тип для создания лога привычки
export interface CreateLogData {
  // Ваш код здесь
}

// TODO: Определите тип для создания достижения
export function isSuccessResponse<T>(
  response: any
): response is ApiSuccessResponse<T> {
  // Ваш код здесь
  return false;
}

export function isErrorResponse<T>(
  response: any
): response is ApiErrorResponse {
  // Ваш код здесь
  return false;
}
