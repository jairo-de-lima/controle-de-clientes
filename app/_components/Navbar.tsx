import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
        {/* Imagem à Esquerda */}
        <div className="mr-8 flex-shrink-0">
          <Image src="/logo.jpg" width={173} height={39} alt="logo" />
        </div>

        {/* Itens da Navbar Centralizados */}
        <div className="flex flex-grow items-center justify-center space-x-10">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Home
          </Link>
          <Link
            href="/page.tsx"
            className={
              pathname === "/Home"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            About
          </Link>
          <Link
            href="/About"
            className={
              pathname === "/about"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
