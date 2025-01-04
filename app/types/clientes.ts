// /types/cliente.ts
export interface Cliente {
  id?: string;
  cliente: string;
  endereco: string;
  documento: string;
  fornecedor: string;
  transportadora: string;
  telefoneResidencial?: string;
  celular: string;
  suframa?: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}
