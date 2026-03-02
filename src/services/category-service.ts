/**
 * Сервис категорий
 */

import { get, post, patch, del } from "../api";
import type { Category, CreateCategoryData, UpdateCategoryData } from "../types";

export async function getAllCategories(): Promise<Category[]> {
  return get<Category[]>("/categories/");
}

export async function getCategoryById(id: Pick<Category,"id">["id"]): Promise<Category> {
  return get<Category>(`/categories/${id}`);
}

export async function createCategory(data: CreateCategoryData): Promise<Category> {
  return post<Category>("/categories/", data);
}

export async function updateCategory(data: UpdateCategoryData): Promise<Category> {
  const { id, ...body } = data;
  return patch<Category>(`/categories/${id}`, body);
}

export async function deleteCategory(id: string): Promise<void> {
  return del(`/categories/${id}`);
}
