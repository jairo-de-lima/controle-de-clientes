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
} from "./ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { z } from "zod";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"; // Para redirecionar ou atualizar a página após o envio

// Definir o esquema de validação com Zod
const formSchema = z.object({
  cliente: z.string().min(1, "Nome do Cliente é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  documento: z.number().min(1, "CNPJ ou CPF é obrigatório"),
  fornecedor: z.string().min(1, "Fornecedor é obrigatório"),
  transportadora: z.string().min(1, "Transportadora é obrigatória"),
  telefoneResidencial: z.number().min(1, "Telefone Residencial é obrigatório"),
  celular: z.number().min(1, "Celular é obrigatório"),
  suframa: z.string().min(1, "Suframa é obrigatório"),
  email: z.string().email("Email inválido"),
});

const ClientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cliente: "",
      endereco: "",
      documento: 0,
      fornecedor: "",
      transportadora: "",
      telefoneResidencial: 0,
      celular: 0,
      suframa: "",
      email: "",
    },
  });

  const router = useRouter(); // Hook do Next.js para manipulação de rotas

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Erro ao enviar cliente:", error);
        return;
      }

      console.log("Cliente cadastrado com sucesso");
      form.reset(); // Reseta o formulário
      router.refresh(); // Atualiza a página ou redireciona
    } catch (error) {
      console.error("Erro ao enviar cliente:", error);
    }
  }

  return (
    <Card className="mt-12 w-[90%]">
      <CardHeader>
        <CardTitle>Cadastro de clientes</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="cliente"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cliente</FormLabel>
                  <FormControl>
                    <Input placeholder="cliente" {...field} />
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
                    <Input placeholder="cpf/ cnpj" {...field} />
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
                  <FormLabel>Endereco</FormLabel>
                  <FormControl>
                    <Input placeholder="Endereco" {...field} />
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
                    <Input placeholder="fornecedor" {...field} />
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
                    <Input placeholder="transportadora" {...field} />
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
                    <Input placeholder="Suframa" {...field} />
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

export default ClientForm;
