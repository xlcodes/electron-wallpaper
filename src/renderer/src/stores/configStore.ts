import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = reactive({
      url: '',
      imgSaveDirectory: ''
    })

    const setConfigUrl = (url: string) => {
      config.url = url
    }

    const setImgSaveDirectory = (path: string) => {
      config.imgSaveDirectory = path
    }

    return {
      config,
      setConfigUrl,
      setImgSaveDirectory
    }
  },
  { persist: true }
)
