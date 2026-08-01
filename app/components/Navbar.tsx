"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site } from "@/app/data/site";
import Button from "@/app/components/ui/Button";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-lg shadow-primary/5 py-3"
          : "bg-transparent py-4 sm:py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex flex-col">
          <span
            className={cn(
              "font-display text-lg font-bold leading-tight transition-colors sm:text-xl",
              scrolled ? "text-primary" : "text-white",
            )}
          >
            {site.name}
          </span>
          <span
            className={cn(
              "hidden text-[10px] font-medium uppercase tracking-wider sm:block sm:text-xs",
              scrolled ? "text-accent" : "text-white/70",
            )}
          >
            {site.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-primary/80" : "text-white/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={buildWhatsAppUrl("Hello, I would like to book a private tour.")}
            external
            variant="whatsapp"
            size="sm"
          >
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={cn(
            "relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl lg:hidden",
            scrolled || menuOpen ? "text-primary" : "text-white",
          )}
        >
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full bg-current transition-all duration-300",
              menuOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full bg-current transition-all duration-300",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full bg-current transition-all duration-300",
              menuOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl font-semibold text-white hover:text-accent-light"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                <Button
                  href={buildWhatsAppUrl("Hello, I would like to book a private tour.")}
                  external
                  variant="whatsapp"
                  size="lg"
                >
                  Book on WhatsApp
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
