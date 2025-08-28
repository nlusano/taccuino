import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function copyTextToClipboard(code: string) {
  return window.navigator.clipboard.writeText(code);
}
