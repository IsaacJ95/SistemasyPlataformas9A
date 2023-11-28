import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { ResultadoController } from './resultado.controller';

@Module({
  imports: [ProxyModule],
  controllers: [ResultadoController],
})
export class ResultadoModule {}
