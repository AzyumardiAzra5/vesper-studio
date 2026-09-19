import { testimonials } from "../data/testimonials";
import TestimoniForm from "./TestimoniForm";

export default function TestimoniSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <span className="font-mono text-xs uppercase tracking-widest text-maroon">
        Testimoni
      </span>
      <h2 className="font-display text-3xl md:text-4xl mt-3 text-ink">
        Kata mereka yang udah coba.
      </h2>

      {testimonials.length === 0 ? (
        <p className="text-ink-soft mt-4 max-w-md">
          Setiap sesi punya cerita sendiri. Ke depannya, bagian ini akan diisi
          oleh pengalaman mereka yang pernah mengabadikan momennya bersama
          VESPER.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5 mt-8 mb-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <div className="text-maroon text-sm mb-2">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-ink text-sm">&ldquo;{t.pesan}&rdquo;</p>
              <p className="text-ink-soft text-xs mt-3 font-medium">
                {t.nama} · {t.jasa}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 max-w-lg">
        <TestimoniForm />
      </div>
    </section>
  );
}
