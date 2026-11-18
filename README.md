# Tukang WiFi Naik Haji — V7.9

Game media pembelajaran jaringan komputer untuk pengenalan perangkat dan koneksi jaringan. Satu perjalanan dengan **16 misi yang diacak**, masing-masing 4 kegiatan Visual, Auditory, Read/Write, dan Kinesthetic (label kategori disembunyikan ketika siswa bermain).

## Pembaruan V7.9 — Responsif HP diperbaiki

- Memperbaiki input nama pada beranda yang sebelumnya menyempit dan tampak terpotong di layar HP.
- Tombol Mulai bermain berukuran penuh di bawah kolom nama pada ponsel; ukuran font input mencegah zoom otomatis iOS.
- Header, panel skor, dan tombol kendali tetap berada dalam lebar layar ponsel.
- 16 popup soal, petunjuk, pilihan jawaban, praktik, serta feedback dibuat bisa digulir secara internal ketika HP terlalu pendek.
- Menambahkan petunjuk gulir yang muncul hanya ketika bagian jawaban masih di bawah layar.
- Halaman hasil VARK dan scene penutup Ka'bah disesuaikan pada layar portrait, lanskap, dan ponsel kecil.
- Perbaikan bersifat tampilan; bank soal, nilai VARK, tabungan Rp100 juta, musik, dan aset logo V7.8 tetap dipertahankan.

## Pembaruan V7.8 — Identitas logo baru

- Logo horizontal “Tukang WiFi Naik Haji” dari aset terbaru menjadi identitas utama pada beranda.
- Emblem kompak mengganti ikon WiFi generik di navbar serta digunakan pada header soal, popup feedback, epilog Ka’bah, dan kartu hasil.
- Ikon tab browser/favicon diperbarui dengan emblem yang sama.
- Kartu hasil PNG/JPG juga memasukkan emblem saat file logo sudah dimuat di browser.
- Beranda dipusatkan pada logo resmi, dengan form nama dan tombol bermain yang tetap mudah digunakan pada laptop/HP.
- Logo hasil optimasi WebP berada di `assets/brand-logo.webp` dan `assets/brand-badge-small.webp`; sumber resolusi penuh ada di `assets/branding-source/`.
- Gameplay, suara, 16 misi, target uang Rp100 juta, skor VARK, dan adegan penutup tetap sama seperti V7.7.

## Perubahan V7.6

- **Popup hasil jawaban** yang jelas untuk jawaban benar maupun salah, lengkap dengan penjelasan, nominal upah, progres tabungan, dan tombol **Lanjutkan perjalanan**. Popup tidak lagi lenyap secara otomatis.
- **Tabungan haji maksimal Rp100.000.000 (simulasi permainan):** 16 × Rp5.000.000 upah dasar = Rp80 juta; 16 × Rp1.000.000 bonus jawaban benar = Rp16 juta; 16 × Rp250.000 koin = Rp4 juta. Total maksimal Rp100 juta.
- **Adegan penutup di depan Ka'bah:** setelah seluruh 16 pekerjaan selesai dan teknisi melewati gerbang akhir, tampil scene ilustrasi Ka'bah dengan karakter kartun beranimasi, musik kemenangan, dan tombol menuju nilai VARK. Bisa diputar ulang dari kartu hasil.
- **Perangkat dan soal** tetap menggunakan ilustrasi tanpa caption jawaban di soal gambar. Jawaban benar dijelaskan setelah dipilih.
- **Skor VARK** tetap didasarkan pada 4 tugas setiap kategori; dominan dan persentasenya tampil dalam kartu hasil PNG/JPG.
- **Responsif laptop/HP**, termasuk popup dan epilog; pengujian tetap disarankan di perangkat yang digunakan siswa.
- Semua angka tabungan, perjalanan ke Ka'bah, dan capaian cerita merupakan **simulasi game**, bukan perkiraan biaya haji dunia nyata.

## Perubahan sebelumnya

- **Soal gambar tidak memperlihatkan nama perangkat** di bawah ilustrasi. Siswa hanya melihat tiga gambar bernomor. Kunci dijelaskan setelah jawaban dikirim.
- Modal soal, panel upah, dan tombol direvisi agar teks tidak meluber dari emblem atau keluar panel.
- Hasil akhir memperlihatkan kategori aktivitas paling menonjol serta **persentase jawaban benar pada tiap kategori**.
- Jika beberapa kategori berbagi skor tertinggi, laporan menampilkan kategori seimbang. Jika skor semuanya nol, tidak dipaksakan ada kategori dominan.
- Kartu hasil dengan desain lebih kaya dan berlapis bisa diunduh PNG/JPG; file unduhan memuat nama siswa, persentase, grafik, dan tabungan haji simulasi.
- Maskot kartun, 16 misi, 4 kawasan, audio, dan kontrol HP tetap dipertahankan.

## Menjalankan di Windows

1. Ekstrak file ZIP.
2. Buka folder `Tukang_WiFi_Naik_Haji_V7_9_Responsive_HP`.
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
- Game menampilkan popup benar/salah serta upah simulasi. Klik **Lanjutkan perjalanan** untuk menyelesaikan popup. Progres disimpan di browser.
- Backsound mulai diputar setelah interaksi pemain (mengikuti kebijakan browser).

## Interpretasi persentase VARK

Setiap kategori memiliki **4 soal**. Nilai kategori = (jumlah jawaban benar pada kategori / 4) × 100%, sehingga mungkin bernilai 0%, 25%, 50%, 75%, atau 100%. Kategori dengan skor tertinggi ditampilkan sebagai aktivitas paling menonjol. Jika seri, semua kategori yang seri disebutkan.

Persentase tersebut adalah **performa berdasarkan aktivitas dalam game**, bukan instrumen diagnostik untuk menentukan gaya belajar bawaan atau tetap siswa.

## Isi file

- `index.html` — halaman dan menu
- `src/app.js` — gameplay, 16 misi, suara, VARK dan ekspor kartu hasil
- `styles.css` dan `styles-v*.css` — UI permainan, popup, logo, serta adegan penutup
- `assets/` — logo baru, karakter, gambar soal, latar kawasan, ilustrasi Ka'bah, MP3 simulasi, backsound
- `tools/` — server lokal, build, pemeriksaan statis
- `vercel.json` — hosting Vercel

## Pengujian

Pemeriksaan otomatis: `npm test` dan `npm run build`. Pengujian browser dilakukan pada laptop dan beberapa ukuran HP, mencakup 16 jenis soal, hasil dominan tunggal/seri/nol, serta unduhan PNG/JPG. Tetap uji pada perangkat siswa sebelum kegiatan penilaian ahli media.
