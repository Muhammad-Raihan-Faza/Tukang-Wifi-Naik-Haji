# Tukang WiFi Naik Haji — V7.3

Game media pembelajaran jaringan komputer untuk pengenalan perangkat dan koneksi jaringan. Satu perjalanan dengan **16 misi yang diacak**, masing-masing 4 kegiatan Visual, Auditory, Read/Write, dan Kinesthetic (label kategori disembunyikan ketika siswa bermain).

## Perubahan V7.3

- **Soal gambar tidak memperlihatkan nama perangkat** di bawah ilustrasi. Siswa hanya melihat tiga gambar bernomor. Kunci dijelaskan setelah jawaban dikirim.
- Modal soal, panel upah, dan tombol direvisi agar teks tidak meluber dari emblem atau keluar panel.
- Hasil akhir memperlihatkan kategori aktivitas paling menonjol serta **persentase jawaban benar pada tiap kategori**.
- Jika beberapa kategori berbagi skor tertinggi, laporan menampilkan kategori seimbang. Jika skor semuanya nol, tidak dipaksakan ada kategori dominan.
- Kartu hasil dengan desain lebih kaya dan berlapis bisa diunduh PNG/JPG; file unduhan memuat nama siswa, persentase, grafik, dan tabungan haji simulasi.
- Maskot kartun, 16 misi, 4 kawasan, audio, dan kontrol HP tetap dipertahankan.

## Menjalankan di Windows

1. Ekstrak file ZIP.
2. Buka folder `Tukang_WiFi_Naik_Haji_V7_3_Kartu_Hasil`.
3. Klik dua kali `START_WINDOWS.bat`, atau jalankan `npm run dev` di VS Code.
4. Buka alamat lokal yang ditampilkan (umumnya `http://localhost:3000`).

Tidak perlu `npm install`; proyek tidak menggunakan dependensi npm eksternal. Node.js diperlukan untuk server pengembangan dan build.

## Upload GitHub Desktop dan Vercel

1. Buat repository kosong lewat GitHub Web dan clone dengan GitHub Desktop.
2. Salin **isi folder proyek** ini ke root folder hasil clone, bukan ZIP utuh.
3. Commit dan **Push origin** lewat GitHub Desktop.
4. Di Vercel pilih Framework Preset `Other`, Build Command `npm run build`, Output Directory `dist`, Root Directory `./`.

Konfigurasi `vercel.json` sudah disertakan. Folder `dist` otomatis dibuat saat proses build dan tidak perlu dimasukkan ke GitHub.

## Cara bermain

- Laptop: panah kiri/kanan atau `A`/`D` untuk bergerak, `Spasi` untuk melompat.
- HP: tombol sentuh muncul saat permainan berlangsung.
- Kunjungi pos warga untuk menjawab satu tantangan; jawaban salah tetap boleh lanjut.
- Game memberikan umpan balik dan upah simulasi. Progres disimpan di browser.
- Backsound mulai diputar setelah interaksi pemain (mengikuti kebijakan browser).

## Interpretasi persentase VARK

Setiap kategori memiliki **4 soal**. Nilai kategori = (jumlah jawaban benar pada kategori / 4) × 100%, sehingga mungkin bernilai 0%, 25%, 50%, 75%, atau 100%. Kategori dengan skor tertinggi ditampilkan sebagai aktivitas paling menonjol. Jika seri, semua kategori yang seri disebutkan.

Persentase tersebut adalah **performa berdasarkan aktivitas dalam game**, bukan instrumen diagnostik untuk menentukan gaya belajar bawaan atau tetap siswa.

## Isi file

- `index.html` — halaman dan menu
- `src/app.js` — gameplay, 16 misi, suara, VARK dan ekspor kartu hasil
- `styles.css`, `styles-v4.css`, `styles-v6.css`, `styles-v7-2.css`, `styles-v7-3.css` — UI
- `assets/` — karakter, gambar soal, latar kawasan, MP3 simulasi, backsound
- `tools/` — server lokal, build, pemeriksaan statis
- `vercel.json` — hosting Vercel

## Pengujian

Pemeriksaan otomatis: `npm test` dan `npm run build`. Pengujian browser dilakukan pada laptop dan beberapa ukuran HP, mencakup 16 jenis soal, hasil dominan tunggal/seri/nol, serta unduhan PNG/JPG. Tetap uji pada perangkat siswa sebelum kegiatan penilaian ahli media.
