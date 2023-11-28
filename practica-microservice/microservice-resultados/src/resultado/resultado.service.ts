import { ResultadoDTO } from './dto/resultado.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RESULTADO } from 'src/common/models/models';
import { IResultado } from 'src/common/interfaces/resultado.interfaces';

@Injectable()
export class ResultadoService {
  constructor(@InjectModel(RESULTADO.name) private readonly model: Model<IResultado>) {}

  
  async create(resultadoDTO: ResultadoDTO): Promise<IResultado> {
    const newResultado = new this.model(resultadoDTO);
    return await newResultado.save();
  }

  async findAll(): Promise<IResultado[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IResultado> {
    return await this.model.findById(id);
  }

  async update(id: string, resultadoDTO: ResultadoDTO): Promise<IResultado> {
    return await this.model.findByIdAndUpdate(id, resultadoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}