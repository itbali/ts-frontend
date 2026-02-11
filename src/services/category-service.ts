/**
 * Сервис категорий - ЗАДАЧА СТУДЕНТА
 */

import { mockCategories } from "../mocks/categories";

let categories: any[] = [...mockCategories];

export async function getAllCategories(): Promise<any[]> {
  // TODO: Заменить на вызов API
  return Promise.resolve([...categories]);
}

export async function getCategoryById(id: string): Promise<any> {
  // TODO: Реализовать
  const category = categories.find((c) => c.id === id);
  if (!category) {
    throw new Error("Category not found");
  }
  return Promise.resolve(category);
}

export async function createCategory(data: any): Promise<any> {
  // TODO: Заменить на вызов API
  const newCategory = {
    id: `cat-${Date.now()}`,
    userId: "user-1",
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  categories.push(newCategory);
  return Promise.resolve(newCategory);
}

export async function updateCategory(id: string, data: any): Promise<any> {
  // TODO: Реализовать
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) {
    throw new Error("Category not found");
  }

  categories[index] = {
    ...categories[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };

  return Promise.resolve(categories[index]);
}

export async function deleteCategory(id: string): Promise<void> {
  // TODO: Реализовать
  const index = categories.findIndex((c) => c.id === id);
  if (index !== -1) {
    categories.splice(index, 1);
  }
  return Promise.resolve();
}
