"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { z } from "zod";
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button type="submit">Enviar</Button>
      </CardFooter>
    </Card>
    // <Card className="p-6">
    //   <CardTitle className="mb-4 text-lg font-bold">
    //     Cadastro de Clientes
    //   </CardTitle>
    //   <CardContent>
    //     <form className="space-y-6">
    //       {[
    //         { name: "cliente", label: "Nome do Cliente" },
    //         { name: "endereco", label: "Endereço" },
    //         { name: "documento", label: "CNPJ ou CPF" },
    //         { name: "fornecedor", label: "Fornecedor" },
    //         { name: "transportadora", label: "Transportadora" },
    //         { name: "telefoneResidencial", label: "Telefone Residencial" },
    //         { name: "celular", label: "Celular" },
    //       ].map((field) => (
    //         <div key={field.name} className="flex flex-col">
    //           <label className="mb-1 text-sm font-semibold text-gray-700">
    //             {field.label}
    //           </label>
    //           <Input
    //             className="rounded border p-2"
    //             type="text"
    //             {...register(field.name)}
    //           />
    //           {/* {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name].message.toString()}</p>} */}
    //         </div>
    //       ))}
    //       <Button
    //         className="mt-4 rounded bg-blue-500 p-2 text-white"
    //         type="submit"
    //       >
    //         Cadastrar
    //       </Button>
    //     </form>
    //   </CardContent>
    // </Card>
  );
};
export default ClientForm;
