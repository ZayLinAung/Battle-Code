"use client";

import { useRouter } from "next/navigation";

export default function OpenEditor() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/editor"); 
  };

  return (
    <button
      onClick={handleClick}
      className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
    >
      Go to Dashboard
    </button>
  );
}
