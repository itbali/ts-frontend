/**
 * Сервис категорий
 */

import { request } from "../api";
import type { Category, CreateCategoryData } from "../types";

export async function getAllCategories(): Promise<Category[]> {
  return request<Category[]>("/categories/");
}

export async function getCategoryById(id: string): Promise<Category> {
  return request<Category>(`/categories/${id}`);
}

export async function createCategory(
  data: CreateCategoryData,
): Promise<Category> {
  return request<Category>("/categories/", {
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      color: data.color,
    }),
  });
}

export async function updateCategory(
  id: string,
  data: Partial<CreateCategoryData>,
): Promise<Category> {
  return request<Category>(`/categories/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: data.name,
      color: data.color,
    }),
  });
}

export async function deleteCategory(id: string): Promise<void> {
  await request<Record<string, unknown>>(`/categories/${id}`, {
    method: "DELETE",
  });
}
