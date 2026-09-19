// Testimoni yang SUDAH di-approve tampil di sini secara manual.
// Alur: pengunjung isi form -> masuk email kamu via Formspree -> kamu tinjau ->
// kalau oke, tambahin objeknya ke array ini -> redeploy (push ke GitHub, Vercel auto-update).
// Sengaja begini (bukan otomatis tampil) biar nggak ada testimoni spam/palsu nongol di web.

export const testimonials = [
  // Contoh format kalau nanti mau nambah:
  // { nama: "Nadia", jasa: "Wisuda", rating: 5, pesan: "Hasilnya bagus banget, prosesnya juga cepat!" },
];
