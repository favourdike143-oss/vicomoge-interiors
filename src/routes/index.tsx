import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, LayoutGrid, Wallpaper, BedDouble, GraduationCap,
  Briefcase, Home, Blinds, ChefHat, Palette, Scissors, Crown,
  CheckCircle2, Eye, Wrench, Smile, Hammer, Phone, Mail, MapPin,
  MessageCircle, Quote, Instagram, Facebook, Star, Target, Compass, Heart, Award,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Particles } from "@/components/site/Particles";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import logo from "@/assets/logo.jpg";
import hero from "@/assets/interior-2.jpg";
import founder from "@/assets/founder.jpg";
import i1 from "@/assets/interior-1.jpg";
import i3 from "@/assets/interior-3.jpg";
import i4 from "@/assets/interior-4.jpg";
import i5 from "@/assets/interior-5.jpg";
import i6 from "@/assets/interior-6.jpg";
import i7 from "@/assets/interior-7.jpg";
import i8 from "@/assets/interior-8.jpg";
import i9 from "@/assets/interior-9.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "2347035497116";

const services = [
  { icon: LayoutGrid, title: "Spacing and Planning", desc: "Functional layouts engineered around how you live and work." },
  { icon: Wallpaper, title: "Wallpaper Installations", desc: "Hand-selected textures and finishes for statement walls." },
  { icon: BedDouble, title: "Luxury Beddings", desc: "Hotel-grade comfort tailored to your sanctuary." },
  { icon: GraduationCap, title: "School Decor", desc: "Inspiring learning spaces that nurture creativity." },
  { icon: Briefcase, title: "Office Decor", desc: "Productive interiors that command authority." },
  { icon: Home, title: "Residential Decor", desc: "Homes that reflect your story in every detail." },
  { icon: Blinds, title: "Window Blinds", desc: "Tailored light control with refined materials." },
  { icon: ChefHat, title: "Kitchen Decor", desc: "Culinary spaces of precision and beauty." },
  { icon: Palette, title: "Interior Placements", desc: "Curated objects, art and styling that finish a room." },
  { icon: Scissors, title: "Custom Interior Styling", desc: "Bespoke direction for one-of-a-kind interiors." },
];

const projects = [
  { src: i1, title: "Modern Lounge", category: "Residential" },
  { src: i3, title: "Chef's Kitchen", category: "Kitchen" },
  { src: i4, title: "Executive Office", category: "Office" },
  { src: i5, title: "Reading Suite", category: "Decor Styling" },
  { src: i6, title: "Cinematic Living", category: "Residential" },
  { src: i7, title: "Heritage Dining", category: "Decor Styling" },
  { src: i8, title: "Soft Neutral Lounge", category: "Residential" },
  { src: i9, title: "Luxury Sitting Room", category: "Residential" },
  { src: hero, title: "Royal Suite", category: "Residential" },
];

const filters = ["All", "Residential", "Office", "School", "Kitchen", "Decor Styling"];

const why = [
  { icon: Crown, title: "Luxury Finishing", desc: "No corner left unrefined — exquisite materials throughout." },
  { icon: Eye, title: "Attention To Detail", desc: "Millimetric precision across every surface and seam." },
  { icon: Sparkles, title: "Modern Design Concepts", desc: "Forward-thinking, timeless aesthetics." },
  { icon: Wrench, title: "Professional Installation", desc: "Master craftsmen handle every element on-site." },
  { icon: Smile, title: "Client Satisfaction", desc: "A signature experience from concept to delivery." },
  { icon: Hammer, title: "Functional & Stylish", desc: "Spaces that perform as beautifully as they look." },
];

const testimonials = [
  { name: "Adaeze O.", role: "Abuja Homeowner", quote: "Vicomoge turned our home into a five-star retreat. Pure artistry, flawless execution." },
  { name: "Chinedu E.", role: "CEO, Bridgepoint Ltd", quote: "Our office now commands the room before we say a word. Worth every naira." },
  { name: "Mrs. Bello", role: "School Director", quote: "The transformation was breathtaking. Children walk in inspired every morning." },
  { name: "Tunde A.", role: "Property Developer", quote: "Premium taste and seamless project management. They are my only call now." },
  { name: "Happy Client", role: "Homeowner", quote: "I'm honestly super impressed with the transformation done by Vicomogeinteriors. From the color combinations to the finishing and attention to detail, everything came out elegant, modern, and luxurious. They understood exactly the kind of space I wanted and brought the vision to life beautifully. The professionalism, creativity, and quality of work were top-notch. If you're looking for classy and unique interior designs that truly stand out, I highly recommend Vicomogeinteriors. Thank you for making my space feel like a dream home!" },
];

