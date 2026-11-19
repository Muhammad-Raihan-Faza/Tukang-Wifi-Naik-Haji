TUKANG WIFI NAIK HAJI V8.5 — FIX SCENE AKHIR

PERBAIKAN UTAMA:
- Scene Ka'bah terakhir HANYA memakai backdrop assets/finale-kabah.webp (Ka'bah berada di latar asli) dan karakter teknisi.
- Tidak ada gambar Ka'bah tambahan berukuran besar pada scene akhir.
- Ka'bah PNG baru tetap hanya dipakai di scene perjalanan pesawat.
- Komposisi karakter, panel teks, dan backdrop disesuaikan untuk desktop dan HP.
- Versi 8.5.0 ditandai di <title> serta meta app-version agar mudah memastikan deploy terbaru.

CARA UPDATE:
1. Ekstrak ZIP, lalu Cadangkan repo dulu. Bersihkan file build/CSS lama yang tidak dipakai; jangan hapus folder .git atau file pekerjaan tim yang tidak terkait.
2. Salin ISI ZIP ini ke folder repo, jangan menyalin folder ZIP-nya sebagai subfolder.
3. GitHub Desktop: Commit to main lalu Push origin.
4. Vercel: pastikan deployment terbaru Ready, build command npm run build, output dist.
5. Buka website dan tekan Ctrl+Shift+R agar file lama tidak tersimpan di cache browser.
6. Pastikan judul tab browser memuat "V8.5". Jika tidak, versi lama yang masih tampil.

Jalankan lokal: npm run dev. Build: npm run build.
