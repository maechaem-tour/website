import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppUrl(message: string, phone = "66958291463") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
