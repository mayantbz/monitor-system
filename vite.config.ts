/*
 * @Author: mayan
 * @CreatedTime: 2026-03-03 16:44:57
 * @LastEditTime: 2026-03-07 11:55:02
 * @Description: vite配置文件
 */

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),

    process.env.NODE_ENV === 'development' && vueDevTools(),

    // 自动导入 API
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],

      resolvers: [ElementPlusResolver()],

      dts: 'src/auto-imports.d.ts',

      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),

    // 自动导入组件
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: [], // 不扫描本地组件
      dts: 'src/components.d.ts',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
