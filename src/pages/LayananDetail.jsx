import { useParams, Link, Navigate } from "react-router-dom";
import { layanan, rupiah } from "../data/layanan";

export default function LayananDetail() {
  const { slug } = useParams();
  const data = layanan[slug];

  if (!data) return <Navigate to="/" replace />;

  const waLink = `https://wa.me/6285659881470?text=${encodeURIComponent(
    `Halo VESPER Studio, saya mau booking Paket ${data.nama} (${data.tagline})`
  )}`;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 animate-fade-up">
      <Link to="/" className="text-sm text-ink-soft hover:text-maroon transition-colors">← Kembali</Link>

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 mt-6 items-start">
        <div className="rounded-2xl overflow-hidden shadow-lg sticky top-24 aspect-[4/5]">
          <img src={data.thumb} alt={data.nama} className="w-full h-full object-cover" />
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-maroon">{data.tagline}</span>
          <h1 className="font-display text-4xl mt-3 text-ink">Paket {data.nama}</h1>
          <p className="text-ink-soft mt-4 max-w-lg">{data.deskripsi}</p>

          <div className="flex items-baseline gap-3 mt-6 pb-6 border-b border-line">
            {data.hargaNormal && (
              <span className="text-ink-soft/60 line-through text-lg">{rupiah(data.hargaNormal)}</span>
            )}
            <span className="text-maroon font-display text-4xl">
              {!data.hargaNormal && <span className="text-base font-sans font-normal text-ink-soft mr-1.5">Mulai dari</span>}
              {rupiah(data.hargaPromo)}
            </span>
          </div>

          <h3 className="font-semibold text-ink mt-6 mb-3">Yang kamu dapat</h3>
          <ul className="space-y-2.5">
            {data.fasilitas.map((f, i) => (
              <li key={i} className="flex gap-2.5 text-ink-soft text-sm">
                <span className="text-maroon mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {data.addons?.length > 0 && (
            <>
              <h3 className="font-semibold text-ink mt-7 mb-3">Tambahan (opsional)</h3>
              <ul className="space-y-2">
                {data.addons.map((a, i) => (
                  <li key={i} className="flex justify-between text-sm text-ink-soft border-b border-dashed border-line pb-2">
                    <span>{a.label}</span>
                    <span className="font-medium text-ink">+{rupiah(a.harga)}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-deep text-cream font-semibold px-7 py-3.5 rounded-full transition-colors mt-8"
          >
            Booking Paket Ini
          </a>
        </div>
      </div>
    </section>
  );
}
