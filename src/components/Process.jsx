export default function Process() {
  const steps = [
    { no: 1, title: "Discover", desc: "We learn your goals, audience, and brand to shape a winning plan." },
    { no: 2, title: "Design", desc: "We craft clean, on‑brand visuals and UX that guide users to action." },
    { no: 3, title: "Build", desc: "We develop a fast, responsive site that's easy to manage." },
    { no: 4, title: "Launch", desc: "We deploy, set up analytics, and iterate based on real data." },
  ];

  return (
    <section id="process" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our process</h2>
          <p className="text-slate-300 max-w-2xl">Transparent steps from discovery to launch so you always know what's next.</p>
        </div>
        <ol className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <li key={s.no} className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
              <div className="text-blue-300 font-semibold">Step {s.no}</div>
              <h3 className="text-white font-semibold text-lg mt-1">{s.title}</h3>
              <p className="text-slate-300/90 mt-2">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
