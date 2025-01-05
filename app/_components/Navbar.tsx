import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <nav className="flex items-center border-b border-solid px-8 py-4">
        {/* Imagem à Esquerda */}
        <div className="mr-4">
          <Image src="/logo.jpg" width={173} height={39} alt="logo" />
        </div>

        {/* Itens da Navbar Centralizados */}
        <div className="flex flex-1 justify-center space-x-10">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Cliente
          </Link>

          <Link
            href="/Carrier"
            className={
              pathname === "/Carrier"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Transportadora
          </Link>

          <Link
            href="/Suplier"
            className={
              pathname === "/Suplier"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Fornecedor
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
