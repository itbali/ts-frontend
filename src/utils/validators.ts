// Результат валидации — либо успех, либо ошибка с сообщением
type ValidationResult =
  | { valid: true; error: null }
  | { valid: false; error: string };

function ok(): ValidationResult {
  return { valid: true, error: null };
}

function fail(error: string): ValidationResult {
  return { valid: false, error };
}

export function validateEmail(email: string): ValidationResult {
  if (!email.trim()) {
    return fail("Введите email");
  }
  const parts = email.split("@");
  if (parts.length !== 2 || !parts[0] || !parts[1].includes(".")) {
    return fail("Некорректный email");
  }
  return ok();
}

export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return fail("Введите пароль");
  }
  if (password.length < 6) {
    return fail("Пароль должен быть не менее 6 символов");
  }
  return ok();
}

export function validateHabitTitle(title: string): ValidationResult {
  const trimmed = title.trim();
  if (!trimmed) {
    return fail("Введите название привычки");
  }
  if (trimmed.length < 2) {
    return fail("Название слишком короткое");
  }
  if (trimmed.length > 100) {
    return fail("Название слишком длинное (макс. 100 символов)");
  }
  return ok();
}

// Валидация нескольких полей сразу
export function validateForm<T extends Record<string, string>>(
  data: T,
  rules: { [K in keyof T]?: (value: T[K]) => ValidationResult }
): { valid: boolean; errors: Partial<Record<keyof T, string>> } {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const key in rules) {
    const validate = rules[key];
    if (!validate) continue;

    const result = validate(data[key]);
    if (!result.valid) {
      errors[key] = result.error;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
