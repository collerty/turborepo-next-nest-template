export function handleError(e: unknown): void {
  if (e instanceof Error) {
    console.error(`[Error] ${e.message}`);
  } else {
    console.error("[Unknown error]", e);
  }
}
