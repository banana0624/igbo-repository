// src/pages/subjects/index.tsx

import { Subject } from '@/types/content';

const subjects: Subject[] = [/* fetched or mocked data */];

export default function SubjectsPage() {
  return (
    <div>
      <h1>All Subjects</h1>
      <ul>
        {subjects.map((subj) => (
          <li key={subj.id}>
            <a href={`/subjects/${subj.slug}`}>{subj.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

