"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Definir o esquema de validação com Zod
const clientSchema = z.object({
  cliente: z.string().min(1, "Nome do Cliente é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  documento: z.string().min(1, "CNPJ ou CPF é obrigatório"),
  fornecedor: z.string().min(1, "Fornecedor é obrigatório"),
  transportadora: z.string().min(1, "Transportadora é obrigatória"),
  telefoneResidencial: z.string().min(1, "Telefone Residencial é obrigatório"),
  celular: z.string().min(1, "Celular é obrigatório"),
});

const ClientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(clientSchema),
  });

  return (
    <Card className="mx-auto w-full max-w-2xl p-6">
      <CardTitle className="mb-4 text-lg font-bold">
        Cadastro de Clientes
      </CardTitle>
      <CardContent>
        <form className="space-y-6">
          {[
            { name: "cliente", label: "Nome do Cliente" },
            { name: "endereco", label: "Endereço" },
            { name: "documento", label: "CNPJ ou CPF" },
            { name: "fornecedor", label: "Fornecedor" },
            { name: "transportadora", label: "Transportadora" },
            { name: "telefoneResidencial", label: "Telefone Residencial" },
            { name: "celular", label: "Celular" },
            { name: "Suframa", label: "Suframa" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-700">
                {field.label}
              </label>
              <Input
                className="rounded border p-2"
                type="text"
                {...register(field.name)}
              />
              {/* {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name].message.toString()}</p>} */}
            </div>
          ))}

          <Button
            className="mt-4 rounded bg-blue-500 p-2 text-white"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ClientForm;
