import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ResultadoMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { IResultado } from 'src/common/interfaces/resultado.interfaces';
import { ResultadoDTO } from './dto/resultado.dto';

@ApiTags('resultados')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/resultado')
export class ResultadoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyResultado = this.clientProxy.clientProxyResultados();

  @Post()
  create(@Body() resultadoDTO: ResultadoDTO): Observable<IResultado> {
    return this._clientProxyResultado.send(ResultadoMSG.CREATE, resultadoDTO);
  }

  @Get()
  findAll(): Observable<IResultado[]> {
    return this._clientProxyResultado.send(ResultadoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IResultado> {
    return this._clientProxyResultado.send(ResultadoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() resultadoDTO: ResultadoDTO): Observable<IResultado> {
    return this._clientProxyResultado.send(ResultadoMSG.UPDATE, { id, resultadoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyResultado.send(ResultadoMSG.DELETE, id);
  }
}