"use client";

import React from "react";
import { useForm, Control, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../_components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../_components/ui/card";
import { z } from "zod";
import { Button } from "../../_components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/app/_components/ui/input";
import { CarrierFormFields } from "./CarrierFormFields";
import { ContactFormFields } from "./ContactFormFields";
import { AddressFormFields } from "./AdressFormFields";

// Definir o esquema de validação com Zod
const formSchema = z.object({
  transportadora: z.string().min(1, "Nome da Transportadora é obrigatório"),
  documento: z.string().min(1, "CNPJ é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  email: z.string().email("Email inválido"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  estado: z.string().min(1, "Estado é obrigatório"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  celular: z.string().min(1, "Celular é obrigatório"),
  telefoneResidencial: z.string().min(1, "Telefone Residencial é obrigatório"),
  inscricaoEstadual: z.string().min(1, "Inscrição Estadual é obrigatória"),
  dataRecebimento: z.string().min(1, "Data de Recebimento é obrigatória"),
  dataCadastro: z.string().min(1, "Data do Cadastro é obrigatória"),
  porcentagemComissao: z
    .number()
    .min(0, "Porcentagem de Comissão deve ser um valor positivo"),
  codigoComissao: z.string().min(1, "Código de Comissão é obrigatório"),
});

const MainForm = () => {
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transportadora: "",
      documento: "",
      endereco: "",
      email: "",
      cidade: "",
      estado: "",
      bairro: "",
      celular: "",
      telefoneResidencial: "",
      inscricaoEstadual: "",
      dataRecebimento: "",
      dataCadastro: "",
      porcentagemComissao: 0,
      codigoComissao: "",
    },
  });

  const router = useRouter(); // Hook do Next.js para manipulação de rotas

  async function onSubmit(values: FieldValues) {
    try {
      const response = await fetch("/api/transportadoras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Erro ao enviar transportadora:", error);
        return;
      }

      console.log("Transportadora cadastrada com sucesso");
      form.reset(); // Reseta o formulário
      router.refresh(); // Atualiza a página ou redireciona
    } catch (error) {
      console.error("Erro ao enviar transportadora:", error);
    }
  }

  return (
    <Card className="mt-12 w-[90%]">
      <CardHeader>
        <CardTitle>Cadastro de Transportadoras</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CarrierFormFields control={form.control as Control<FieldValues>} />
            <ContactFormFields control={form.control as Control<FieldValues>} />
            <AddressFormFields control={form.control as Control<FieldValues>} />

            <FormField
              control={form.control}
              name="inscricaoEstadual"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inscrição Estadual</FormLabel>
                  <FormControl>
                    <Input placeholder="Inscrição Estadual" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="porcentagemComissao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Porcentagem de Comissão</FormLabel>
                  <FormControl>
                    <Input placeholder="Porcentagem de Comissão" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="codigoComissao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código de Comissão</FormLabel>
                  <FormControl>
                    <Input placeholder="Código de Comissão" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dataCadastro"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data do Cadastro</FormLabel>
                  <FormControl>
                    <Input placeholder="Data do Cadastro" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dataRecebimento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Recebimento</FormLabel>
                  <FormControl>
                    <Input placeholder="Data de Recebimento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default MainForm;
