/*
 * @Author: mayan
 * @Date: 2026-02-11 14:34:55
 * @description: Do not edit
 */
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

import type { LocaleType } from '@/stores/types'

export const elementPlusLocales: Record<LocaleType, typeof zhCn> = {
  'zh-cn': zhCn,
  en,
}

export const dayjsLocales: Record<LocaleType, string> = {
  'zh-cn': 'zh-cn',
  en: 'en',
}

export function setDayjsLocale(locale: LocaleType) {
  dayjs.locale(dayjsLocales[locale])
}
