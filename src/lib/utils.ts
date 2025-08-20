import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms?: number) {
  const delay = ms ?? Math.floor(Math.random() * (1200 - 100 + 1)) + 100;
  return new Promise((resolve) => setTimeout(resolve, delay));
}
