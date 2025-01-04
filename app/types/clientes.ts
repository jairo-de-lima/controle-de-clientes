// /types/cliente.ts
export interface Cliente {
  id?: string;
  cliente: string;
  endereco: string;
  documento: number;
  fornecedor: string;
  transportadora: string;
  telefoneResidencial: number;
  celular: number;
  suframa: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}
