import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Ambil semua foto portofolio otomatis dari folder assets — tinggal taruh file baru
// di folder yang sesuai, nggak perlu import manual satu-satu.
const modules = import.meta.glob("../assets/images/{portrait,event,wisuda}/*.jpg", { eager: true });

const allPhotos = Object.entries(modules)
  .map(([path, mod]) => {
    const category = path.includes("/portrait/") ? "portrait" : path.includes("/event/") ? "event" : "wisuda";
    return { src: mod.default, category, path };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

const categories = [
  { key: "semua", label: "Semua" },
  { key: "portrait", label: "Portrait" },
  { key: "event", label: "Event" },
  { key: "wisuda", label: "Wisuda" },
];

export default function Portofolio() {
  const { kategori } = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(kategori && categories.some(c => c.key === kategori) ? kategori : "semua");
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (kategori && categories.some(c => c.key === kategori)) setActive(kategori);
  }, [kategori]);

  const filtered = useMemo(
    () => (active === "semua" ? allPhotos : allPhotos.filter((p) => p.category === active)),
    [active]
  );

  const selectCategory = (key) => {
    setActive(key);
    navigate(key === "semua" ? "/portofolio" : `/portofolio/${key}`);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 animate-fade-up">
      <span className="font-mono text-xs uppercase tracking-widest text-maroon">Portofolio</span>
      <h1 className="font-display text-4xl mt-3 text-ink">Hasil jepretan, bukan katalog stok.</h1>
      <p className="text-ink-soft mt-3 max-w-lg">
        Diambil langsung dari sesi klien VESPER Studio — belum termasuk UMKM, Branding, Social Media, dan Birthday (segera nyusul).
      </p>

      <div className="flex flex-wrap gap-2 mt-8">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => selectCategory(c.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === c.key
                ? "bg-maroon text-cream border-maroon"
                : "border-line text-ink-soft hover:border-maroon hover:text-maroon"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-4 mt-8 [column-fill:_balance]">
        {filtered.map((p, i) => (
          <button
            key={p.path}
            onClick={() => setLightbox(p.src)}
            className="mb-4 block w-full break-inside-avoid rounded-xl overflow-hidden border border-line group"
          >
            <img
              src={p.src}
              alt={`Portofolio ${p.category} ${i + 1}`}
              loading="lazy"
              className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-ink/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img src={lightbox} alt="Preview" className="max-h-[90vh] max-w-full rounded-lg shadow-2xl" />
        </div>
      )}
    </section>
  );
}
