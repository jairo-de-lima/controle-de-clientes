"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { z } from "zod";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation"; // Para redirecionar ou atualizar a página após o envio

// Definir o esquema de validação com Zod
const formSchema = z.object({
  fornecedor: z.string().min(1, "Nome do Fornecedor é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  documento: z.string().min(1, "CNPJ ou CPF é obrigatório"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("Email inválido"),
  celular: z.string().min(1, "Celular é obrigatório"),
  comissao: z.number().min(0, "Comissão deve ser um valor positivo"),
  dataRecebimento: z.string().min(1, "Data de Recebimento é obrigatória"),
  inscricaoEstadual: z.string().min(1, "Inscrição Estadual é obrigatória"),
});

const SupplierForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fornecedor: "",
      endereco: "",
      documento: "",
      telefone: "",
      email: "",
      celular: "",
      comissao: 0,
      dataRecebimento: "",
      inscricaoEstadual: "",
    },
  });

  const router = useRouter(); // Hook do Next.js para manipulação de rotas

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/fornecedores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Erro ao enviar fornecedor:", error);
        return;
      }

      console.log("Fornecedor cadastrado com sucesso");
      form.reset(); // Reseta o formulário
      router.refresh(); // Atualiza a página ou redireciona
    } catch (error) {
      console.error("Erro ao enviar fornecedor:", error);
    }
  }

  return (
    <Card className="mt-12 w-[90%]">
      <CardHeader>
        <CardTitle>Cadastro de Fornecedores</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fornecedor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fornecedor</FormLabel>
                  <FormControl>
                    <Input placeholder="Fornecedor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endereco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Endereço" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="documento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF/CNPJ</FormLabel>
                  <FormControl>
                    <Input placeholder="CPF/CNPJ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="celular"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Celular</FormLabel>
                  <FormControl>
                    <Input placeholder="Celular" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comissao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comissão</FormLabel>
                  <FormControl>
                    <Input placeholder="Comissão" {...field} />
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

            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default SupplierForm;
