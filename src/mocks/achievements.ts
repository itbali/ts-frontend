// Мок-данные достижений для разработки

// Достижения пользователя (GET /api/v1/achievements/)
export const mockAchievements = [
  {
    id: "ach-1",
    user_id: "user-1",
    type: "first_habit",
    level: 1,
    unlocked_at: "2024-01-01T10:00:00Z",
    habit_id: "1",
  },
  {
    id: "ach-2",
    user_id: "user-1",
    type: "streak_7",
    level: 1,
    unlocked_at: "2024-01-08T12:00:00Z",
    habit_id: "1",
  },
  {
    id: "ach-3",
    user_id: "user-1",
    type: "streak_7",
    level: 2,
    unlocked_at: "2024-01-15T09:30:00Z",
    habit_id: null,
  },
];

// Доступные достижения (GET /api/v1/achievements/available)
export const mockAvailableAchievements = [
  {
    type: "streak_30",
    level: 1,
    requirement: "Выполняйте привычку 30 дней подряд",
    progress: 45,
  },
  {
    type: "total_logs_100",
    level: 1,
    requirement: "Запишите 100 выполнений привычек",
    progress: 68,
  },
  {
    type: "all_habits_day",
    level: 1,
    requirement: "Выполните все привычки за один день",
    progress: 75,
  },
  {
    type: "streak_7",
    level: 3,
    requirement: "Достигните 7-дневного стрика для 3 привычек",
    progress: 33,
  },
];
