import { prisma } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const clienteSchema = z.object({
  cliente: z.string().min(2),
  endereco: z.string().min(5),
  documento: z.string().min(11),
  fornecedor: z.string().min(2),
  transportadora: z.string().min(2),
  telefoneResidencial: z.string().min(10).nullable().optional(),
  celular: z.string().min(11),
  suframa: z.string().nullable().optional(),
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Dados recebidos:", body); // Log dos dados recebidos

    // Valida os dados recebidos
    const validatedData = clienteSchema.parse(body);
    console.log("Dados validados:", validatedData); // Log após validação

    // Verifica se já existe um cliente com o mesmo documento
    const existingCliente = await prisma.cliente.findFirst({
      where: {
        documento: validatedData.documento,
      },
    });

    if (existingCliente) {
      console.log("Cliente existente encontrado:", existingCliente);
      return NextResponse.json(
        { error: "Cliente já cadastrado com este documento." },
        { status: 400 },
      );
    }

    console.log("Tentando criar cliente..."); // Log antes de criar
    const cliente = await prisma.cliente.create({
      data: validatedData,
    });
    console.log("Cliente criado com sucesso:", cliente); // Log após criar

    return NextResponse.json(cliente, { status: 201 });
  } catch (error) {
    // Log detalhado do erro
    console.error("Erro completo:", error);

    if (error instanceof z.ZodError) {
      console.log("Erro de validação Zod:", error.errors);
      return NextResponse.json(
        { error: "Dados inválidos", details: error.errors },
        { status: 400 },
      );
    }

    // Se for um erro do Prisma, vamos logar mais detalhes
    if (error instanceof Error && "code" in error) {
      // Prisma errors têm um código
      console.error("Erro do Prisma:", {
        code: (error as any).code,
        message: error.message,
        meta: (error as any).meta,
      });
    }

    return NextResponse.json(
      {
        error: "Erro interno ao criar cliente.",
        details:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : undefined,
      },
      { status: 500 },
    );
  }
}
