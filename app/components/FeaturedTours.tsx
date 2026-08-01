import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { getFeaturedTours } from "@/app/data/tours";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import FadeIn from "@/app/components/ui/FadeIn";
import Button from "@/app/components/ui/Button";

export default function FeaturedTours() {
  const tours = getFeaturedTours();

  const locale = useLocale();
  return (
    <section id="tours" className="bg-background py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Curated Experiences"
            title="Featured Private Tours"
            subtitle="Handpicked journeys through Northern Thailand's most breathtaking landscapes, culture, and wildlife."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <FadeIn key={tour.slug} delay={index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-lg shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    Private Tour
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted">
                    <span>📍 {tour.location}</span>
                    <span className="text-primary/30">•</span>
                    <span>⏱ {tour.duration}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-primary sm:text-2xl">
                    {tour.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                    {tour.overview}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-primary/8 pt-5">
                    <p className="text-lg font-bold gradient-text">{tour.price}</p>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button href="#contact" variant="secondary" size="lg">
            Request Custom Itinerary
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
