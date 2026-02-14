/*
 * @Author: mayan
 * @Date: 2026-02-13 15:02:29
 * @description: store 常量定义
 * 统一管理storage key、默认值等
 */
export const STORAGE_KEYS = {
  //语言偏好 storage key
  LOCALE: 'app-locale'
} as const

export const DEFAULT_LOCALE = 'zh-cn' as const