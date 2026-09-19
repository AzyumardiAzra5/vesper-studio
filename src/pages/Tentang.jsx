import ownerMain from "../assets/images/tentang/owner-02.jpg";
import ownerSecondary from "../assets/images/tentang/owner-01.jpg";

const nilai = [
  { title: "Ngobrol dulu, baru jepret", desc: "Tiap sesi dimulai dari ngerti apa yang kamu mau — bukan langsung eksekusi pose template." },
  { title: "Edit rapi, bukan berlebihan", desc: "Color grading dan retouch secukupnya, hasil akhir tetap kelihatan natural." },
  { title: "Harga jelas dari awal", desc: "Nggak ada biaya siluman — semua fasilitas & add-on tertulis sebelum kamu booking." },
  { title: "Cepat & fleksibel", desc: "Basis di Cirebon, siap jalan ke Kuningan dan sekitarnya sesuai jadwal kamu." },
];

export default function Tentang() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 animate-fade-up">
      <span className="font-mono text-xs uppercase tracking-widest text-maroon">Tentang</span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 text-ink max-w-2xl leading-tight">
        VESPER Studio — jasa foto yang niat sama tiap momen kecil.
      </h1>
      <p className="text-ink-soft mt-6 max-w-2xl text-lg">
        Kami mulai dari sesi portrait dan dokumentasi acara sederhana di sekitar Cirebon dan Kuningan.
        Fokusnya sederhana: bikin foto yang beneran kerasa personal, bukan cuma jepret cepat lalu selesai.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mt-14">
        <img src={ownerMain} alt="Founder VESPER Studio sedang memotret" className="rounded-2xl w-full aspect-[4/3] object-cover object-top shadow-md" />
        <img src={ownerSecondary} alt="Founder VESPER Studio bersama kamera" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-md mt-8" />
      </div>
      <p className="text-ink-soft/70 text-xs mt-3 text-center sm:text-left">Di balik lensa VESPER Studio.</p>

      <div className="mt-16">
        <h2 className="font-display text-2xl text-ink mb-8">Kenapa pilih VESPER Studio</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {nilai.map((n) => (
            <div key={n.title} className="border-l-2 border-maroon pl-5">
              <h3 className="font-semibold text-ink">{n.title}</h3>
              <p className="text-ink-soft text-sm mt-1.5">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-maroon-deep text-cream px-8 py-10 text-center">
        <h2 className="font-display text-2xl">Saat ini melayani Portrait, Wisuda & Event</h2>
        <p className="text-cream/75 mt-2 max-w-md mx-auto text-sm">
          Layanan UMKM, Branding, Social Media, dan Birthday menyusul — pantau terus halaman Layanan.
        </p>
      </div>
    </section>
  );
}
