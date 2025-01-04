-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "cliente" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "documento" BIGINT NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "transportadora" TEXT NOT NULL,
    "telefoneResidencial" BIGINT NOT NULL,
    "celular" BIGINT NOT NULL,
    "suframa" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
