"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
}

const SERVICE_OPTIONS = [
  "Residential Roofing",
  "Commercial Roofing",
  "Storm Damage Repair",
  "Gutters",
  "Exterior Services",
  "Interior / Water Damage",
  "Other",
];

export default function QuoteForm({ dark = true }: { dark?: boolean }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.address.trim()) newErrors.address = "Property address is required";
    if (!formData.service) newErrors.service = "Please select a service";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate API call — replace with real form submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `form-input w-full ${dark ? "" : "bg-white border-gray-200 text-brand-black placeholder-gray-400 focus:border-brand-crimson"}`;
  const labelClass = `form-label ${dark ? "" : "text-gray-500"}`;
  const errorClass = "text-red-400 text-xs mt-1";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-14 h-14 text-green-400 mb-4" />
        <h3 className={`font-display text-2xl uppercase font-bold mb-2 ${dark ? "text-white" : "text-brand-black"}`} style={{ fontFamily: "var(--font-oswald)" }}>
          Request Received!
        </h3>
        <p className={`text-sm max-w-sm ${dark ? "text-white/60" : "text-gray-600"}`}>
          Thank you, {formData.name.split(" ")[0]}. Our team will contact you within 1 business hour to schedule your free inspection.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            type="text"
            className={inputClass}
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className={errorClass} role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number *</label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            placeholder="(214) 555-0100"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            aria-required="true"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorClass} role="alert">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          id="email"
          type="email"
          className={inputClass}
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className={errorClass} role="alert">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>Property Address *</label>
        <input
          id="address"
          type="text"
          className={inputClass}
          placeholder="123 Main St, Frisco, TX"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.address}
        />
        {errors.address && <p className={errorClass} role="alert">{errors.address}</p>}
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>Service Needed *</label>
        <select
          id="service"
          className={`${inputClass} cursor-pointer`}
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.service}
          style={dark ? { backgroundColor: "rgba(255,255,255,0.05)" } : {}}
        >
          <option value="" disabled>Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.service && <p className={errorClass} role="alert">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message / Notes (Optional)</label>
        <textarea
          id="message"
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Describe your roofing situation or any specific concerns..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-4 text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request My Free Inspection
          </>
        )}
      </button>

      <p className={`text-center text-xs ${dark ? "text-white/40" : "text-gray-400"}`}>
        We typically respond within 1 business hour.
      </p>
    </form>
  );
}
