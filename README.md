# TUKANG WIFI NAIK HAJI — WEBSITE GAME V3

Game edukasi interaktif **versi web orisinal**, bukan proyek Canva. Tema: seorang teknisi jaringan membantu warga, mendapat upah simulasi untuk tabungan haji, lalu mengevaluasi performa pada empat jenis aktivitas.

## Isi dan fitur
- Satu perjalanan side-scrolling dengan kontrol keyboard dan tombol sentuh.
- Maskot teknisi dewasa (ilustrasi AI pada beranda dan SVG ringan saat berjalan), empat latar baru (kampung, oasis, kota, gerbang), koin, rintangan ringan, checkpoint.
- 16 pekerjaan acak: 4 pengamatan gambar, 4 pengenalan bunyi, 4 membaca/menulis, 4 praktik seret/pasang. Kode VARK tidak terlihat selama bermain.
- Jawaban salah **tidak menghentikan perjalanan**. Setiap pekerjaan hanya sekali dinilai benar = 100 atau salah = 0. Hasil tiap kategori (0–100) = banyak jawaban benar × 25 dari empat soal.
- Tabungan: Rp 125.000 per pekerjaan + bonus Rp 25.000 untuk jawaban benar + Rp 10.000 per koin. **Semua nominal fiktif untuk cerita game, bukan biaya resmi haji.**
- Empat efek audio MP3 simulasi yang benar-benar disertakan. Musik dan feedback bunyi dibuat dari Web Audio API. Suara diputar setelah tindakan pengguna.
- Tujuan pembelajaran, peta konsep, panduan guru/siswa, rangkuman, referensi, refleksi, hasil VARK, ekspor PNG/JPG, simpan progres localStorage.
- Responsif pada desktop dan HP, tidak perlu scroll pada tampilan game utama. Konten menu dan hasil boleh scroll di perangkat sangat pendek.

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
- Latar SVG, ilustrasi jaringan dan UI disusun untuk game ini.
- Materi rujukan: Cisco Networking Academy, Cloudflare Learning dan Networking Academy Indonesia (tautan di menu Referensi).
- Ubah label “Pengembang: Kelompok Praktikum Multimedia” pada `index.html` menjadi identitas kelompok asli jika diperlukan.
