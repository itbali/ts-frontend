/**
 * API Клиент
 *
 * HTTP-клиент для работы с API бэкенда.
 * Обрабатывает аутентификацию, ошибки и возвращает типизированные данные.
 *
 * @see http://188.132.184.170.nip.io/docs#/ для документации API
 */

const API_BASE_URL = "http://188.132.184.170.nip.io/api/v1";

/**
 * Типизированная ошибка API
 */
export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public details?: unknown,
  ) {
    super(`HTTP ${status}: ${statusText}`);
    this.name = "ApiError";
  }
}

/**
 * Преобразование snake_case ключей в camelCase (рекурсивно)
 */
function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

function convertKeysToCamel(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamel);
  }
  if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>).map(([key, value]) => [
        snakeToCamel(key),
        convertKeysToCamel(value),
      ]),
    );
  }
  return obj;
}

/**
 * Универсальная функция HTTP-запроса к API
 *
 * - Добавляет заголовок Authorization с токеном из localStorage
 * - Обрабатывает HTTP ошибки (4xx, 5xx) через ApiError
 * - Обрабатывает обёртку { success: true, data: T } и чистый формат T
 * - Конвертирует snake_case ключи ответа в camelCase
 */
export async function request<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const token = localStorage.getItem("accessToken");
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options?.headers,
  };

  let response: Response;

  try {
    response = await fetch(url, {
      ...options,
      headers,
    });
  } catch {
    throw new Error("Ошибка сети. Проверьте подключение к интернету.");
  }

  if (!response.ok) {
    let details: unknown;
    try {
      details = await response.json();
    } catch {
      // тело ответа не JSON
    }
    throw new ApiError(response.status, response.statusText, details);
  }

  const json = await response.json();

  // API может возвращать { success: true, data: ... } или просто данные
  const rawData =
    json !== null &&
    typeof json === "object" &&
    "success" in json &&
    "data" in json
      ? json.data
      : json;

  // Конвертируем snake_case ключи в camelCase
  return convertKeysToCamel(rawData) as T;
}
