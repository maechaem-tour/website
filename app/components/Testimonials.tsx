"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/app/data/testimonials";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import FadeIn from "@/app/components/ui/FadeIn";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="reviews" className="bg-background py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Guests Say"
            subtitle="Real experiences from travelers who explored Northern Thailand with Mae Chaem Tour & Travel."
          />
        </FadeIn>

        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-primary/8 bg-surface p-8 shadow-xl shadow-primary/5 sm:p-12"
              >
                <div className="mb-6 flex gap-1 text-accent">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-display text-xl leading-relaxed text-primary sm:text-2xl">
                  &ldquo;{current.text}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-bg text-lg font-bold text-white">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-primary">
                      {current.name}
                    </cite>
                    <p className="text-sm text-muted">
                      {current.flag} {current.country}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`View review ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-8 gradient-bg"
                      : "w-2.5 bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.08}>
              <div className="rounded-2xl border border-primary/8 bg-surface p-6">
                <div className="mb-3 text-accent">★★★★★</div>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {review.flag} {review.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
