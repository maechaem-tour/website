import { destinations } from "@/app/data/destinations";
import { navLinks, site } from "@/app/data/site";
import Container from "@/app/components/ui/Container";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-display text-xl font-bold">{site.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {site.tagline}. Exclusive private tours across Chiang Mai and
              Northern Thailand with VIP transport and local expertise.
            </p>
            <a
              href={buildWhatsAppUrl("Hello, I have a question about your tours.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
            >
              💬 WhatsApp Us
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Destinations
            </h3>
            <ul className="space-y-2.5">
              {destinations.map((dest) => (
                <li key={dest.slug}>
                  <a
                    href={`/tours/${dest.tourSlug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {dest.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>📍 {site.location}</li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  📱 {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  ✉️ {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Private Tours • Northern Thailand Only
          </p>
        </div>
      </Container>
    </footer>
  );
}
