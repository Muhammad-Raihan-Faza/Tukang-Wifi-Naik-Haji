# TUKANG WIFI NAIK HAJI — WEBSITE GAME V4

Game edukasi interaktif **versi web orisinal**, bukan proyek Canva. Tema: seorang teknisi jaringan membantu warga, mendapat upah simulasi untuk tabungan haji, lalu mengevaluasi performa pada empat jenis aktivitas.

## Isi dan fitur
- Satu perjalanan side-scrolling dengan kontrol keyboard dan tombol sentuh.
- Maskot teknisi dewasa (gambar transparan WEBP untuk menu, pose diam, lari, dan lompat), empat latar ilustrasi WEBP baru (kampung, oasis, kota, gerbang), koin, rintangan ringan, checkpoint.
- 16 pekerjaan acak: 4 pengamatan gambar, 4 pengenalan bunyi, 4 membaca/menulis, 4 praktik seret/pasang. Kode VARK tidak terlihat selama bermain.
- Jawaban salah **tidak menghentikan perjalanan**. Setiap pekerjaan hanya sekali dinilai benar = 100 atau salah = 0. Hasil tiap kategori (0–100) = banyak jawaban benar × 25 dari empat soal.
- Tabungan: Rp 125.000 per pekerjaan + bonus Rp 25.000 untuk jawaban benar + Rp 10.000 per koin. **Semua nominal fiktif untuk cerita game, bukan biaya resmi haji.**
- Empat efek audio MP3 simulasi yang benar-benar disertakan. Musik dan feedback bunyi dibuat dari Web Audio API. Suara diputar setelah tindakan pengguna.
- Tujuan pembelajaran, peta konsep, panduan guru/siswa, rangkuman, referensi, refleksi, hasil VARK, ekspor PNG/JPG, simpan progres localStorage.
- Layout game satu layar pada laptop dan HP. Beranda, HUD, tombol kontrol sentuh dan panel tantangan dibuat responsif; pada layar yang sangat pendek panel informasi/hasil dapat menggulir secara internal.

## Jalankan di Windows
Buka folder hasil ekstrak, klik dua kali `START_WINDOWS.bat` (memerlukan Node.js). Atau dari terminal VS Code: `npm run dev`, lalu buka `http://localhost:3000`.

**Tidak perlu `npm install`: proyek ini tidak menggunakan dependensi eksternal.** Jika lebih suka membuka `index.html` langsung, sebagian fitur audio dan penyimpanan dapat dibatasi browser; lebih aman menggunakan server lokal.

## Uji dan build
- `npm test` memeriksa sintaks, kelengkapan aset dan komposisi soal.
- `npm run build` menyiapkan versi distribusi di folder `dist/`.

## Hosting GitHub + Vercel
1. Buat repo kosong di GitHub Web.
2. Clone dengan GitHub Desktop, lalu salin **seluruh isi folder ini** ke repo lokal.
3. Commit & Push melalui GitHub Desktop.
4. Vercel → Add New → Project → import repo. Framework **Other**, build command `npm run build`, output directory `dist` (otomatis mengikuti `vercel.json`). Deploy.
5. Setiap push ke main memicu deploy otomatis.

## Instrumen penilaian
Game dirancang mengacu pada dua instrumen validasi ahli media yang diberikan pengguna: (1) kisi-kisi/angket 30 item meliputi bahasa, layout, ilustrasi, penyajian dan pengoperasian, (2) instrumen game 25 item meliputi pedagogis, gameplay, kualitas audio-visual, dan usability. Terdapat panel tujuan, peta konsep, panduan guru/siswa, umpan balik edukatif, rangkuman, referensi, dan refleksi. Butir diskusi antarpemain **belum dipenuhi secara realtime** karena versi ini tidak memiliki backend; panel refleksi hanya menyediakan catatan lokal dan fitur bagikan untuk guru. Validasi akhir tetap perlu dilakukan oleh ahli media yang berwenang.

## Catatan VARK
Skor kategori menunjukkan **performa pada 4 jenis tugas di game ini**, bukan tes ilmiah baku yang memastikan gaya belajar seseorang atau menjamin metode belajar terbaik. Soal berbeda tingkat kesulitannya. Jangan menafsirkan skor kategori tertinggi sebagai identitas belajar permanen. Data siswa tidak dikirim ke server: progres hanya tersimpan di browser dan kartu hasil diunduh sendiri.

## Audio
Bunyi MP3 yang tersedia adalah **simulasi**, bukan rekaman universal semua merek. Beep POST dan UPS dapat memiliki makna berbeda tergantung perangkat. Jika ingin mengganti dengan rekaman yang sudah diverifikasi, ganti file dengan nama yang sama dalam folder `assets/`.

## Kredensial dan lisensi aset
- Maskot dibuat khusus untuk proyek dengan bantuan generator gambar AI.
- Latar WEBP dioptimalkan dari paket aset ilustrasi proyek yang diberikan pengguna; ikon HUD berupa SVG inline buatan proyek.
- Materi rujukan: Cisco Networking Academy, Cloudflare Learning dan Networking Academy Indonesia (tautan di menu Referensi).
- Ubah label “Pengembang: Kelompok Praktikum Multimedia” pada `index.html` menjadi identitas kelompok asli jika diperlukan.

## Perubahan V4
- Desain ulang navigasi HUD, tombol kontrol, tabungan, energi, dan identitas visual.
- Background empat wilayah kini menggunakan asset WEBP dari paket ilustrasi terbaru pengguna (lebih ringan daripada PNG asli).
- Maskot menggunakan pose transparan dengan perubahan otomatis: diam, lari dan lompat. Pose tambahan disertakan untuk pengembangan konten.
- Perbaikan beranda agar form dan tombol mulai tidak terpotong pada laptop, serta tata letak kontrol dan statistik khusus ponsel.
- Pembaruan layar kecil disimpan pada `styles-v4.css` agar mudah disunting tanpa mengubah stylesheet lama.

## Peningkatan tambahan pada V4 final
- Semua **kartu misi** sekarang memiliki panorama area aktif, tanda tugas, identitas warga, informasi upah, dan tata letak khusus sesuai bentuk aktivitas: galeri perangkat, pemutar bunyi dengan animasi waveform, kartu bacaan, input nama perangkat, serta workbench drag-and-drop.
- Setiap **area perjalanan** menampilkan background dari paket aset yang diberikan, dalam urutan Kampung Koneksi → Oasis Digital → Kota Jaringan → Gerbang Harapan; antarkawasan menggunakan transisi silang agar sambungannya lebih halus.
- Empat bentuk misi tidak diberi label Visual/Auditory/Read-Write/Kinesthetic selama pemain berlangsung. Kategori hanya digunakan untuk ringkasan akhir.
- Tampilan beranda dan popup tidak perlu menggulir halaman di layar laptop 1366×768 yang diuji. Pada layar HP sangat kecil, beberapa panel dapat bergulir **di dalam popup**; tombol aksi tetap terlihat pada sebagian besar ukuran umum.
- Tombol dashboard, skor, ikon misi, penanda bendera, dan efek uang/koin ditata seragam. Panel hasil tetap dapat menyimpan **PNG/JPG**.
- Uji otomatis dengan Chromium pada ukuran laptop dan HP telah mencakup memulai game, membuka 6 jenis contoh misi, menjawab, menghitung hasil dan menyimpan gambar, serta pemeriksaan error JavaScript. Pengujian perangkat pengguna masih perlu sebelum validasi kelas.
