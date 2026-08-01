"use client";

import { motion } from "framer-motion";
import { site } from "@/app/data/site";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 gradient-bg" />
      <motion.div
        className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
          >
            Start Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Ready for Your Private Northern Thailand Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Tell us your dates and dream destinations. We&apos;ll craft a
            personalized itinerary and confirm within hours via WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              href={buildWhatsAppUrl(
                "Hello Mae Chaem Tour, I would like to book a private tour in Northern Thailand.",
              )}
              external
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl"
            >
              Chat on WhatsApp
            </Button>
            <Button
              href={`mailto:${site.email}?subject=Private Tour Inquiry`}
              external
              variant="outline"
              size="lg"
            >
              Email Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-col items-center gap-2 text-white/80 sm:flex-row sm:justify-center sm:gap-8"
          >
            <span>📱 {site.phone}</span>
            <span className="hidden sm:inline">•</span>
            <span>📍 {site.location}</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
