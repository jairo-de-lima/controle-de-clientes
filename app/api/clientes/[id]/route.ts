// /app/api/clientes/[id]/route.ts
import { prisma } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

// Atualizar cliente
export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const data = await req.json();
    const cliente = await prisma.cliente.update({
      where: { id },
      data,
    });
    return NextResponse.json(cliente, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar cliente." },
      { status: 500 },
    );
  }
}

// Deletar cliente
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    await prisma.cliente.delete({ where: { id } });
    return NextResponse.json(
      { message: "Cliente deletado com sucesso." },
      { status: 204 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar cliente." },
      { status: 500 },
    );
  }
}
