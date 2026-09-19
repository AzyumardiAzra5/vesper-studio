// Data paket layanan VESPER Studio.
// slug dipakai di URL /layanan/:slug — jangan diubah tanpa update link terkait.
// Thumbnail (4:5) dipusatkan di sini biar Home & halaman detail selalu sinkron.

import thumbPotrait from "../assets/images/paket/potrait.jpg";
import thumbWisuda from "../assets/images/paket/wisuda.jpg";
import thumbEvent from "../assets/images/paket/event.jpg";

export const layanan = {
  potrait: {
    nama: "Portrait",
    tagline: "Personal Session",
    thumb: thumbPotrait,
    hargaNormal: null,
    hargaPromo: 150000,
    satuan: null,
    deskripsi:
      "Sesi foto personal buat kamu yang mau punya potret yang beneran ngegambarin diri sendiri — santai, terarah, hasilnya nggak pasaran.",
    fasilitas: [
      "1 orang",
      "Durasi maksimal 60 menit",
      "Maks. 1 lokasi",
      "8 foto pilihan",
      "Basic retouch + color grading",
      "1 foto dengan special editing",
      "File high resolution via Google Drive",
    ],
    addons: [],
  },
  wisuda: {
    nama: "Wisuda",
    tagline: "Starter Personal",
    thumb: thumbWisuda,
    hargaNormal: 500000,
    hargaPromo: 300000,
    satuan: null,
    deskripsi:
      "Dokumentasi momen wisuda kamu — dari foto formal sampai gaya cinematic, hasil rapi siap dibagikan hari itu juga.",
    fasilitas: [
      "Maksimal 1 subjek utama (wisudawan/wati)",
      "Durasi foto maks. 60 menit (area kampus/studio lokal)",
      "8 foto edit retouch & color grading (formal & cinematic)",
      "Ganti/edit background untuk 1 foto formal utama",
      "Pengiriman file via Google Drive (high resolution)",
    ],
    addons: [
      { label: "Tambah foto keluarga/orang tua", harga: 50000 },
      { label: "Tambah foto edit (per foto)", harga: 15000 },
    ],
  },
  event: {
    nama: "Event",
    tagline: "Event Coverage",
    thumb: thumbEvent,
    hargaNormal: 500000,
    hargaPromo: 250000,
    satuan: null,
    deskripsi:
      "Liputan dokumentasi acara — seminar, gathering, komunitas, sampai mini event. Foto formal panggung dan candid suasana, lengkap.",
    fasilitas: [
      "Liputan dokumentasi acara (seminar, gathering, komunitas, mini event)",
      "Durasi liputan maksimal 2 jam",
      "Cakupan foto formal (sambutan/panggung) & candid suasana",
      "20 foto edit pilihan (color grading & basic correction)",
      "Semua foto mentah (uncut) diberikan via Google Drive",
    ],
    addons: [{ label: "Lembur/overtime liputan (per jam)", harga: 100000 }],
  },
};

export const rupiah = (n) =>
  n.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