function Index() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-white">
      <Loader />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <LeadForm />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 animate-glow-pulse rounded-full bg-[--gold]/40 blur-2xl" />
            <img src={logo} alt="Vicomoge" className="h-28 w-28 rounded-full object-cover ring-2 ring-[--gold]/60" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 mix-blend-screen blur-3xl transition-transform duration-200 ease-out hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, rgba(212,166,79,0.25), transparent 60%)",
      }}
    />
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88vh] md:min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Luxury interior" className="h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
      </div>
      <Particles count={36} />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 animate-glow-pulse rounded-full bg-[--gold]/20 blur-3xl" />
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] animate-glow-pulse rounded-full bg-[--gold]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-28 md:px-10 md:pt-32 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="eyebrow mb-6"
        >
          <span className="text-gold-shimmer">Vicomoge</span> · Interior Designers
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]"
        >
          <span className="text-white/90">Luxury Interior</span>{" "}
          <span className="text-gold-shimmer">Spaces</span>{" "}
          <span className="text-white/90">Crafted</span>{" "}
          <br className="hidden md:block" />
          <span className="text-white/90">With </span>
          <span className="italic text-gold-shimmer">Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          Transforming homes, offices, schools, and commercial spaces into
          timeless masterpieces — where every detail whispers refinement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#lead" className="btn-gold">
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#projects" className="btn-outline-gold">View Projects</a>
        </motion.div>

      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[--gold]/60"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.6rem] uppercase tracking-[0.4em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-[--gold] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, accent, sub }: { eyebrow: string; title: string; accent?: string; sub?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-6xl">
        <span className="text-white">{title} </span>
        {accent && <span className="italic text-gold-shimmer">{accent}</span>}
      </h2>
      {sub && <p className="mx-auto mt-5 max-w-2xl text-white/65">{sub}</p>}
      <div className="mx-auto mt-7 h-px w-32 divider-gold" />
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="absolute inset-0 gradient-radial-gold opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
        <div>
          <p className="eyebrow mb-4">About the House of Vicomoge</p>
          <Reveal>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              <span className="text-white">A Nigerian atelier of </span>
              <span className="italic text-gold-shimmer">timeless interiors</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-white/70 leading-relaxed">
              Vicomoge Interior Designers is a luxury studio dedicated to crafting
              spaces that are equal parts elegance, function, and emotion. Born from a love
              for refined detail, our work fuses contemporary sophistication with the warmth
              of African hospitality.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-white/65 leading-relaxed">
              From private residences to executive offices and curated commercial
              environments, every project is approached as a one-of-a-kind composition —
              tailored materials, bespoke lighting, and considered placements that elevate
              everyday living into a signature experience.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {[
                { n: 250, l: "Completed Projects" },
                { n: 180, l: "Happy Clients" },
                { n: 15, l: "Years Experience" },
              ].map((s) => (
                <div key={s.l} className="border border-[--gold]/20 bg-black/30 p-5 text-center">
                  <Counter to={s.n} />
                  <div className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-white/60">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <a href="#lead" className="btn-gold mt-10 inline-flex">Begin Your Project <ArrowRight className="h-4 w-4" /></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, delay }: { icon: typeof Crown; title: string; desc: string; delay: number }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  return (
    <Reveal delay={delay}>
      <div className="card-gold group relative overflow-hidden p-7 h-full" onMouseMove={onMove}>
        <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-sm border border-[--gold]/40 bg-black/40 text-[--gold] transition-all duration-500 group-hover:bg-[--gold] group-hover:text-black group-hover:gold-glow-strong">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl text-white group-hover:text-gold-shimmer transition-colors">{title}</h3>
        <p className="mt-3 text-sm text-white/65 leading-relaxed">{desc}</p>
        <div className="mt-6 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-[--gold]/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
          Learn More <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Our Services" title="A complete language of" accent="luxury living" sub="From the architecture of a room to the last decorative gesture, we orchestrate every detail of your space." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:mt-14">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<typeof projects[number] | null>(null);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px divider-gold" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Selected Works" title="Spaces we've" accent="brought to life" />

        <Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10 md:gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[0.7rem] uppercase tracking-[0.25em] px-5 py-2.5 border transition-all duration-300 ${
                  filter === f
                    ? "border-[--gold] bg-[--gold] text-black gold-glow"
                    : "border-[--gold]/30 text-white/70 hover:border-[--gold] hover:text-[--gold]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
          {filtered.map((p, i) => (
            <Reveal key={p.title + i} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setLightbox(p)}
                className="group relative block w-full overflow-hidden border border-[--gold]/15"
                style={{ aspectRatio: i % 5 === 0 ? "3/4" : "4/5" }}
              >
                <img src={p.src} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[--gold]/0 transition-all duration-500 group-hover:bg-[--gold]/15" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                  <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[--gold]">{p.category}</div>
                  <h3 className="mt-1 font-display text-2xl text-white">{p.title}</h3>
                </div>
                <div className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center border border-[--gold] bg-black/50 text-[--gold] opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <Eye className="h-4 w-4" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-h-[88vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="max-h-[88vh] w-auto object-contain ring-1 ring-[--gold]/40" />
              <div className="mt-4 text-center">
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[--gold]">{lightbox.category}</div>
                <div className="font-display text-2xl text-white mt-1">{lightbox.title}</div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 inline-flex h-10 w-10 items-center justify-center border border-[--gold] bg-black text-[--gold] hover:bg-[--gold] hover:text-black"
                aria-label="Close"
              >✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative py-16 md:py-24">
      <div className="absolute inset-0">
        <img src={i9} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]" />
      </div>
      <Particles count={20} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Why Choose Us" title="The Vicomoge" accent="signature" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <div className="card-gold group flex h-full items-start gap-5 p-7">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[--gold]/40 text-[--gold] transition-all duration-500 group-hover:bg-[--gold] group-hover:text-black">
                  <w.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="testimonials" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading eyebrow="Client Voices" title="Words from those" accent="we've welcomed home" />
        <div className="relative mt-10 min-h-[280px] md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative mx-auto max-w-3xl p-10 md:p-14 text-center"
            >
              <Quote className="pointer-events-none absolute left-8 top-8 h-14 w-14 rotate-180 text-[--gold]/20" />
              <Quote className="pointer-events-none absolute right-8 bottom-8 h-14 w-14 text-[--gold]/20" />
              <div className="flex justify-center gap-1 text-[--gold]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 font-display text-xl md:text-2xl italic leading-relaxed text-white/90">
                "{testimonials[idx].quote}"
              </p>
              <div className="mt-7">
                <div className="text-gold-shimmer font-medium">{testimonials[idx].name}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/50 mt-1">{testimonials[idx].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 transition-all duration-500 ${i === idx ? "w-10 bg-[--gold]" : "w-4 bg-[--gold]/30"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [data, setData] = useState({
    name: "", phone: "", email: "", service: "Residential Decor", location: "", message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!data.name.trim() || !data.phone.trim()) return;
    const text = `Hello Vicomoge Interior Designers, my name is ${data.name}. I am interested in your ${data.service} service located at ${data.location || "—"}.%0A%0APhone: ${data.phone}%0AEmail: ${data.email}%0A%0A${data.message ? "Message: " + encodeURIComponent(data.message) : ""}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  return (
    <section id="lead" className="relative py-16 md:py-24">
      <div className="absolute inset-0 gradient-radial-gold" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow="Book A Consultation" title="Begin your" accent="signature project" sub="Share a few details — we'll continue the conversation on WhatsApp within minutes." />
        <Reveal>
          <form onSubmit={onSubmit} className="glass mt-10 grid gap-5 p-6 sm:p-8 md:mt-12 md:p-12 md:grid-cols-2">
            <Field label="Full Name" required>
              <input value={data.name} onChange={set("name")} required maxLength={100} className="input-gold" placeholder="Your name" />
            </Field>
            <Field label="Phone Number" required>
              <input value={data.phone} onChange={set("phone")} required maxLength={20} className="input-gold" placeholder="08012345678" />
            </Field>
            <Field label="Email">
              <input type="email" value={data.email} onChange={set("email")} maxLength={120} className="input-gold" placeholder="you@email.com" />
            </Field>
            <Field label="Type of Service">
              <select value={data.service} onChange={set("service")} className="input-gold">
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </Field>
            <Field label="Project Location" className="md:col-span-2">
              <input value={data.location} onChange={set("location")} maxLength={140} className="input-gold" placeholder="City, State" />
            </Field>
            <Field label="Message" className="md:col-span-2">
              <textarea value={data.message} onChange={set("message")} maxLength={1000} rows={4} className="input-gold resize-none" placeholder="Tell us about your space and vision..." />
            </Field>
            <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-white/50">By submitting, you'll be redirected to WhatsApp with your details prefilled.</p>
              <button type="submit" className="btn-gold">
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
            </div>
          </form>
        </Reveal>
      </div>
      <style>{`
        .input-gold {
          width: 100%;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(212,166,79,0.25);
          color: #fff;
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border-radius: 2px;
          outline: none;
        }
        .input-gold:focus {
          border-color: #D4A64F;
          box-shadow: 0 0 0 3px rgba(212,166,79,0.15);
          background: rgba(0,0,0,0.6);
        }
        .input-gold::placeholder { color: rgba(255,255,255,0.35); }
        select.input-gold option { background: #121212; color: #fff; }
      `}</style>
    </section>
  );
}

function Field({ label, required, children, className }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.3em] text-[--gold]/80">
        {label} {required && <span className="text-[--gold]">*</span>}
      </span>
      {children}
    </label>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Visit Us" title="Let's create" accent="something exquisite" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3 md:mt-14">
          {[
            { icon: Phone, label: "Call", value: "0703 549 7116", href: "tel:+2347035497116" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat Instantly", href: `https://wa.me/${WHATSAPP}` },
            { icon: Mail, label: "Email", value: "Vicomogeinterior@gmail.com", href: "mailto:Vicomogeinterior@gmail.com" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-gold group flex items-center gap-5 p-7">
                <div className="inline-flex h-14 w-14 items-center justify-center border border-[--gold]/40 text-[--gold] transition-all duration-500 group-hover:bg-[--gold] group-hover:text-black group-hover:gold-glow">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[--gold]/70">{c.label}</div>
                  <div className="font-display text-xl text-white mt-1">{c.value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 overflow-hidden border border-[--gold]/20">
            <iframe
              title="Vicomoge Location"
              src="https://www.google.com/maps?q=Abuja,Nigeria&output=embed"
              className="h-[420px] w-full grayscale-[60%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4 text-[--gold]" /> Abuja, Nigeria · By appointment
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[--gold]/15 bg-black/60 pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px divider-gold" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vicomoge" className="h-12 w-12 rounded-full ring-1 ring-[--gold]/40" />
              <div>
                <div className="font-display text-xl text-gold-shimmer">Vicomoge</div>
                <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[--gold]/70">Interior Designers</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/55 leading-relaxed">
              A Nigerian luxury interior atelier crafting refined, timeless spaces for those who notice the details.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-white/65">
              {["Home","About","Services","Projects","Testimonials","Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-[--gold]">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Reach</div>
            <ul className="space-y-2 text-sm text-white/65">
              <li>0703 549 7116</li>
              <li>Vicomogeinterior@gmail.com</li>
              <li>Abuja, Nigeria</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Follow</div>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="inline-flex h-10 w-10 items-center justify-center border border-[--gold]/30 text-[--gold] transition hover:bg-[--gold] hover:text-black">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 divider-gold" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/40 md:flex-row">
          <div>© {new Date().getFullYear()} Vicomoge Interior Designers. All rights reserved.</div>
          <div>Crafted with elegance.</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[--gold] text-black gold-glow-strong transition hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[--gold]/40" />
    </a>
  );
}
