// Мок-данные аналитики для разработки

// Сводка аналитики (GET /api/v1/analytics/)
export const mockAnalyticsSummary = {
  totalHabits: 4,
  completionRate: 0.75,
  currentStreak: 5,
  bestStreak: 10,
  totalLogs: 50,
};

// Календарь (GET /api/v1/analytics/calendar)
export const mockCalendar = [
  {
    date: "2024-01-15",
    habits: [
      {
        habitId: "1",
        habitTitle: "Morning Exercise",
        completed: true,
        logId: "log-1",
      },
      {
        habitId: "2",
        habitTitle: "Read Book",
        completed: true,
        logId: "log-2",
      },
      {
        habitId: "3",
        habitTitle: "Meditation",
        completed: false,
        logId: null,
      },
      {
        habitId: "4",
        habitTitle: "Drink Water",
        completed: true,
        logId: "log-3",
      },
    ],
    completionRate: 0.75,
  },
  {
    date: "2024-01-16",
    habits: [
      {
        habitId: "1",
        habitTitle: "Morning Exercise",
        completed: true,
        logId: "log-4",
      },
      {
        habitId: "2",
        habitTitle: "Read Book",
        completed: false,
        logId: null,
      },
      {
        habitId: "3",
        habitTitle: "Meditation",
        completed: true,
        logId: "log-5",
      },
      {
        habitId: "4",
        habitTitle: "Drink Water",
        completed: true,
        logId: "log-6",
      },
    ],
    completionRate: 0.75,
  },
  {
    date: "2024-01-17",
    habits: [
      {
        habitId: "1",
        habitTitle: "Morning Exercise",
        completed: true,
        logId: "log-7",
      },
      {
        habitId: "2",
        habitTitle: "Read Book",
        completed: true,
        logId: "log-8",
      },
      {
        habitId: "3",
        habitTitle: "Meditation",
        completed: true,
        logId: "log-9",
      },
      {
        habitId: "4",
        habitTitle: "Drink Water",
        completed: true,
        logId: "log-10",
      },
    ],
    completionRate: 1.0,
  },
];

// Тепловая карта (GET /api/v1/analytics/heatmap)
export const mockHeatmap = [
  { date: "2024-01-10", count: 0, level: 0 },
  { date: "2024-01-11", count: 1, level: 1 },
  { date: "2024-01-12", count: 2, level: 2 },
  { date: "2024-01-13", count: 3, level: 3 },
  { date: "2024-01-14", count: 4, level: 4 },
  { date: "2024-01-15", count: 3, level: 3 },
  { date: "2024-01-16", count: 3, level: 3 },
  { date: "2024-01-17", count: 4, level: 4 },
  { date: "2024-01-18", count: 2, level: 2 },
  { date: "2024-01-19", count: 1, level: 1 },
  { date: "2024-01-20", count: 0, level: 0 },
  { date: "2024-01-21", count: 3, level: 3 },
];

// Тренды (GET /api/v1/analytics/trends)
export const mockTrends = [
  {
    period: "2024-W01",
    totalLogs: 18,
    completionRate: 0.64,
    habitsCompleted: 3,
  },
  {
    period: "2024-W02",
    totalLogs: 22,
    completionRate: 0.79,
    habitsCompleted: 4,
  },
  {
    period: "2024-W03",
    totalLogs: 25,
    completionRate: 0.89,
    habitsCompleted: 4,
  },
];

// Процент выполнения (GET /api/v1/analytics/completion-rate)
export const mockCompletionRate = {
  overall: 0.75,
  byHabit: [
    { habitId: "1", habitTitle: "Morning Exercise", rate: 0.85 },
    { habitId: "2", habitTitle: "Read Book", rate: 0.7 },
    { habitId: "3", habitTitle: "Meditation", rate: 0.6 },
    { habitId: "4", habitTitle: "Drink Water", rate: 0.9 },
  ],
};
