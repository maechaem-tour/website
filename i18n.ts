export const locales = ["th", "en", "zh", "he", "ja"] as const;

export const defaultLocale = "en";

export type Locale = (typeof locales)[number];