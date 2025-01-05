"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import { Label } from "../_components/ui/label";
import { Input } from "../_components/ui/input";
import { Button } from "../_components/ui/button";

const ClientRegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-6xl">
        <CardHeader className="space-y-2">
          <div className="text-left text-sm text-gray-500">P/P logo</div>
          <CardTitle className="text-center text-2xl font-bold">
            Ass: Patrícia Prudente
          </CardTitle>
          <div className="text-center text-lg text-gray-600">
            Representante Comercial
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="pt-4 text-center text-xl font-semibold">
              <h1>Cadastro de Clientes </h1>
              <div className="flex items-center justify-center gap-2">
                <Label htmlFor="cliente">Cod. Cliente:</Label>
                <Input className="w-[30%]" id="CodCliente" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Coluna Esquerda */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cliente">Cliente:</Label>
                  <Input id="cliente" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ:</Label>
                  <Input id="cnpj" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end">End:</Label>
                  <Input id="end" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telFixo">Tel Fixo:</Label>
                  <Input id="telFixo" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email:</Label>
                  <Input id="email" type="email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="suframa">Suframa:</Label>
                  <Input id="suframa" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transportadora">Transportadora:</Label>
                  <Input id="transportadora" />
                </div>
              </div>

              {/* Coluna Direita */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ie">I.E.:</Label>
                  <Input id="ie" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cep">CEP:</Label>
                  <Input id="cep" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cel">Cel:</Label>
                  <Input id="cel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emailFinan">Email Final:</Label>
                  <Input id="emailFinan" type="email" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <Button variant="outline" type="button">
                Cancelar
              </Button>
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientRegistrationForm;
