# VESPER Studio

Website resmi VESPER Studio — jasa foto Portrait, Wisuda, dan dokumentasi Event yang melayani area Cirebon, Kuningan, dan sekitarnya.

**Live site:** [vespercreativestudio.vercel.app](https://vespercreativestudio.vercel.app)

## Fitur

- Landing page dengan hero slider (auto-play + swipe)
- Halaman Layanan & paket harga per kategori jasa
- Portofolio dengan filter kategori dan lightbox
- Halaman About & Contact
- Form testimoni publik (terintegrasi Formspree, moderasi manual sebelum tampil)
- Fully responsive, dari mobile sampai desktop

## Tech Stack

- [Vite](https://vite.dev) — build tool
- [React](https://react.dev) — UI library
- [React Router](https://reactrouter.com) — routing
- [Tailwind CSS v4](https://tailwindcss.com) — styling

## Menjalankan di Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk Produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`.

## Struktur Folder

```
src/
├── assets/images/    # Semua foto, dikelompokkan per kategori
├── components/       # Navbar, Hero, Footer, dll — dipakai berulang
├── data/             # Data layanan & testimoni (bukan hardcode di komponen)
├── pages/            # Satu file per halaman/route
```

## Menambah Foto Portofolio

Taruh file JPG baru di folder kategori yang sesuai (`src/assets/images/portrait/`, `event/`, atau `wisuda/`). Halaman Portofolio otomatis mendeteksi file baru lewat `import.meta.glob` — tidak perlu edit kode.

## Deploy

Project ini deploy otomatis ke [Vercel](https://vercel.com) setiap kali ada push ke branch `main`.

---

Dibuat dan dikembangkan oleh [Ardiii](https://github.com/AzyumardiAzra5).
