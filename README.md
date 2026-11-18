# Tukang WiFi Naik Haji — V8.3 (Aset Pesawat dan Ka’bah Baru)

Pembaruan dari V8.2:
- Pesawat lama berbentuk ikon/CSS diganti menjadi **gambar pesawat biru-emas** yang telah dibuat khusus untuk game.
- Ilustrasi Ka’bah kecil lama diganti menjadi **aset Ka’bah baru**; scene kedatangan juga menggunakan aset ini.
- Animasi pesawat ditata ulang; ukuran dan posisi objek dioptimalkan untuk laptop dan HP.
- Source code, 16 soal, sistem VARK, audio, tabungan, dan konfigurasi Vercel tetap tersedia.

**Cara menjalankan:** ekstrak ZIP, lalu klik `START_WINDOWS.bat` di Windows atau jalankan `npm run dev` pada folder proyek. Tidak perlu memasang dependensi tambahan. Untuk Vercel, build command adalah `npm run build` dan output folder `dist`.

Aset baru: `assets/ending-airplane.webp` dan `assets/ending-kaaba.webp` (keduanya transparan).

---

# Tukang WiFi Naik Haji — V8.2

Perbaikan tambahan dari V8.1:

- menghilangkan strip kosong di sisi kanan scene akhir
- memperhalus scene keberangkatan
- mengganti ilustrasi pesawat menjadi lebih rapi
- mempercantik ikon/ilustrasi Ka'bah di scene perjalanan
- siap dibuild di Vercel (`npm run build`)

Jalankan lokal:

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
```
