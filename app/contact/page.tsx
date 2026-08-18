import { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageContainer } from "@/components/layout/PageContainer";
import { Loader2 } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Crafted Web to discuss your upcoming website, portfolio, branding, or digital product.",
};

export default function ContactPage() {
  return (
    <PageContainer usePadding className="py-12 sm:py-16 lg:py-20 flex flex-col gap-10 sm:gap-14 lg:gap-16">
      {/* Header */}
      <header className="max-w-3xl flex flex-col gap-3">
        <p className="font-sans text-xs uppercase tracking-widest text-primary font-semibold">
          CONTACT &amp; ENQUIRIES
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-on-surface font-semibold tracking-tight">
          Start a project.
        </h1>
        <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Tell me about your goals, timeline, and vision. Let&apos;s collaborate to craft something memorable and effective.
        </p>
      </header>

      {/* Two-Column Editorial Contact Grid */}
      <Suspense
        fallback={
          <div className="p-16 border border-[#E5E2E1] flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        }
      >
        <ContactForm />
      </Suspense>
    </PageContainer>
  );
}
