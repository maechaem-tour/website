import { buildWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl("Hello, I would like to inquire about a private tour.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110 active:scale-95 sm:h-16 sm:w-16"
    >
      💬
    </a>
  );
}
