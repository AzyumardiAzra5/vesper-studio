import logo from "../assets/images/logo-footer.png";

const services = [
  "Portrait",
  "Wisuda",
  "Event",
  "UMKM (Foto Produk)",
  "Branding",
  "Social Media",
  "Birthday",
];

export default function Footer() {
  return (
    <footer className="bg-maroon-deep text-cream mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img
            src={logo}
            alt="VESPER Studio"
            className="w-24 h-24 object-contain mb-4"
          />
          <div className="text-cream/70 text-sm max-w-xs space-y-2">
            <p>
              Jl. Pangeran Sutajaya, Gebang Kulon, Kec. Gebang, Kabupaten
              Cirebon, Jawa Barat
            </p>

            <p>
              Jl. Curug-Pesawahan, Sampih, Kec. Susukan Lb., Kabupaten Cirebon,
              Jawa Barat
            </p>

            <p>
              Jl. Pramuka, Purwawinangun, Kec. Kuningan, Kabupaten Kuningan,
              Jawa Barat
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-cream/80 mb-3">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm text-cream/70">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="text-cream/40">→</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-cream/80 mb-3">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <a
                href="https://wa.me/6285659881470?text=Halo%20VESPER%20Studio%2C%20saya%20mau%20tanya-tanya"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <span className="text-cream/40">→</span> WhatsApp:
                0856-5988-1470
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/vesperstudio.id"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <span className="text-cream/40">→</span> @vesperstudio.id
              </a>
            </li>
            <li>
              <a
                href="mailto:vesperstudio07@gmail.com"
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <span className="text-cream/40">→</span>{" "}
                vesperstudio07@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 text-center text-xs text-cream/50 py-5">
        © 2026 VESPER Studio.
      </div>
    </footer>
  );
}
