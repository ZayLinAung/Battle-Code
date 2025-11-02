"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

const languages = [
  "javascript",
  "typescript",
  "cpp",
  "python",
  "json",
  "html",
  "css",
];

const themes = ["vs-dark", "light", "vs"];

export default function MonacoEditor() {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-dark");

  return (
    // <div>
    //    <Editor
    //   height="600px"
    //   width="800px"
    //   defaultLanguage="typescript"
    //   defaultValue="// Hello Monaco"
    //   theme="vs-dark"
    // />
    // </div>
    <div
      className="">
      {/* Header */}
      <div
        className="flex items-center justify-between mb-3 p-3 bg-gray-100 rounded">
        <div className="flex gap-3">
          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          {/* Theme Selector */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Editor
        height="600px"  
        width="1000px"   
        defaultValue="// Start coding!"
        language={language}
        theme={theme}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}
