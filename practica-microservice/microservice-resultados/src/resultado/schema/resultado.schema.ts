import * as mongoose from 'mongoose';

export const ResultadoSchema = new mongoose.Schema(
  {
    resultadoID: { type: String, required: true },
    laboratorioID: { type: String, required: true },
    pacienteID: { type: String, required: true },
    fechaexa: { type: String, required: true },
    resultado: { type: Number, required: true },
  },
  { timestamps: true },
);

ResultadoSchema.index({ laboratorioID: 1 }, { unique: true });
ResultadoSchema.index({ resultadoID: 1 }, { unique: true });
