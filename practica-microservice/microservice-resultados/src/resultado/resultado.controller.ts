import { ResultadoService } from './resultado.service';
import { ResultadoDTO } from './dto/resultado.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ResultadoMsg } from 'src/common/constants';

@Controller()
export class ResultadoController {
  constructor(private readonly resultadoService: ResultadoService) {}

  @MessagePattern(ResultadoMsg.CREATE)
  create(@Payload() resultadoDTO: ResultadoDTO) {
    return this.resultadoService.create(resultadoDTO);
  }

  @MessagePattern(ResultadoMsg.FIND_ALL)
  findAll() {
    return this.resultadoService.findAll();
  }

  @MessagePattern(ResultadoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.resultadoService.findOne(id);
  }
  @MessagePattern(ResultadoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.resultadoService.update(payload.id, payload.resultadoDTO);
  }

  @MessagePattern(ResultadoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.resultadoService.delete(id);
  }
}