import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";
import FadeIn from "@/app/components/ui/FadeIn";

const reasons = [
  {
    icon: "🚐",
    title: "Private VIP Transport",
    text: "Travel in comfort with our premium fleet of SUVs, vans, and luxury vehicles — exclusively for your group.",
  },
  {
    icon: "🗺️",
    title: "Fully Customizable",
    text: "Every itinerary is tailored to your pace, interests, and schedule. No crowded group buses, ever.",
  },
  {
    icon: "🏔️",
    title: "Local Expertise",
    text: "Our experienced drivers and guides know every hidden waterfall, viewpoint, and village trail in the North.",
  },
  {
    icon: "⭐",
    title: "Premium Service",
    text: "From hotel pickup to cold drinks on board — we handle every detail so you can focus on the experience.",
  },
  {
    icon: "💬",
    title: "Instant WhatsApp Support",
    text: "Book, change plans, or ask questions anytime. We respond quickly in English and Thai.",
  },
  {
    icon: "🛡️",
    title: "Trusted & Insured",
    text: "Licensed operator with comprehensive insurance. Over 500 happy travelers and a perfect 5.0 rating.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="The Mae Chaem Difference"
            title="Why Choose Us"
            subtitle="We specialize exclusively in private tours across Northern Thailand — delivering luxury, flexibility, and authentic local experiences."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="group h-full rounded-2xl border border-primary/8 bg-surface p-6 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 sm:p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-3xl transition-colors group-hover:bg-accent/10">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
