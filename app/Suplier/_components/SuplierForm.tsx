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
} from "../../_components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../_components/ui/card";
import { Input } from "../../_components/ui/input";
import { z } from "zod";
import { Button } from "../../_components/ui/button";
import { useRouter } from "next/navigation"; // Para redirecionar ou atualizar a página após o envio

// Definir o esquema de validação com Zod
const formSchema = z.object({
  fornecedor: z.string().min(1, "Nome do Fornecedor é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  documento: z.string().min(1, "CNPJ ou CPF é obrigatório"),
  telefoneResidencial: z.string().min(1, "Telefone Residencial é obrigatório"),
  email: z.string().email("Email inválido"),
  celular: z.string().min(1, "Celular é obrigatório"),
  codigoComissao: z.string().min(1, "Código de Comissão é obrigatório"),
  dataCadastro: z.string().min(1, "Data do Cadastro é obrigatória"),
  porcentagemComissao: z
    .number()
    .min(0, "Porcentagem de Comissão deve ser um valor positivo"),
  estado: z.string().min(1, "Estado é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  inscricaoEstadual: z.string().min(1, "Inscrição Estadual é obrigatória"),
  dataRecebimento: z.string().min(1, "Data de Recebimento é obrigatória"), // Comentado até ser necessário
});

const SupplierForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fornecedor: "",
      endereco: "",
      documento: "",
      telefoneResidencial: "",
      email: "",
      celular: "",
      codigoComissao: "",
      dataCadastro: "",
      porcentagemComissao: 0,
      estado: "",
      cidade: "",
      bairro: "",
      inscricaoEstadual: "",
      dataRecebimento: "",
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
              name="telefoneResidencial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone Residencial</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefone Residencial" {...field} />
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
              name="estado"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input placeholder="Estado" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cidade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Cidade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bairro"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input placeholder="Bairro" {...field} />
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

//FornecedorForm
export default SupplierForm;
