/*
 * @Author: mayan
 * @Date: 2026-02-13 15:03:11
 * @description: 语言/国际化状态
 * 使用 pinia-plugin-persistedstate 持久化
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { LocaleType } from '@/stores/types'
import { STORAGE_KEYS, DEFAULT_LOCALE } from '@/stores/constants'

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref<LocaleType>(DEFAULT_LOCALE)

  const localeLabel = computed(() => (locale.value === 'zh-cn' ? '中文' : 'English'))

  function setLocale(newLocale: LocaleType) {
    locale.value = newLocale
  }

  function toggleLocale() {
    setLocale(locale.value === 'zh-cn' ? 'en' : 'zh-cn')
  }

  return {
    locale,
    localeLabel,
    setLocale,
    toggleLocale
  }
}, {
  persist: {
    key: STORAGE_KEYS.LOCALE,
    pick: ['locale'],
  },
})
