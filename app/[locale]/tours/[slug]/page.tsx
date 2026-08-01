import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours, getTourBySlug } from "@/app/data/tours";
import TourGallery from "@/app/components/TourGallery";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import { buildWhatsAppUrl } from "@/lib/utils";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: tour.title,
    description: tour.overview,
  };
}

export default async function TourDetail({ params }: Props) {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) notFound();

  const related = tours.filter((item) => item.slug !== tour.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-background pb-20 pt-24 sm:pt-28">
        <Container>
          <nav className="mb-6 text-sm text-muted">
           <Link href={`/${locale}`} className="hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/#tours`} className="hover:text-accent">
            Tours
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{tour.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                {tour.title}
              </h1>
              <p className="mt-2 text-2xl font-bold gradient-text">{tour.price}</p>

              <div className="mt-8">
                <TourGallery images={tour.gallery} title={tour.title} />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Location", value: tour.location, icon: "📍" },
                  { label: "Duration", value: tour.duration, icon: "⏱" },
                  { label: "Tour Type", value: "Private Tour", icon: "🚐" },
                  { label: "Rating", value: "5.0 / 5", icon: "⭐" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-primary/8 bg-surface p-4 text-center shadow-sm"
                  >
                    <p className="text-lg">{item.icon}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  Tour Overview
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {tour.overview}
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  Highlights
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {tour.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-primary/8 bg-surface px-4 py-3 text-sm text-primary"
                    >
                      <span className="text-accent">★</span>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  Itinerary
                </h2>
                <div className="mt-6 space-y-4">
                  {tour.itinerary.map((item, index) => (
                    <div key={item} className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-bg text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="flex-1 rounded-xl border border-primary/8 bg-surface px-4 py-3 text-sm text-primary sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  What&apos;s Included
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {tour.included.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-primary/8 bg-surface px-4 py-3 text-sm text-primary"
                    >
                      <span className="text-accent">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-16">
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  Related Tours
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${locale}/tours/${item.slug}`}
                      className="group overflow-hidden rounded-2xl border border-primary/8 bg-surface shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-bold text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          📍 {item.location} · ⏱ {item.duration}
                        </p>
                        <p className="mt-2 font-bold gradient-text">
                          {item.price}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-primary/8 bg-surface p-6 shadow-xl shadow-primary/5 sm:p-8">
                <p className="text-3xl font-bold gradient-text">{tour.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>✓ Private Tour</li>
                  <li>✓ Instant Confirmation</li>
                  <li>✓ Hotel Pickup</li>
                  <li>✓ Flexible Itinerary</li>
                </ul>
                <Button
                  href={buildWhatsAppUrl(
                    `Hello, I am interested in the ${tour.title} private tour.`,
                  )}
                  external
                  variant="whatsapp"
                  size="lg"
                  className="mt-6 w-full"
                >
                  Book via WhatsApp
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
