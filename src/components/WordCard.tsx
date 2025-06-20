// components/WordCard.tsx
import { useState } from "react";

type WordCardProps = {
  word: string;
  meanings: {
    [lang: string]: string;
  };
  audioUrl?: string;
  availableLangs?: string[];
};

export function WordCard({
  word,
  meanings,
  audioUrl,
  availableLangs = ["en", "kr", "local"]
}: WordCardProps) {
  const [lang, setLang] = useState("en");

  return (
    <div className="bg-white border shadow p-4 rounded-lg max-w-sm space-y-3">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{word}</h3>
        <select
          className="text-sm border rounded px-2 py-1 bg-gray-50"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          {availableLangs.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <p className="text-gray-600 min-h-[3rem]">{meanings[lang] || "—"}</p>

      {audioUrl && (
        <audio controls className="mt-2 w-full">
          <source src={audioUrl} />
        </audio>
      )}
    </div>
  );
}
