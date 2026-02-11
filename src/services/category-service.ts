/**
 * Сервис категорий - ЗАДАЧА СТУДЕНТА
 */

import { mockCategories } from "../mocks/categories";
import type { Category, CreateCategoryData } from "../types";

let categories: Category[] = [...mockCategories] as Category[];

export async function getAllCategories(): Promise<Category[]> {
  // TODO: Заменить на вызов API
  return Promise.resolve([...categories]);
}

export async function getCategoryById(id: string): Promise<Category> {
  // TODO: Реализовать
  const category = categories.find((c) => c.id === id);
  if (!category) {
    throw new Error("Категория не найдена");
  }
  return Promise.resolve(category);
}

export async function createCategory(
  data: CreateCategoryData,
): Promise<Category> {
  // TODO: Заменить на вызов API
  const newCategory: Category = {
    id: `cat-${Date.now()}`,
    userId: "user-1",
    name: data.name,
    color: data.color || "#2ECC71",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  categories.push(newCategory);
  return Promise.resolve(newCategory);
}

export async function updateCategory(
  id: string,
  data: Partial<CreateCategoryData>,
): Promise<Category> {
  // TODO: Реализовать
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) {
    throw new Error("Категория не найдена");
  }

  categories[index] = {
    ...categories[index],
    ...data,
    updatedAt: new Date().toISOString(),
  } as Category;

  return Promise.resolve(categories[index]);
}

export async function deleteCategory(id: string): Promise<void> {
  // TODO: Реализовать
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) {
    throw new Error("Категория не найдена");
  }
  categories.splice(index, 1);
  return Promise.resolve();
}
