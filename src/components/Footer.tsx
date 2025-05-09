import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-20 md:h-28 px-4 lg:px-20 xl:px-40 bg-white border-t-2 border-red-500 text-red-500 flex items-center justify-between shadow-inner">
      <Link href="/" className="font-serif text-xl md:text-2xl tracking-wide hover:text-red-700 transition">
        Restaurante Di Palma
      </Link>
      <p className="text-xs md:text-sm uppercase tracking-widest">© All Rights Reserved {new Date().getFullYear()}.</p>
    </div>
  );
};

export default Footer;
