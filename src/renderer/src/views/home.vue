<template>
  <img
    ref="imgEl"
    :src="configStore.config.url"
    class="aspect-video no-drag cursor-pointer"
    alt="壁纸"
    draggable="false"
    @click="onLoad"
  />
  <div
    class="cursor-pointer bg-gray-200 text-center py-3 m-3 rounded-lg hover:bg-gray-300 duration-500 opacity-80 shadow-lg no-drag"
    @click="setWallpaper"
  >
    设置壁纸
  </div>
  <div class="mx-3 pt-2 text-xs text-gray-700 flex justify-between items-center">
    <div>小林不是coder</div>
    <div class="hover:font-bold cursor-pointer text-sm no-drag" @click="imageDownload">
      下载壁纸
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { http } from '@renderer/utils/axios'
import { ElLoading } from 'element-plus'
import { useConfigStore } from '@renderer/stores/configStore'
import useWallpaper from '@renderer/hooks/useWallpaper'

const imgEl = ref<HTMLImageElement>()
const configStore = useConfigStore()

const { setWallpaper, imageDownload } = useWallpaper()

const onLoad = async () => {
  const loading = ElLoading.service({ fullscreen: true, background: 'rgba(255, 255, 255, 0.3)' })
  http(`http://localhost:3000/file?${Date.now()}`)
    .then((res) => {
      if (res) {
        configStore.setConfigUrl(res.data)
        imgEl.value!.src = res.data
      }
    })
    .catch((err) => {
      console.error(err)
    })

  imgEl.value!.addEventListener('load', () => {
    loading.close()
  })
}

onMounted(() => {
  if (!configStore.config.url) {
    onLoad()
  }
})
</script>
<style scoped lang="scss"></style>
