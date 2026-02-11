import * as habitService from "../services/habit-service";
import { fetchAllLogs, setTodaysLogs, todaysLogs, toggleHabitLog } from "./logs";

export let habits: any[] = [];

const habitList = document.getElementById("habit-list")!;
const btnAddHabit = document.getElementById("btn-add-habit")!;
const modalContainer = document.getElementById("modal-container")!;
const createHabitForm = document.getElementById(
  "create-habit-form",
) as HTMLFormElement;
const btnCancelModal = document.getElementById("btn-cancel-modal")!;
const habitCategorySelect = document.getElementById(
  "habit-category",
) as HTMLSelectElement;

const habitTitleInput = document.getElementById(
  "habit-title",
) as HTMLInputElement;
const habitColorInput = document.getElementById(
  "habit-color",
) as HTMLInputElement;

export async function fetchHabits() {
  try {
    habits = await habitService.getAllHabits();
    const logs = await fetchAllLogs();
    setTodaysLogs(logs);
    renderHabits();
  } catch (e) {
    console.error(e);
  }
}

export function renderHabits() {
  if (!habitList) return;
  habitList.innerHTML = "";
  habits.forEach((habit: any) => {
    const isCompleted = !!todaysLogs[habit.id];
    const card = document.createElement("div");
    card.className = "habit-card";
    card.innerHTML = `
      <div class="habit-info">
        <h3 style="color: ${habit.color}">
          <span style="font-size:1.2em; margin-right:6px;">${habit.icon || "📝"}</span>
          ${habit.title}
        </h3>
        <p>Ежедневная цель</p>
      </div>
      <div class="habit-actions">
        <button class="check-btn ${isCompleted ? "completed" : ""}" data-id="${habit.id}">
          ${isCompleted ? "✓" : ""}
        </button>
        <button class="delete-btn" data-id="${habit.id}" title="Удалить привычку">🗑️</button>
      </div>
    `;
    const checkBtn = card.querySelector(".check-btn")!;
    checkBtn.addEventListener("click", () =>
      handleToggleHabit(habit.id, isCompleted),
    );
    const delBtn = card.querySelector(".delete-btn")!;
    delBtn.addEventListener("click", () => handleDeleteHabit(habit.id));
    habitList.appendChild(card);
  });
}

async function handleToggleHabit(habitId: string, currentlyCompleted: boolean) {
  if (currentlyCompleted) {
    alert("Уже выполнено сегодня!");
  } else {
    try {
      await toggleHabitLog(habitId);
      await fetchHabits();
    } catch (e) {
      alert("Не удалось сохранить");
    }
  }
}

async function handleDeleteHabit(id: string) {
  if (!confirm("Удалить эту привычку?")) return;
  try {
    await habitService.deleteHabit(id);
    await fetchHabits();
  } catch (e) {
    alert("Ошибка при удалении");
  }
}

function updatePreview(title: string, color: string, icon: string = "📝") {
  const pTitle = document.getElementById("preview-title");
  if (pTitle) {
    pTitle.innerHTML = `<span style="margin-right:8px; filter: grayscale(0);">${icon}</span> ${title}`;
    pTitle.style.color = color;
  }
}

function renderEmojiPicker() {
  const grid = document.getElementById("emoji-grid")!;
  if (!grid) return;
  grid.innerHTML = "";
  const emojis = [
    "📝", "🏋️", "📚", "🧘", "💧", "🍎", "🚶", "🎯", "✍️", "🎨", "🎵", "💻",
  ];
  emojis.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = emoji;
    btn.className = "emoji-btn";
    btn.onclick = () => {
      (document.getElementById("habit-icon") as HTMLInputElement).value = emoji;
      const titleInput = document.getElementById(
        "habit-title",
      ) as HTMLInputElement;
      const colorInput = document.getElementById(
        "habit-color",
      ) as HTMLInputElement;
      updatePreview(titleInput.value || "Новая привычка", colorInput.value, emoji);
    };
    grid.appendChild(btn);
  });
}

if (btnAddHabit) {
  btnAddHabit.addEventListener("click", () => {
    modalContainer.style.display = "flex";
    renderEmojiPicker();
    updatePreview("Новая привычка", "#FF5733", "📝");
  });
}

if (btnCancelModal) {
  btnCancelModal.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
}

if (habitTitleInput && habitColorInput) {
  const handleInput = () => {
    const icon =
      (document.getElementById("habit-icon") as HTMLInputElement)?.value ||
      "📝";
    updatePreview(
      habitTitleInput.value || "Новая привычка",
      habitColorInput.value,
      icon,
    );
  };
  habitTitleInput.addEventListener("input", handleInput);
  habitColorInput.addEventListener("input", handleInput);
}

if (createHabitForm) {
  createHabitForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = (document.getElementById("habit-title") as HTMLInputElement).value;
    const color = (document.getElementById("habit-color") as HTMLInputElement).value;
    const icon = (document.getElementById("habit-icon") as HTMLInputElement).value;
    const categoryId = habitCategorySelect?.value;

    const payload: any = {
      title,
      color,
      icon,
      description: "Web",
      frequencyType: "daily",
      goal: 1,
    };
    if (categoryId) payload.categoryIds = [categoryId];

    try {
      await habitService.createHabit(payload);
      modalContainer.style.display = "none";
      await fetchHabits();
      (document.getElementById("habit-title") as HTMLInputElement).value = "";
    } catch (e) {
      alert("Ошибка при создании");
    }
  });
}
