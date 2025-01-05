"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { z } from "zod";
import { useToast } from "../_hooks/use-toast";

const formSchema = z.object({
  cliente: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  endereco: z.string().min(5, "Endereço deve ter no mínimo 5 caracteres"),
  documento: z.string().min(11, "Documento deve ter no mínimo 11 caracteres"),
  fornecedor: z
    .string()
    .min(2, "Nome do fornecedor deve ter no mínimo 2 caracteres"),
  transportadora: z
    .string()
    .min(2, "Nome da transportadora deve ter no mínimo 2 caracteres"),
  telefoneResidencial: z
    .string()
    .min(10, "Telefone deve ter no mínimo 10 caracteres")
    .nullish()
    .or(z.string().length(0)),
  celular: z.string().min(11, "Celular deve ter no mínimo 11 caracteres"),
  suframa: z.string().optional().nullable(),
  email: z.string().email("Email inválido"),
  // codigoCliente: z.string().optional().nullable(), // Comentado até atualizar o banco de dados
  // bairro: z.string().optional().nullable(), // Comentado até atualizar o banco de dados
  // estado: z.string().optional().nullable(), // Comentado até atualizar o banco de dados
  // inscricaoEstadual: z.string().optional().nullable(), // Comentado até atualizar o banco de dados
  // cidade: z.string().optional().nullable(), // Comentado até atualizar o banco de dados
});

const ClientForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cliente: "",
      endereco: "",
      documento: "",
      fornecedor: "",
      transportadora: "",
      telefoneResidencial: "",
      celular: "",
      suframa: "",
      email: "",
      // codigoCliente: "", // Comentado até atualizar o banco de dados
      // bairro: "", // Comentado até atualizar o banco de dados
      // estado: "", // Comentado até atualizar o banco de dados
      // inscricaoEstadual: "", // Comentado até atualizar o banco de dados
      // cidade: "", // Comentado até atualizar o banco de dados
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          documento: values.documento.replace(/\D/g, ""),
          telefoneResidencial:
            values.telefoneResidencial && values.telefoneResidencial.length > 0
              ? values.telefoneResidencial.replace(/\D/g, "")
              : null,
          celular: values.celular.replace(/\D/g, ""),
          suframa: values.suframa || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || data.details || "Erro ao cadastrar cliente",
        );
      }

      toast({
        title: "Cliente cadastrado!",
        description: "O cliente foi cadastrado com sucesso.",
        variant: "default",
        className: "bg-green-500 text-white",
      });

      form.reset();
      router.refresh();
    } catch (error) {
      console.error("Erro:", error);

      toast({
        title: "Erro ao cadastrar",
        description:
          error instanceof Error ? error.message : "Erro ao cadastrar cliente",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="mx-auto mt-12 w-[90%] max-w-2xl">
      <CardHeader>
        <CardTitle>Cadastro de clientes</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="cliente"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cliente</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do cliente" {...field} />
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
              name="transportadora"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transportadora</FormLabel>
                  <FormControl>
                    <Input placeholder="Transportadora" {...field} />
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
                  <FormLabel>Telefone Residencial (Opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telefone Residencial"
                      {...field}
                      value={field.value ?? ""}
                    />
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
              name="suframa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suframa</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Suframa"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Bairro - Comentado até atualizar o banco de dados */}
            {/*
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
            /> */}
            {/* Estado - Comentado até atualizar o banco de dados
            <FormField control={form.control} 
            name="estado" 
            render={({ field }) => ( 
            <FormItem> 
            <FormLabel>Estado</FormLabel> 
            <FormControl> 
            <Input placeholder="Estado" {...field} />
             </FormControl>
              <FormMessage /> 
              </FormItem> )} /> */}
            {/* Cidade - Comentado até atualizar o banco de dados */}{" "}
            {/* <FormField control={form.control} 
               name="cidade" 
               render={({ field }) => ( 
               <FormItem> 
               <FormLabel>Cidade</FormLabel> 
               <FormControl> 
               <Input placeholder="Cidade" {...field} /> 
               </FormControl> 
               <FormMessage /> 
               </FormItem> )} /> */}
            {/* Inscrição Estadual - Comentado até atualizar o banco de dados */}
            {/* <FormField control={form.control} 
               name="inscricaoEstadual" 
               render={({ field }) => ( 
               <FormItem>
               <FormLabel>Inscrição Estadual</FormLabel>
               <FormControl> 
               <Input placeholder="Inscrição Estadual" {...field} />
               </FormControl>
               <FormMessage /> 
               </FormItem> )} /> */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Cadastrar Cliente"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ClientForm;
