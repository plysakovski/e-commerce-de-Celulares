import mongoose from "mongoose";

const celularSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
    especificacoes: {
    type: String,
    required: true,
  },   
    estoque: {  
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

const Celular = mongoose.model("Celular", celularSchema);
export default Celular;