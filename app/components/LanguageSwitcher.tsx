"use client";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const locales = [
  { code: "th", flag: "/flags/th.svg" },
  { code: "en", flag: "/flags/gb.svg" },
  { code: "zh", flag: "/flags/cn.svg" },
  { code: "ja", flag: "/flags/jp.svg" },
  { code: "he", flag: "/flags/il.svg" }
];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <Link
          key={locale.code}
          href={pathname.replace(`/${currentLocale}`, `/${locale.code}`)}
          className="text-xl hover:scale-110 transition"
        >
          <Image
  src={locale.flag}
  alt={locale.code}
  width={24}
  height={18}
/>
        </Link>
      ))}
    </div>
  );
}