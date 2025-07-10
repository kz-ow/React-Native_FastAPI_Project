// app/services/api.ts
import Constants from 'expo-constants';

const BASE_URL = Constants.manifest?.extra?.BASE_URL || 'http://localhost:8000';

export async function sendText(text: string) {
  const resp = await fetch(`${BASE_URL}/test`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!resp.ok) throw new Error(`Status ${resp.status}`);
  return resp.json() as Promise<{ received: string }>;
}