import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-navbar.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const waLink =
    "https://wa.me/6285659881470?text=Halo%20VESPER%20Studio%2C%20saya%20mau%20tanya-tanya%20soal%20paket%20foto";

  const navItem = ({ isActive }) =>
    `hover:text-maroon transition-colors ${isActive ? "text-maroon font-semibold" : "text-ink-soft"}`;

  const navItemMobile = ({ isActive }) =>
    `block py-3 text-base border-b border-line/60 last:border-0 ${isActive ? "text-maroon font-semibold" : "text-ink-soft"}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/85 border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="VESPER Studio"
            className="w-10 h-10 object-contain"
          />
          <span className="font-display text-xl tracking-tight text-maroon-deep">
            VESPER{" "}
            <span className="italic font-normal text-ink-soft text-base">
              Studio
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" end className={navItem}>
            Home
          </NavLink>
          <NavLink to="/portofolio" className={navItem}>
            Gallery
          </NavLink>
          <NavLink to="/tentang" className={navItem}>
            About
          </NavLink>
          <NavLink to="/kontak" className={navItem}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 bg-maroon hover:bg-maroon-deep active:scale-95 text-cream text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
          >
            Chat WhatsApp
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-ink/5 transition-colors"
          >
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4">
          <NavLink
            to="/"
            end
            className={navItemMobile}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/portofolio"
            className={navItemMobile}
            onClick={() => setOpen(false)}
          >
            Portofolio
          </NavLink>
          <NavLink
            to="/tentang"
            className={navItemMobile}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/kontak"
            className={navItemMobile}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            className="sm:hidden mt-3 inline-flex w-full justify-center items-center gap-2 bg-maroon text-cream text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
