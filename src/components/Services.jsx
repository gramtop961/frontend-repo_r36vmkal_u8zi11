import { Rocket, Palette, Smartphone, ChartBar } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Custom Websites",
    desc: "Tailored designs that reflect your brand and drive conversions.",
  },
  {
    icon: Palette,
    title: "Brand & UI",
    desc: "Clean, modern interfaces with memorable brand systems.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Fast",
    desc: "Mobile-first builds optimized for speed and accessibility.",
  },
  {
    icon: ChartBar,
    title: "SEO & Analytics",
    desc: "On‑page SEO, schema, and tracking to measure what matters.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="text-slate-300 max-w-2xl">From strategy to launch, we partner with you to build a site that looks great and performs even better.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900 transition group">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center shadow-lg shadow-blue-500/20 mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
