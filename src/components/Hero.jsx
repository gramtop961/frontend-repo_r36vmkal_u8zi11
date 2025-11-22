import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToQuote = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-medium text-blue-300/80 tracking-wider uppercase">dbwebsites • modern web design</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Stunning websites that convert visitors into customers
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              We design and build fast, SEO-friendly websites for businesses that want results. From landing pages to full e‑commerce, we’ve got you covered.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToQuote} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition">
                Get a free quote <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#work" className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:text-white hover:border-white transition">
                See our work
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">50+</span> projects delivered
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">5.0</span> average rating
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">2‑week</span> average turnaround
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-3 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-slate-950 grid place-items-center text-slate-400">
                <div className="text-center px-6">
                  <div className="text-xs uppercase tracking-widest text-slate-400/60">sample layout</div>
                  <div className="mt-3 h-8 bg-slate-800/80 rounded w-3/4 mx-auto" />
                  <div className="mt-4 h-4 bg-slate-800/70 rounded w-full" />
                  <div className="mt-3 h-4 bg-slate-800/70 rounded w-5/6 mx-auto" />
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="h-20 bg-slate-800/70 rounded" />
                    <div className="h-20 bg-slate-800/70 rounded" />
                    <div className="h-20 bg-slate-800/70 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-blue-500 text-white px-4 py-2 text-sm shadow-xl">Responsive • SEO • Fast</div>
          </div>
        </div>
      </div>
    </section>
  );
}
