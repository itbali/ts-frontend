/**
 * Модуль валидации — проверка пользовательского ввода перед отправкой на API
 */

// --- Результат валидации ---

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

const ok: ValidationResult = { valid: true };
const fail = (error: string): ValidationResult => ({ valid: false, error });

// --- Email ---

export function validateEmail(email: string): ValidationResult {
  if (!email.trim()) return fail("Email обязателен");
  const trimmed = email.trim();
  if (!trimmed.includes("@")) return fail("Некорректный формат email");
  const [local, domain] = trimmed.split("@");
  if (!local || !domain) return fail("Некорректный формат email");
  if (!domain.includes(".")) return fail("Некорректный формат email");
  if (domain.startsWith(".") || domain.endsWith(".")) return fail("Некорректный формат email");
  if (trimmed.includes(" ")) return fail("Email не должен содержать пробелов");
  return ok;
}

// --- Password ---

export function validatePassword(password: string): ValidationResult {
  if (!password) return fail("Пароль обязателен");
  if (password.length < 6) return fail("Пароль должен быть не менее 6 символов");
  return ok;
}

// --- Username ---

export function validateUsername(username: string): ValidationResult {
  if (!username.trim()) return fail("Имя пользователя обязательно");
  if (username.trim().length < 2) return fail("Имя должно быть не менее 2 символов");
  return ok;
}

// --- Habit title ---

export function validateHabitTitle(title: string): ValidationResult {
  if (!title.trim()) return fail("Название привычки обязательно");
  if (title.trim().length < 2) return fail("Название должно быть не менее 2 символов");
  if (title.trim().length > 100) return fail("Название не должно превышать 100 символов");
  return ok;
}

// --- Category name ---

export function validateCategoryName(name: string): ValidationResult {
  if (!name.trim()) return fail("Имя категории обязательно");
  if (name.trim().length > 50) return fail("Имя категории не должно превышать 50 символов");
  return ok;
}

// --- Утилита: валидация с алертом ---

/**
 * Валидирует несколько результатов и показывает первую ошибку через alert.
 * Возвращает true если все проверки пройдены.
 */
export function validateAll(...results: ValidationResult[]): boolean {
  for (const r of results) {
    if (!r.valid) {
      alert(r.error || "Ошибка валидации");
      return false;
    }
  }
  return true;
}
