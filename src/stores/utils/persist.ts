/*
 * @Author: mayan
 * @Date: 2026-02-13 15:02:51
 * @description: store 持久化工具
 * 统一管理localStorage的持久化逻辑，支持类型安全
 */
export const persist = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const raw = localStorage.getItem(key)
      if (raw === null) return defaultValue
      return JSON.parse(raw) as T
    } catch {
      return defaultValue
    }
  },

  getString(key: string, defaultValue: string): string {
    return localStorage.getItem(key) ?? defaultValue
  },

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.warn(`[persist] Failed to save ${key}:`, e)
    }
  },

  setString(key: string, value: string): void {
    localStorage.setItem(key, value)
  },

  remove(key: string): void {
    localStorage.removeItem(key)
  },
}
