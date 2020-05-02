import { IPLService } from './ipl/ipl.service';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IPLController } from './ipl/ipl.controller';

@Module({
  imports: [],
  controllers: [AppController, IPLController],
  providers: [AppService, IPLService]
})
export class AppModule {}
