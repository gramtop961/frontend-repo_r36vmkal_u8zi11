export default function Work() {
  const items = [
    { title: "SaaS Landing", tag: "Marketing", color: "from-violet-500 to-fuchsia-500" },
    { title: "Local Services", tag: "SEO", color: "from-blue-500 to-cyan-400" },
    { title: "E‑commerce", tag: "Shop", color: "from-emerald-500 to-teal-400" },
    { title: "Portfolio", tag: "Creative", color: "from-amber-500 to-orange-400" },
    { title: "Booking Site", tag: "SMB", color: "from-rose-500 to-pink-500" },
    { title: "Corporate", tag: "Enterprise", color: "from-slate-500 to-slate-300" },
  ];

  return (
    <section id="work" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Recent work</h2>
          <p className="text-slate-300 max-w-2xl">A taste of styles and layouts we can tailor to your brand and goals.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group relative rounded-xl overflow-hidden border border-white/10 bg-slate-900/40">
              <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} opacity-80`} />
              <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-slate-950/10">
                <span className="text-xs uppercase tracking-widest text-slate-300/80">{item.tag}</span>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
