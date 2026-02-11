/**
 * API Клиент - ЗАДАЧА СТУДЕНТА
 * 
 * @description Этот модуль отвечает за выполнение HTTP-запросов к API бэкенда.
 * Он должен обрабатывать аутентификацию, ошибки и возвращать типизированные данные.
 * 
 * @see http://188.132.184.170.nip.io/docs#/ для документации API
 *
 * ЗАДАЧА: Реализовать HTTP-клиент для работы с API бэкенда
 */

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
  // TODO: Ваш код здесь

  // Пример базовой реализации (требует улучшения):
  const url = `${API_BASE_URL}${endpoint}`;

  const token = localStorage.getItem("accessToken");
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options?.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Ошибка HTTP! статус: ${response.status}`);
  }

  const data = await response.json();

  // API может возвращать { success: true, data: ... } или просто данные
  // TODO: Обработать оба случая
  return data.data || data;
}

/**
 * ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ:
 *
 * 1. Добавить обработку ошибок с типизацией
 * 2. Реализовать логику повторных попыток для неудачных запросов
 * 3. Добавить перехватчики (interceptors) для запроса/ответа
 * 4. Реализовать кэширование для GET-запросов
 */
