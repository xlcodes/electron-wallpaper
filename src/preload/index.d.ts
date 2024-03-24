import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setWallpaper: (url: string, path: string) => void
      imageDownload: (url: string) => void
      setImageSaveDirectory: () => Promise<string>
      checkDirectory: (path: string) => Promise<boolean>
    }
  }
}
