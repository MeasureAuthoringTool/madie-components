declare global {
  interface Window {
    idCounter: number;
  }
}

window.idCounter = 0;

export default function useUniqueId(prefix?: string): string {
  window.idCounter = ++window.idCounter || 1;
  return `${prefix || ""}${window.idCounter}`;
}

export function resetUniqueId(): void {
  window.idCounter = 0;
}
