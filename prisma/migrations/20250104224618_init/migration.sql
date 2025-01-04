-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "cliente" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "transportadora" TEXT NOT NULL,
    "telefoneResidencial" TEXT,
    "celular" TEXT NOT NULL,
    "suframa" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_documento_key" ON "cliente"("documento");
