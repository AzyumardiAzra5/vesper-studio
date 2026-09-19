import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import heroPortrait from "../assets/images/hero-slider/hero-portrait.jpg";
import heroEvent from "../assets/images/hero-slider/hero-event.jpg";
import heroGraduation from "../assets/images/hero-slider/hero-graduation.jpg";

const slides = [
  { src: heroPortrait, alt: "Portofolio sesi portrait VESPER Studio" },
  { src: heroEvent, alt: "Portofolio dokumentasi event VESPER Studio" },
  { src: heroGraduation, alt: "Portofolio sesi wisuda/graduation VESPER Studio" },
];

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const waLink = "https://wa.me/6285659881470?text=Halo%20VESPER%20Studio%2C%20saya%20mau%20booking%20sesi%20foto";

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-16">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-maroon">
          <span className="w-6 h-px bg-maroon"></span>
          Cirebon, Kuningan & Sekitarnya
        </span>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mt-5 text-ink max-w-2xl">
          Momen kamu, <span className="italic text-maroon">diabadikan</span> dengan niat.
        </h1>
        <p className="text-ink-soft text-lg mt-6 max-w-md">
          Portrait, wisuda, dan dokumentasi acara — bukan sekadar mengambil gambar, tapi menangkap cerita, suasana, dan momen yang berarti buat kamu.
        </p>
        <div className="flex flex-wrap gap-4 mt-9">
          <a href={waLink} target="_blank" rel="noopener"
            className="bg-maroon hover:bg-maroon-deep active:scale-95 text-cream font-semibold px-7 py-3.5 rounded-full transition-all duration-200">
            Booking Sesi
          </a>
          <Link to="/portofolio"
            className="border border-ink/20 hover:border-maroon hover:text-maroon active:scale-95 text-ink font-semibold px-7 py-3.5 rounded-full transition-all duration-200">
            Lihat Galeri
          </Link>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative w-full aspect-[16/7] sm:aspect-[21/9] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradient edges for nicer blend into page bg */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper/40 via-transparent to-transparent" />

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Slide sebelumnya"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-paper/80 hover:bg-paper text-ink flex items-center justify-center shadow-md transition-transform hover:scale-110 active:scale-95"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Slide berikutnya"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-paper/80 hover:bg-paper text-ink flex items-center justify-center shadow-md transition-transform hover:scale-110 active:scale-95"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ke slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-maroon" : "w-1.5 bg-paper/70 hover:bg-paper"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
