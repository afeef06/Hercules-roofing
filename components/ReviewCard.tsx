import { Star, Quote } from "lucide-react";
import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="relative bg-brand-steel border border-white/6 p-6 flex flex-col gap-4 transition-all duration-300 hover:border-brand-crimson/25 hover:shadow-xl group" style={{ backgroundColor: "#1E2832" }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-12 h-0.5 bg-brand-crimson transition-all duration-300 group-hover:w-full" />

      {/* Quote icon */}
      <Quote className="w-6 h-6 text-brand-crimson/50" aria-hidden="true" />

      {/* Stars */}
      <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review text */}
      <blockquote className="text-white/75 text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Reviewer info */}
      <footer>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand-crimson/20 border border-brand-crimson/30 flex items-center justify-center text-brand-crimson font-display font-bold text-sm" style={{ fontFamily: "var(--font-oswald)" }}>
            {review.name.charAt(0)}
          </div>
          <div>
            <cite className="text-white font-semibold text-sm not-italic">{review.name}</cite>
            {review.title && (
              <p className="text-white/40 text-xs">{review.title}</p>
            )}
            <p className="text-white/35 text-xs">{review.source} Review</p>
          </div>
        </div>
      </footer>
    </article>
  );
}
