"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

const locales = [
  { code: "th", name: "ไทย", flag: "/flags/th.svg" },
  { code: "en", name: "English", flag: "/flags/gb.svg" },
  { code: "zh", name: "中文", flag: "/flags/cn.svg" },
  { code: "ja", name: "日本語", flag: "/flags/jp.svg" },
  { code: "he", name: "עברית", flag: "/flags/il.svg" }
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const [open, setOpen] = useState(false);

  const current =
    locales.find((l) => l.code === currentLocale) || locales[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-2 text-white backdrop-blur-md"
      >
        <Image
          src={current.flag}
          alt={current.code}
          width={22}
          height={16}
        />
        <span className="text-sm font-medium">{current.name}</span>
        <span>▼</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-xl overflow-hidden">
          {locales.map((locale) => (
            <Link
              key={locale.code}
              href={pathname.replace(`/${currentLocale}`, `/${locale.code}`)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
            >
              <Image
                src={locale.flag}
                alt={locale.code}
                width={22}
                height={16}
              />
              <span className="text-gray-800">
                {locale.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}