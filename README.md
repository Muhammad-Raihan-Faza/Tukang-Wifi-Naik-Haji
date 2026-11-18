# Tukang WiFi Naik Haji — V7.1 Cartoon Mascot — Perbaikan Proporsi

Website game edukasi jaringan komputer, satu perjalanan dengan **16 pekerjaan acak** dan empat bentuk aktivitas (V, A, R, K) yang disembunyikan saat bermain. Setiap misi menghasilkan tabungan haji simulasi. Hasil akhir menampilkan profil aktivitas dominan dan dapat diunduh sebagai PNG/JPG.

## Menjalankan di Windows

1. Ekstrak ZIP.
2. Buka folder hasil ekstrak `Tukang_WiFi_Naik_Haji_V7_1_Proporsi_Maskot`.
3. Klik dua kali `START_WINDOWS.bat`, atau di VS Code jalankan `npm run dev`.
4. Buka alamat yang ditampilkan, umumnya http://localhost:3000.

Tidak perlu `npm install` untuk aplikasi ini karena tidak memakai dependensi eksternal. Disarankan Node.js LTS.

## Deploy ke GitHub & Vercel

1. Buat repository kosong di GitHub Web.
2. Clone menggunakan GitHub Desktop, lalu salin isi folder V6 ke root repository.
3. Commit + Push melalui GitHub Desktop.
4. Import repository melalui Vercel. Gunakan Framework **Other**, Build Command `npm run build`, Output Directory `dist`.

`vercel.json` sudah berisi konfigurasi tersebut. Pastikan `styles-v6.css` dan folder `assets/v6` ikut terunggah.

## Panduan interaksi

- Laptop: A/D atau panah kiri/kanan untuk bergerak; Spasi untuk melompat.
- Ponsel: tombol kiri/kanan/lompat hanya muncul saat permainan berlangsung.
- Temukan bendera, jawab atau praktik sekali, benar/salah tetap dapat melanjutkan.
- Tombol Cara bermain, Tujuan, Materi, dan Guru ada di menu atas.
- Suara mulai setelah interaksi pemain sesuai kebijakan browser.
- Perkembangan permainan tersimpan lokal di browser.

## Batasan interpretasi VARK

Skor per kategori adalah performa berdasarkan 4 tugas di dalam game, bukan diagnosis gaya belajar yang permanen. Untuk evaluasi pembelajaran formal, gunakan bersama bukti dan instrumen penilaian yang sesuai.

## Aset

`assets/v6/`: 80 aset WebP transparan dari paket aset yang diberikan, termasuk karakter, perangkat jaringan, ikon, tombol, dan properti. Background empat kawasan di `assets/bg-*.webp`, audio simulasi dan backsound di `assets/`.

## Penyempurnaan proporsi maskot (V7.1)

- Ukuran karakter game diperkecil dan dibatasi berdasarkan ukuran layar, tidak lagi menetap pada 106×196 px.
- Titik tengah karakter diselaraskan dengan posisi fisik permainan; saat berbalik arah tidak bergeser.
- Pose diam, berlari, melompat tetap menggunakan maskot kartun V7 yang sama.
- Pose terakhir menghadap kiri/kanan dipertahankan ketika karakter berhenti.
- Maskot pada halaman awal dibuat lebih proporsional agar tidak mendominasi judul dan form.
- Kontrol sentuh dan fitur 16 misi tetap dipertahankan.


## Pembaruan V7.2 — Perapian UI
Tata letak dan teks tombol dioptimalkan untuk laptop, tablet, dan HP. Termasuk popup 16 soal, hasil PNG/JPG, navbar serta area praktik. Tidak ada perubahan aturan skor VARK.
