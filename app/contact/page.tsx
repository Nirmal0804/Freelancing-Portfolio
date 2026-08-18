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
      {/* Introductory Header - Centered Warm Orange */}
      <header className="w-full flex flex-col items-center justify-center text-center max-w-3xl mx-auto gap-4">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold uppercase tracking-tight leading-tight">
          LET&apos;S WORK TOGETHER
        </h1>
        <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Tell me about your goals, timeline, and vision. Let&apos;s collaborate to craft something memorable and effective.
        </p>
      </header>

      {/* Two-Column Editorial Contact Grid */}
      <Suspense
        fallback={
          <div className="p-16 border border-[#cdc5c2] flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        }
      >
        <ContactForm />
      </Suspense>
    </PageContainer>
  );
}
