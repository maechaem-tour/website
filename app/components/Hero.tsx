"use client";

import { motion } from "framer-motion";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import { site } from "@/app/data/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/60 to-primary/90" />

      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-light/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 py-28 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-light sm:text-sm"
          >
            {site.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Discover Northern Thailand{" "}
            <span className="gradient-text">Your Way</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
          >
            Exclusive private tours to Doi Inthanon, Pai, Ban Rak Thai, Mae
            Kampong, and hidden gems — with VIP transport and local experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#contact" variant="primary" size="lg">
              Book Your Tour
            </Button>
            <Button href="#tours" variant="outline" size="lg">
              Explore Tours
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 sm:grid-cols-4"
          >
            {[
              { value: "500+", label: "Happy Travelers" },
              { value: "6", label: "Premium Destinations" },
              { value: "5.0", label: "Average Rating" },
              { value: "100%", label: "Private Tours" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-white/65 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="#tours"
          aria-label="Scroll to tours"
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1"
        >
          <span className="h-2 w-1 rounded-full bg-white/70" />
        </a>
      </motion.div>
    </section>
  );
}
