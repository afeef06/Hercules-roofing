"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/data/faqs";

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-brand-black" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="overline mb-4">Got Questions?</p>
          <h2 className="display-md text-white" style={{ fontFamily: "var(--font-oswald)" }}>
            {title}
          </h2>
        </div>

        <div className="space-y-2" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/8 overflow-hidden"
              style={{ backgroundColor: "#161616" }}
              role="listitem"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/3 transition-colors"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-white font-semibold text-base leading-snug">
                  {faq.question}
                </span>
                <span className="shrink-0 w-7 h-7 flex items-center justify-center bg-brand-crimson/15 border border-brand-crimson/25 text-brand-crimson">
                  {openIndex === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5"
                >
                  <div className="pt-4">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
