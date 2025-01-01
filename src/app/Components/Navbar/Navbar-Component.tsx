"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
//Components
import NavItem, { NavItemInterface } from "../NavItem/NavItem-Component";
//Styles
import { FaBars, FaXmark } from "react-icons/fa6";
import "./Navbar-Styles.css";
import { useState } from "react";

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
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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
        <ul className={`nav-items ${openMenu ? "open" : ""}`}>
          {Items.map((item, index) => (
            <NavItem
              url={item.url}
              label={item.label}
              key={index}
              isActive={pathName === item.url}
            />
          ))}
        </ul>
        <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <FaXmark size={30} /> : <FaBars size={30} />}
        </button>
        <button className="btn-default">Contatar</button>
      </nav>
    </header>
  );
}
