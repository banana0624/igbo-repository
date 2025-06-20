// src/types/content.ts

export interface Subject {
  id: string;
  title: string;
  description: string;
  slug: string;
}

export interface Page {
  id: string;
  subjectId: string;
  title: string;
  content: string;
  slug: string;
}
