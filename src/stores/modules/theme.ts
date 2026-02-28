/*
 * @Author: mayan
 * @Date: 2026-02-25 14:52:26
 * @description: 主题切换
 */
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

import type { ThemeMode } from '@/stores/types'
import { STORAGE_KEYS, DEFAULT_THEME } from '@/stores/constants'

function applyThemeToDom(mode: ThemeMode) {
  document.documentElement.setAttribute('data-theme', mode)
}

export const useThemeStore = defineStore(
  'theme',
  () => {
    const mode = ref<ThemeMode>(DEFAULT_THEME)

    const modeLabel = computed(() => (mode.value === 'dark' ? '暗色' : '亮色'))

    function setTheme(newMode: ThemeMode) {
      mode.value = newMode
    }

    function toggleTheme() {
      setTheme(mode.value === 'dark' ? 'light' : 'dark')
    }

    // 监听 mode 变化，同步到 DOM（theme.css 依赖 data-theme 属性）
    watch(mode, applyThemeToDom, { immediate: true })

    return {
      mode,
      modeLabel,
      setTheme,
      toggleTheme,
    }
  },
  {
    persist: {
      key: STORAGE_KEYS.THEME,
      pick: ['mode'],
    },
  },
)
