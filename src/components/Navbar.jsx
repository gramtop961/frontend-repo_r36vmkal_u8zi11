import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white font-bold shadow-lg shadow-blue-500/20">db</div>
          <span className="text-white font-semibold text-lg tracking-tight">dbwebsites</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <button className="hover:text-white transition" onClick={() => scrollTo("services")}>Services</button>
          <button className="hover:text-white transition" onClick={() => scrollTo("work")}>Work</button>
          <button className="hover:text-white transition" onClick={() => scrollTo("process")}>Process</button>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}} className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition">Get a Quote</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900">
          <div className="px-6 py-4 flex flex-col gap-3 text-slate-300">
            <button className="text-left py-2" onClick={() => scrollTo("services")}>Services</button>
            <button className="text-left py-2" onClick={() => scrollTo("work")}>Work</button>
            <button className="text-left py-2" onClick={() => scrollTo("process")}>Process</button>
            <button className="text-left py-2" onClick={() => scrollTo("contact")}>Get a Quote</button>
          </div>
        </div>
      )}
    </header>
  );
}
