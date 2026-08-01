import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/app/data/destinations";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import FadeIn from "@/app/components/ui/FadeIn";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-primary py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Northern Thailand"
            title="Top Destinations"
            subtitle="From cloud-kissed peaks to hidden villages — explore the region's finest private tour destinations."
            light
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place, index) => (
            <FadeIn key={place.slug} delay={index * 0.07}>
              <Link
                href={`/tours/${place.tourSlug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[3/4]"
              >
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {place.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:text-base">
                    {place.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-light opacity-0 transition-all duration-300 group-hover:opacity-100">
                    View Tour →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
