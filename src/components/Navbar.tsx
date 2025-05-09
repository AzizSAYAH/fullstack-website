"use client";

import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-16 md:h-24 lg:h-28 px-4 md:px-12 lg:px-20 xl:px-40 flex items-center justify-between border-b-2 border-red-500 bg-white shadow-sm uppercase text-red-500">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-8 flex-1 text-[15px] tracking-wider">
        <Link href="/" className="hover:text-red-700 transition">Homepage</Link>
        <Link href="/menu" className="hover:text-red-700 transition">Menu</Link>
        <Link href="/contact" className="hover:text-red-700 transition">Contact</Link>
      </div>

      {/* LOGO */}
      <div className="flex-1 text-center md:text-center text-xl md:text-2xl font-serif cursor-pointer text-red-500">
        <Link href="/">Restaurante Di Palma</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-6 items-center justify-end flex-1">
        <div className="md:absolute top-4 right-4 lg:static flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full cursor-pointer hover:bg-red-200 transition">
          <Image src="/phone.png" alt="Phone" width={20} height={20} />
          <span className="font-semibold">123 456 78</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
