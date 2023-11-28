import { Module } from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { ResultadoSchema } from './schema/resultado.schema';
import { RESULTADO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadoController } from './resultado.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: RESULTADO.name,
        useFactory: () => ResultadoSchema,
      },
    ]),
  ],
  controllers: [ResultadoController],
  providers: [ResultadoService],
})
export class ResultadoModule {}