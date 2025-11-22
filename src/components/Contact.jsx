import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // In a future step, we can wire this to the backend/email.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  };

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Get a free quote</h2>
        <p className="text-slate-300 mt-3 text-center">Tell us about your project and we'll get back within 24 hours.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input type="email" required placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <input placeholder="Company (optional)" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <textarea required rows={5} placeholder="Tell us about your goals, timeline, and budget" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <button disabled={status!=="idle"} className="mt-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition disabled:opacity-50">
            {status === "loading" ? "Sending..." : status === "success" ? "Thanks! We'll be in touch." : "Send request"}
          </button>
          <p className="text-center text-xs text-slate-400 mt-2">By submitting, you agree to our terms and privacy policy.</p>
        </form>
      </div>
    </section>
  );
}
