import { dialog, ipcMain, IpcMainEvent } from 'electron'
import Wallpaper from 'wallpaper'
import { downloadFile } from '../utils'
import { resolve } from 'path'
import IpcMainInvokeEvent = Electron.IpcMainInvokeEvent
import * as fs from 'fs'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  const filePath = resolve(path, url.split('/').pop()!)
  const localFile = await downloadFile(url, filePath)
  // 设置壁纸
  await Wallpaper.set(localFile, { screen: 'all', scale: 'auto' })
})

ipcMain.handle('setImageSaveDirectory', async () => {
  const res = await dialog.showOpenDialog({
    title: '请选择图片保存目录',
    properties: ['createDirectory', 'openDirectory']
  })

  if (!res.canceled && res.filePaths.length) {
    return res.filePaths[0]
  }

  return undefined
})

ipcMain.handle('checkDirectory', async (_event: IpcMainInvokeEvent, path: string) => {
  return fs.existsSync(path)
})
