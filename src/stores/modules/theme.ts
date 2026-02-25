/*
 * @Author: mayan
 * @Date: 2026-02-25 14:52:26
 * @description: Do not edit
 */
import { defineStore } from 'pinia'

export type ThemeMode = 'light' | 'dark'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    mode: 'light' as ThemeMode,
  }),

  actions: {
    setTheme(mode: ThemeMode) {
      this.mode = mode
      document.documentElement.setAttribute('data-theme', mode === 'dark' ? 'dark' : '')
      localStorage.setItem('theme-mode', mode)
    },

    initTheme() {
      const saved = localStorage.getItem('theme-mode') as ThemeMode
      this.setTheme(saved || 'light')
    },

    toggleTheme() {
      this.setTheme(this.mode === 'light' ? 'dark' : 'light')
    },
  },
})
