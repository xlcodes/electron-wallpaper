<template>
  <main class="p-3 bg-[#34495e] text-white flex flex-col justify-between">
    <section class="mt-6">
      <h2 class="flex justify-center py-5 opacity-70 text-sm">参数设置</h2>
      <div class="flex gap-1 items-center">
        <el-input
          v-model="config.imgSaveDirectory"
          disabled
          placeholder="请选择壁纸保存目录"
          size="normal"
          clearable
        />
        <el-button type="primary" size="default" @click="setImageSaveDirectory">
          选择图片保存目录
        </el-button>
      </div>
    </section>
    <div class="text-xs opacity-30 font-mono font-light flex flex-col items-center mb-5">
      <span class="text-orange-100">小林不是coder</span>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useConfigStore } from '../stores/configStore'
import useWallpaper from '../hooks/useWallpaper'

const { config } = useConfigStore()
const { setImageSaveDirectory } = useWallpaper()
</script>
<style scoped lang="scss"></style>
