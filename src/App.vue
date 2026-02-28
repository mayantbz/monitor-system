<!--
 * @Author: mayan
 * @CreatedTime: $DATE
 * @LastEditTime: 2026-02-28 16:14:01
 * @Description: 
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useLocaleStore } from '@/stores'
import { elementPlusLocales, setDayjsLocale } from '@/locale'
import { useThemeStore } from '@/stores/modules/theme'
const themeStore = useThemeStore()

const localeStore = useLocaleStore()

const elementLocale = computed(() => elementPlusLocales[localeStore.locale])
const date = ref<Date>()
const time = ref<Date>()

watch(
  () => localeStore.locale,
  (locale) => {
    setDayjsLocale(locale)
  },
  { immediate: true },
)
</script>

<template>
  <el-config-provider :locale="elementLocale">
    <div class="app-container">
      <header class="app-header">
        <span class="app-title">Monitor System</span>
        <el-button type="primary" link @click="localeStore.toggleLocale()">
          {{ localeStore.localeLabel }} / {{ localeStore.locale === 'zh-cn' ? 'English' : '中文' }}
        </el-button>
      </header>
      <el-button @click="themeStore.toggleTheme()"> 切换主题 </el-button>
      <main class="app-main">
        <h1>You did it!</h1>
        <p>
          Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read
          the documentation
        </p>
        <el-divider />
        <p>当前语言: {{ localeStore.localeLabel }}</p>
        <el-date-picker v-model="date" type="date" placeholder="选择日期" />
        <el-time-picker v-model="time" placeholder="选择时间" />
      </main>
    </div>
  </el-config-provider>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid var(--el-border-color);
}

.app-title {
  font-size: 18px;
  font-weight: 600;
}

.app-main {
  padding: 24px;
}
</style>
