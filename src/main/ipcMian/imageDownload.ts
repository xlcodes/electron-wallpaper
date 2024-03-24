import { ipcMain, IpcMainEvent, dialog } from 'electron'
import { downloadFile } from '../utils'

ipcMain.on('imageDownload', async (_event: IpcMainEvent, url: string) => {
  const defaultFile = url.split('/').pop()!
  const res = await dialog.showSaveDialog({
    title: '提示',
    message: '请选择壁纸保存路径',
    defaultPath: defaultFile,
    // 设置可以创建目录
    properties: ['createDirectory']
  })

  if (res.canceled === false && res.filePath) {
    await downloadFile(url, res.filePath!)
  }
})
