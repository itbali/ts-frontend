// Мок-данные достижений для разработки

// Достижения пользователя (GET /api/v1/achievements/)
export const mockAchievements = [
  {
    id: "ach-1",
    title: "Первая привычка",
    userId: "user-1",
    type: "first_habit",
    level: 1,
    unlockedAt: "2024-01-01T10:00:00Z",
    habit_id: "1",
    description: "Вы создали свою первую привычку! Отличное начало!",
    icon: "🏆",
  },
  {
    id: "ach-2",
    userId: "user-1",
    title: "7-дневный стрик",
    type: "streak_7",
    level: 1,
    unlockedAt: "2024-01-08T12:00:00Z",
    habit_id: "1",
    description: "Вы достигли 7-дневного стрика! Продолжайте в том же духе!",
    icon: "🔥",
  },
  {
    id: "ach-3",
    title: "100 выполнений",
    userId: "user-1",
    type: "total_logs_100",
    level: 2,
    unlockedAt: "2024-01-15T09:30:00Z",
    habit_id: null,
    description: "Вы достигли 100 выполнений привычек! Отличная работа!",
    icon: "🔥",
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
