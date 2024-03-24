import { useConfigStore } from '@renderer/stores/configStore'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import router from '../routes'

const useWallpaper = () => {
  const configStore = useConfigStore()
  const { config } = storeToRefs(configStore)
  const setWallpaper = async () => {
    const state = await window.api.checkDirectory(config.value.imgSaveDirectory!)
    if (!state) {
      ElMessage.error('图片保存目录不存在')
      return router.push({ name: 'setting' })
    }

    await window.api.setWallpaper(config.value.url!, config.value.imgSaveDirectory!)
  }

  const imageDownload = () => {
    window.api.imageDownload(config.value.url)
  }

  const setImageSaveDirectory = async () => {
    const path = await window.api.setImageSaveDirectory()
    if (path) {
      configStore.setImgSaveDirectory(path)
    }
  }

  return { setWallpaper, imageDownload, setImageSaveDirectory }
}

export default useWallpaper
