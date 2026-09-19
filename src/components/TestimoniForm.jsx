import { useState } from "react";

// GANTI "YOUR_FORM_ID" di bawah dengan Form ID dari akun Formspree kamu sendiri
// (daftar gratis di formspree.io, bikin form baru, copy ID-nya dari endpoint yang dikasih).
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mppabodl";

export default function TestimoniForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;
    const data = new FormData(form);
    data.set("rating", rating);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setRating(5);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-maroon/30 bg-maroon/5 p-8 text-center">
        <p className="text-maroon font-semibold">
          Makasih udah berbagi cerita! 🎉
        </p>
        <p className="text-ink-soft text-sm mt-1">
          Testimoni kamu bakal ditinjau dulu sebelum tampil di halaman ini.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-paper p-6 sm:p-8 space-y-4"
    >
      <div>
        <label className="text-sm font-medium text-ink">Nama</label>
        <input
          name="nama"
          required
          className="w-full mt-1.5 rounded-lg border border-line bg-cream px-4 py-2.5 text-sm focus:outline-none focus:border-maroon"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-ink">
          Jasa yang dipakai
        </label>
        <select
          name="jasa"
          required
          className="w-full mt-1.5 rounded-lg border border-line bg-cream px-4 py-2.5 text-sm focus:outline-none focus:border-maroon"
        >
          <option value="">Pilih jasa</option>
          <option value="Portrait">Portrait</option>
          <option value="Wisuda">Wisuda</option>
          <option value="Event">Event</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-ink">Rating</label>
        <div className="flex gap-1 mt-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              className={`text-2xl leading-none ${n <= rating ? "text-maroon" : "text-line"}`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-ink">Cerita singkat</label>
        <textarea
          name="pesan"
          required
          rows={3}
          className="w-full mt-1.5 rounded-lg border border-line bg-cream px-4 py-2.5 text-sm focus:outline-none focus:border-maroon"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-maroon hover:bg-maroon-deep disabled:opacity-60 text-cream font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
      >
        {status === "loading" ? "Mengirim..." : "Kirim Testimoni"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-700">Gagal kirim, coba lagi ya.</p>
      )}
    </form>
  );
}
