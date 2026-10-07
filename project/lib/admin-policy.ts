// Identity headers are supplied by Sites dispatch. Never authorize by email alone.
export function isAllowedAdmin(userId: string | null, email: string | null, allowlist: string | undefined): boolean {
  if (!userId || !email || !allowlist) return false;
  return allowlist.split(',').map(value => value.trim().toLowerCase()).filter(Boolean).includes(email.trim().toLowerCase());
}
