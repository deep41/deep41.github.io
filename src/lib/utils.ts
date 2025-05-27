import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Color cycling utilities for consistent theming
export const getColorByIndex = (index: number) => {
  const colors = ['blue', 'purple', 'cyan', 'green'];
  return colors[index % 4];
};

export const getHighlightClass = (index: number) => {
  const color = getColorByIndex(index);
  return `highlight-${color}`;
};

export const getBadgeClasses = (index: number) => {
  const color = getColorByIndex(index);
  const classMap = {
    blue: 'bg-blue-500/10 border-blue-400/30 text-blue-300',
    purple: 'bg-purple-500/10 border-purple-400/30 text-purple-300',
    cyan: 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300',
    green: 'bg-green-500/10 border-green-400/30 text-green-300',
  };
  return classMap[color as keyof typeof classMap];
};

export const getProgressGradient = (index: number) => {
  const color = getColorByIndex(index);
  const gradientMap = {
    blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
    purple: 'bg-gradient-to-r from-purple-400 to-purple-600',
    cyan: 'bg-gradient-to-r from-cyan-400 to-cyan-600',
    green: 'bg-gradient-to-r from-green-400 to-green-600',
  };
  return gradientMap[color as keyof typeof gradientMap];
};

// Date formatting utility
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};
