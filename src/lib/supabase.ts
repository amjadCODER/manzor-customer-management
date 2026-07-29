const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
export const isSupabaseConfigured = Boolean(url && key)

export async function supabaseRequest(path: string, init: RequestInit = {}) {
  if (!url || !key) throw new Error('Supabase غير مهيأ')
  const response = await fetch(`${url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(init.headers || {})
    }
  })
  if (!response.ok) throw new Error(await response.text())
  return response.status === 204 ? null : response.json()
}
