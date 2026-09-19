// Data FAQ buat chatbot. Tambah/edit pertanyaan di sini — nggak perlu sentuh
// komponen ChatbotFAQ.jsx sama sekali kalau cuma mau ubah isi jawabannya.
//
// keywords: kata kunci yang dicocokkan dari ketikan pengunjung (huruf kecil semua).
// Satu pertanyaan bisa punya beberapa keyword biar gampang ke-detect.

export const faqList = [
  {
    id: "harga",
    question: "Berapa harga paketnya?",
    keywords: ["harga", "biaya", "tarif", "bayar", "price"],
    answer:
      "Harga mulai dari Rp150.000 (Portrait), Rp200.000 (Wisuda), dan Rp250.000 (Event). Detail lengkap tiap paket ada di halaman Layanan ya.",
    link: { label: "Lihat halaman Layanan", href: "/#layanan" },
  },
  {
    id: "lokasi",
    question: "Lokasi VESPER Studio di mana?",
    keywords: ["lokasi", "alamat", "dimana", "tempat", "kota"],
    answer:
      "Kami berbasis di Cirebon, dan melayani area Cirebon, Kuningan, dan sekitarnya.",
    link: { label: "Lihat halaman Contact", href: "/kontak" },
  },
  {
    id: "booking",
    question: "Gimana cara booking sesi foto?",
    keywords: ["booking", "pesan", "order", "cara", "reservasi", "jadwal"],
    answer:
      "Gampang — klik tombol \"Chat WhatsApp\" di halaman manapun, sebutin paket yang kamu mau dan tanggal yang kamu incar. Kami balas cepat kok.",
    link: { label: "Chat WhatsApp sekarang", href: "https://wa.me/6285659881470?text=Halo%20VESPER%20Studio%2C%20saya%20mau%20booking%20sesi%20foto", external: true },
  },
  {
    id: "durasi",
    question: "Berapa lama durasi sesi fotonya?",
    keywords: ["durasi", "lama", "waktu", "jam", "menit"],
    answer:
      "Tergantung paket — Portrait dan Wisuda maksimal 60 menit, Event maksimal 2 jam. Bisa ada tambahan waktu (overtime) dengan biaya tambahan.",
  },
  {
    id: "hasil",
    question: "Berapa lama hasil fotonya jadi?",
    keywords: ["hasil", "kapan jadi", "proses edit", "selesai"],
    answer:
      "Hasil edit dikirim via Google Drive. Untuk estimasi waktu pengerjaan pasti, tanyain langsung ke admin lewat WhatsApp ya — biasanya nggak lama kok.",
  },
  {
    id: "pembayaran",
    question: "Sistem pembayarannya gimana?",
    keywords: ["bayar", "dp", "transfer", "pembayaran", "cicil"],
    answer:
      "Untuk detail metode pembayaran dan DP, langsung tanyain ke admin via WhatsApp saat booking ya.",
    link: { label: "Chat WhatsApp", href: "https://wa.me/6285659881470", external: true },
  },
];

export const waFallbackLink =
  "https://wa.me/6285659881470?text=Halo%20VESPER%20Studio%2C%20saya%20mau%20tanya";
