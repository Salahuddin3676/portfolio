import { useState } from "react";
import { menuLinks } from "../data";

const links = menuLinks.filter((link) => link.url !== "#home");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e7e2] bg-[#f4f4f1]/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c1c1c] text-xs font-semibold text-white">
            GS
          </span>
          <span className="hidden text-sm font-medium sm:block">Salahuddin</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-sm text-[#4d4d4d] transition-colors hover:text-[#1c1c1c]"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <p className="hidden text-sm text-[#6d6d68] lg:block">Bangalore, India</p>
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-[#1c1c1c] px-4 text-sm text-white md:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e0e0db] bg-white md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1">
              <span className={`h-px w-full bg-[#1c1c1c] ${open ? "translate-y-[2.5px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-[#1c1c1c] ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[#e7e7e2] bg-[#f4f4f1] px-5 py-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              onClick={() => setOpen(false)}
              className="block py-3 text-base"
            >
              {link.title}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
