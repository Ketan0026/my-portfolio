"use client";
import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("#home");

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex sm:gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#project", label: "Projects" },
          { href: "#contact", label: "Contact" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.href)}
            className={`nav-item px-3.5 sm:px-4 py-2 rounded-full transition ${
              active === item.href
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : "hover:bg-white/20 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;