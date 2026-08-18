"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check, Loader2, Mail, Phone, Instagram, Linkedin, Github } from "@/components/ui/Icons";

const PROJECT_TYPES = [
  "Web Development",
  "Web Design",
  "Logo Design",
  "Portfolio Development",
  "Other",
];

const BUDGET_RANGES = [
  "Under ₹2,000",
  "₹2,000 – ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000+",
  "Not sure yet",
];

export const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    if (preselectedService) {
      const normalizedParam = preselectedService.toLowerCase().replace(/[-_]/g, " ");
      const match = PROJECT_TYPES.find(
        (t) =>
          t.toLowerCase() === normalizedParam ||
          t.toLowerCase().replace(/\s+/g, "-") === preselectedService.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({ ...prev, projectType: match }));
      }
    }
  }, [preselectedService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project goals or requirements.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a bit more detail (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data: { success?: boolean; message?: string } = {};
      try {
        data = await res.json();
      } catch {
        data = {
          success: false,
          message:
            "Something went wrong while sending your enquiry. Please try again or contact me directly.",
        };
      }

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setServerMessage(
          data.message ||
            "Your enquiry has been sent successfully. I'll get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setServerMessage(
          data.message ||
            "Something went wrong while sending your enquiry. Please try again or contact me directly."
        );
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setServerMessage(
        "Something went wrong while sending your enquiry. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#cdc5c2] border border-[#cdc5c2] bg-background">
      {/* Left Column: Contact Details (Warm Orange Accent Panel) */}
      <div className="md:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-10 bg-primary text-white">
        <div className="space-y-10">
          {/* Direct Channels */}
          <div>
            <h2 className="font-sans font-semibold text-xs text-white/80 mb-4 uppercase tracking-wider">
              LET&apos;S TALK
            </h2>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href="mailto:craftedweb@zohomail.in"
                  className="text-white hover:text-white/80 transition-colors flex items-center group gap-2.5"
                >
                  <Mail className="w-4 h-4 text-white group-hover:text-white/80 transition-colors shrink-0" />
                  <span className="break-all">craftedweb@zohomail.in</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+916385626810"
                  className="text-white hover:text-white/80 transition-colors flex items-center group gap-2.5"
                >
                  <Phone className="w-4 h-4 text-white group-hover:text-white/80 transition-colors shrink-0" />
                  <span>6385626810</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-sans font-semibold text-xs text-white/80 mb-4 uppercase tracking-wider">
              SOCIAL
            </h2>
            <div className="flex items-center gap-4 text-white">
              <a
                href="https://www.instagram.com/crafted_webs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-white/70 hover:-translate-y-0.5 transition-all duration-200 p-1 -m-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nirmal-p-44645a326/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-white/70 hover:-translate-y-0.5 transition-all duration-200 p-1 -m-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Nirmal0804"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white hover:text-white/70 hover:-translate-y-0.5 transition-all duration-200 p-1 -m-1"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/20 font-sans text-xs text-white/90">
          <p>
            Usually responding within 24 hours on business days.
          </p>
        </div>
      </div>

      {/* Right Column: Enquiry Form */}
      <div className="md:col-span-8 p-6 sm:p-8 lg:p-10">
        {submitStatus === "success" ? (
          <div className="bg-surface-container-high p-6 sm:p-8 border border-primary/40 space-y-5 animate-in fade-in duration-200">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-on-surface font-semibold mb-1.5">
                Enquiry Sent Successfully!
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {serverMessage}
              </p>
            </div>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="font-sans font-semibold text-xs text-primary underline hover:opacity-80 transition-opacity uppercase tracking-wider"
            >
              Send Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 max-w-2xl" noValidate>
            {submitStatus === "error" && (
              <div className="p-3.5 bg-error/10 border border-error text-error text-xs font-sans">
                {serverMessage}
              </div>
            )}

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-sans font-semibold text-xs text-on-surface-variant mb-1.5 uppercase tracking-wider"
                >
                  NAME <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name or studio"
                  className={`bg-transparent border-0 border-b ${errors.name ? "border-error" : "border-[#cdc5c2]"
                    } py-2 font-sans text-sm text-on-surface placeholder-on-surface-variant/40 focus:border-primary focus:outline-none transition-colors`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className="text-xs text-error mt-1 font-sans">{errors.name}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-sans font-semibold text-xs text-on-surface-variant mb-1.5 uppercase tracking-wider"
                >
                  EMAIL <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className={`bg-transparent border-0 border-b ${errors.email ? "border-error" : "border-[#cdc5c2]"
                    } py-2 font-sans text-sm text-on-surface placeholder-on-surface-variant/40 focus:border-primary focus:outline-none transition-colors`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="text-xs text-error mt-1 font-sans">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Row 2: Phone */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="font-sans font-semibold text-xs text-on-surface-variant mb-1.5 uppercase tracking-wider"
              >
                PHONE <span className="text-xs text-on-surface-variant/60 font-normal lowercase">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="bg-transparent border-0 border-b border-[#cdc5c2] py-2 font-sans text-sm text-on-surface placeholder-on-surface-variant/40 focus:border-primary focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
            </div>

            {/* Row 3: Project Type & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="project-type"
                  className="font-sans font-semibold text-xs text-on-surface-variant mb-1.5 uppercase tracking-wider"
                >
                  PROJECT TYPE <span className="text-primary">*</span>
                </label>
                <select
                  id="project-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className={`bg-transparent border-0 border-b ${errors.projectType ? "border-error" : "border-[#cdc5c2]"
                    } py-2 font-sans text-sm text-on-surface focus:border-primary focus:outline-none transition-colors cursor-pointer`}
                  disabled={isSubmitting}
                >
                  <option value="" disabled className="bg-background text-on-surface-variant">
                    Select a service...
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-background text-on-surface">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <span className="text-xs text-error mt-1 font-sans">{errors.projectType}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="budget"
                  className="font-sans font-semibold text-xs text-on-surface-variant mb-1.5 uppercase tracking-wider"
                >
                  BUDGET <span className="text-xs text-on-surface-variant/60 font-normal lowercase">(approx)</span>
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="bg-transparent border-0 border-b border-[#cdc5c2] py-2 font-sans text-sm text-on-surface focus:border-primary focus:outline-none transition-colors cursor-pointer"
                  disabled={isSubmitting}
                >
                  <option value="" className="bg-background text-on-surface-variant">
                    Select budget range...
                  </option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b} className="bg-background text-on-surface">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="font-sans font-semibold text-xs text-on-surface-variant mb-1.5 uppercase tracking-wider"
              >
                MESSAGE <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project goals, scope, and timeline..."
                className={`bg-transparent border-0 border-b ${errors.message ? "border-error" : "border-[#cdc5c2]"
                  } py-2 font-sans text-sm text-on-surface placeholder-on-surface-variant/40 focus:border-primary focus:outline-none resize-none transition-colors`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <span className="text-xs text-error mt-1 font-sans">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 font-sans font-medium text-xs uppercase tracking-wider bg-primary text-on-primary px-7 py-3.5 border border-primary hover:bg-transparent hover:text-primary transition-all duration-200 cursor-pointer active:scale-[0.98] disabled:opacity-50 w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
