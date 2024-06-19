import type { Authors } from "./AuthorType";

export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export interface ArticleType {
	id: string,
  imageURL?: string,
  title: string,
  resume: string,
  content: string,
  createdAt: Date
  authors: Authors
}