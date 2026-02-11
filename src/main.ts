/**
 * Трекер привычек - Стартовый шаблон
 *
 * Этот файл содержит готовую логику UI.
 * Ваша задача — реализовать типы и сервисы в соответствующих папках.
 */

import "./style.css";
import * as authService from "./services/auth-service";
import * as analyticsService from "./services/analytics-service";
import { habits, fetchHabits } from "./main/habits";
import { fetchCategories, renderCategories } from "./main/categories";
import { loadAnalytics } from "./main/analytics";
import { loadHistory } from "./main/history";
import { loadAchievements } from "./main/achievements";

// --- State ---
let currentUser: any = null;

// --- DOM Elements ---
const authContainer = document.getElementById("auth-container")!;
const dashboardContainer = document.getElementById("dashboard-container")!;
const loginForm = document.getElementById("login-form") as HTMLFormElement;
const registerForm = document.getElementById(
  "register-form",
) as HTMLFormElement;
const tabLogin = document.getElementById("tab-login")!;
const tabRegister = document.getElementById("tab-register")!;
const authError = document.getElementById("auth-error")!;

// Sidebar & Views
const navButtons = document.querySelectorAll(".nav-btn");
const views = document.querySelectorAll(".view-section");
const btnLogoutSidebar = document.getElementById("btn-logout-sidebar");

// Profile View
const profileUsername = document.getElementById(
  "profile-username",
) as HTMLInputElement;
const profileEmail = document.getElementById(
  "profile-email",
) as HTMLInputElement;
const btnManageCategories = document.getElementById("btn-manage-categories")!;
const profileCategoriesArea = document.getElementById(
  "profile-categories-area",
)!;
const btnExportData = document.getElementById("btn-export-data")!;

// --- Initialization ---
async function init() {
  // Автоматический "логин" для демо (с моками)
  try {
    const authResult = await authService.login({
      email: "student@example.com",
      password: "password",
    });

    if (authResult.accessToken) {
      localStorage.setItem("accessToken", authResult.accessToken);
      currentUser = authResult.user;
      showDashboard();
    } else {
      showAuth();
    }
  } catch (e) {
    console.error("Автоматический вход не удался", e);
    showAuth();
  }
}

function showAuth() {
  authContainer.style.display = "block";
  dashboardContainer.style.display = "none";
  const modalContainer = document.getElementById("modal-container");
  if (modalContainer) modalContainer.style.display = "none";
}

async function showDashboard() {
  authContainer.style.display = "none";
  dashboardContainer.style.display = "block";

  await fetchCategories();
  await switchView("habits");
}

// --- Auth Handlers ---
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = (document.getElementById("login-email") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("login-password") as HTMLInputElement
  ).value;

  try {
    const result = await authService.login({ email, password });
    localStorage.setItem("accessToken", result.accessToken);
    currentUser = result.user;
    showDashboard();
  } catch (e) {
    authError.textContent = "Ошибка входа";
    authError.style.display = "block";
  }
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = (document.getElementById("register-email") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("register-password") as HTMLInputElement
  ).value;
  const username = (
    document.getElementById("register-username") as HTMLInputElement
  ).value;

  try {
    const result = await authService.register({ email, password, username });
    localStorage.setItem("accessToken", result.accessToken);
    currentUser = result.user;
    showDashboard();
  } catch (e) {
    authError.textContent = "Ошибка регистрации";
    authError.style.display = "block";
  }
});

// --- Routing ---
async function switchView(viewName: string) {
  navButtons.forEach((btn) => {
    if (btn.getAttribute("data-view") === viewName) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  views.forEach((section) => {
    if (section.id === `view-${viewName}`)
      (section as HTMLElement).style.display = "block";
    else (section as HTMLElement).style.display = "none";
  });

  if (viewName === "habits") {
    await fetchHabits();
  } else if (viewName === "analytics") {
    loadAnalytics();
  } else if (viewName === "achievements") {
    loadAchievements();
  } else if (viewName === "history") {
    loadHistory(habits);
  } else if (viewName === "profile") {
    loadProfile();
  }
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.getAttribute("data-view");
    if (view) switchView(view);
  });
});

if (btnLogoutSidebar) {
  btnLogoutSidebar.addEventListener("click", () => {
    authService.logout();
    showAuth();
  });
}

// --- Profile ---
function loadProfile() {
  if (currentUser) {
    profileUsername.value = currentUser.username || "";
    profileEmail.value = currentUser.email || "";
  }
}

if (btnManageCategories) {
  btnManageCategories.addEventListener("click", () => {
    profileCategoriesArea.style.display =
      profileCategoriesArea.style.display === "none" ? "block" : "none";
    renderCategories();
  });
}

if (btnExportData) {
  btnExportData.addEventListener("click", async () => {
    try {
      const data = await analyticsService.exportData();
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "habit-tracker-export.json";
      a.click();
    } catch (e) {
      alert("Экспорт не удался");
    }
  });
}

// --- Tab Switching ---
tabLogin.addEventListener("click", () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

tabRegister.addEventListener("click", () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  registerForm.style.display = "block";
  loginForm.style.display = "none";
});

// Start app
init();
