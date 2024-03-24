import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import _ from 'lodash';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('file')
  async getFileList() {
    const files = readdirSync(resolve(__dirname, '..', 'wallpaper'));
    return (
      'http://localhost:3000/wallpaper/' + files[_.random(files.length - 1)]
    );
  }
}
