import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResultadoDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    resultadoID:string;

    @IsString()
    @IsNotEmpty()
    laboratorioID:string;

    @IsString()
    @IsNotEmpty()
    pacienteID:string;
    

    @IsString()
    @IsNotEmpty()
    fechaexa:string;

    @IsNumber()
    @IsNotEmpty()
    resultado: number;

}
