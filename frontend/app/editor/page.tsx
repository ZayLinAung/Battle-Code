import dynamic from "next/dynamic";
import MonacoEditor from "@/components/monacoEditor";

export default function Home() {
  return (
    <div className="p-8">
      <MonacoEditor />
    </div>
  );
}
