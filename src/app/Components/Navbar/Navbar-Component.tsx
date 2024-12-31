import Image from "next/image";
import Link from "next/link";
import NavItem from "../NavItem/NavItem-Component";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="Logo.jpg.svg" width={40} height={40} alt="Minha_Logo" />
        </Link>
        <ul className="nav-items">
          <NavItem url="/" label="Ínicio" />
        </ul>
      </nav>
    </header>
  );
}
