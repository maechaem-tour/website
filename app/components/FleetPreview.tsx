import Image from "next/image";
import { fleet } from "@/app/data/fleet";
import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import FadeIn from "@/app/components/ui/FadeIn";

export default function FleetPreview() {
  return (
    <section id="fleet" className="bg-surface py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Travel in Comfort"
            title="Our Premium Fleet"
            subtitle="Every private tour comes with a meticulously maintained vehicle matched to your group size and comfort preferences."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((vehicle, index) => (
            <FadeIn key={vehicle.name} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-primary/8 bg-background shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full gradient-bg px-3 py-1 text-xs font-bold text-white">
                    {vehicle.seats}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-primary">
                    {vehicle.name}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {vehicle.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
