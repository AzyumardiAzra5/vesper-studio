import { Link } from "react-router-dom";
import { layanan, rupiah } from "../data/layanan";

export default function LayananSection() {
  const items = Object.entries(layanan);

  return (
    <section id="layanan" className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-xl mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-maroon">Layanan</span>
        <h2 className="font-display text-3xl md:text-4xl mt-3 text-ink">Paket yang bisa langsung kamu pesan.</h2>
        <p className="text-ink-soft mt-3">Harga jelas dari awal, nggak ada biaya siluman. Lebih banyak kategori jasa menyusul.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(([slug, data], i) => (
          <Link
            key={slug}
            to={`/layanan/${slug}`}
            style={{ animationDelay: `${i * 90}ms` }}
            className="group rounded-2xl border border-line bg-paper hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={data.thumb}
                alt={data.nama}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl text-ink">{data.nama}</h3>
              <p className="text-ink-soft text-sm mt-1">{data.tagline}</p>
              <div className="flex items-baseline gap-2 mt-4">
                {data.hargaNormal && (
                  <span className="text-ink-soft/60 line-through text-sm">{rupiah(data.hargaNormal)}</span>
                )}
                <span className="text-maroon font-display text-2xl">
                  {!data.hargaNormal && <span className="text-xs font-sans font-normal text-ink-soft mr-1">mulai</span>}
                  {rupiah(data.hargaPromo)}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-maroon">
                Lihat paket
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
