"use client";

import { useRouter } from "next/navigation";

/**
 * This component is used to switch the language of the page.
 * It is used in the header of the page.
 */

export default function SwitchLanguage() {
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <div className="flex gap-2">
      <button
        className="px-4 py-2 rounded-md bg-blue-500 text-white"
        onClick={() => handleLocaleChange("en")}
      >
        English
      </button>
      <button
        className="px-4 py-2 rounded-md bg-white text-blue-500 hover:bg-blue-100"
        onClick={() => handleLocaleChange("fa")}
      >
        فارسی
      </button>
    </div>
  );
}
