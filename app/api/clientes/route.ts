// /app/api/clientes/route.ts
import { prisma } from "@/app/_lib/prisma";
import { Cliente } from "@/app/types/clientes";

import { NextResponse } from "next/server";

// Listar clientes
export async function GET() {
  try {
    const clientes = await prisma.cliente.findMany();
    return NextResponse.json(clientes, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao listar clientes." },
      { status: 500 },
    );
  }
}

// Criar cliente
export async function POST(req: Request) {
  try {
    const data: Cliente = await req.json();
    const cliente = await prisma.cliente.create({ data });
    return NextResponse.json(cliente, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar cliente." },
      { status: 500 },
    );
  }
}
