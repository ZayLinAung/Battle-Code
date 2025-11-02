"use client";

import Editor from "@monaco-editor/react";

export default function MonacoEditor() {
  return (
    <div>
      <Editor
        height="100%"
        we
        defaultLanguage="javascript"
        defaultValue="// Start coding!"
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}
