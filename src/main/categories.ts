import * as categoryService from "../services/category-service";

export let categories: any[] = [];

const habitCategorySelect = document.getElementById(
  "habit-category",
) as HTMLSelectElement;
const categoryList = document.getElementById("category-list")!;
const newCatName = document.getElementById("new-cat-name") as HTMLInputElement;
const newCatColor = document.getElementById(
  "new-cat-color",
) as HTMLInputElement;
const btnCreateCat = document.getElementById("btn-create-cat")!;

export async function fetchCategories() {
  try {
    categories = await categoryService.getAllCategories();
    if (habitCategorySelect) {
      habitCategorySelect.innerHTML = '<option value="">Нет</option>';
      categories.forEach((cat: any) => {
        const opt = document.createElement("option");
        opt.value = cat.id;
        opt.textContent = cat.name;
        habitCategorySelect.appendChild(opt);
      });
    }
  } catch (e) {
    console.error(e);
  }
}

export function renderCategories() {
  if (!categoryList) return;
  categoryList.innerHTML = "";
  categories.forEach((cat: any) => {
    const item = document.createElement("div");
    item.style.cssText =
      "display:flex; justify-content:space-between; padding:8px; border-bottom:1px solid #eee;";
    item.innerHTML = `
      <span style="color:${cat.color}">${cat.name}</span>
      <button class="delete-cat-btn" data-id="${cat.id}">Удалить</button>
    `;
    const delBtn = item.querySelector(".delete-cat-btn")!;
    delBtn.addEventListener("click", () => handleDeleteCategory(cat.id));
    categoryList.appendChild(item);
  });
}

async function handleDeleteCategory(id: string) {
  if (!confirm("Удалить эту категорию?")) return;
  try {
    await categoryService.deleteCategory(id);
    await fetchCategories();
    renderCategories();
  } catch (e) {
    alert("Ошибка при удалении");
  }
}

if (btnCreateCat) {
  btnCreateCat.addEventListener("click", async () => {
    const name = newCatName.value.trim();
    const color = newCatColor.value;
    if (!name) return alert("Имя обязательно");

    try {
      await categoryService.createCategory({ name, color });
      newCatName.value = "";
      await fetchCategories();
      renderCategories();
    } catch (e) {
      alert("Ошибка при создании");
    }
  });
}
