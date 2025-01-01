"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
//Components
import NavItem, { NavItemInterface } from "../NavItem/NavItem-Component";
//Styles
import "./Navbar-Styles.css";

export default function Navbar() {
  const Items: NavItemInterface[] = [
    {
      url: "/",
      label: "Início",
    },
    {
      url: "/about",
      label: "Sobre",
    },

    {
      url: "/products",
      label: "Produtos",
    },
    {
      url: "/services",
      label: "Serviços",
    },
    {
      url: "/contacts",
      label: "Contatos",
    },
  ];

  const pathName = usePathname();

  return (
    <header>
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image
            src="2qzsQ1RdlRhMi8b2ML025BWQ2OU.svg"
            width={40}
            height={40}
            alt="Minha_Logo"
          />
        </Link>
        <ul className="nav-items">
          {Items.map((item, index) => (
            <NavItem
              url={item.url}
              label={item.label}
              key={index}
              isActive={pathName === item.url}
            />
          ))}
        </ul>
        <button className="btn-default">Contatar</button>
      </nav>
    </header>
  );
}
