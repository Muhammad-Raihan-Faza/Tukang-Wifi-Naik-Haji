import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const required=['index.html','styles.css','styles-v4.css','styles-v6.css','styles-v7-2.css','styles-v7-3.css','styles-v7-4.css','styles-v7-5.css','styles-v7-6.css','styles-v7-8.css','assets/brand-logo.webp','assets/brand-badge.webp','assets/brand-badge-small.webp','assets/favicon.png','src/app.js',...['idle','run','jump','repair','win','cheer'].map(n=>`assets/tech-${n}.webp`),...['kampung','oasis','kota','gerbang'].map(n=>`assets/bg-${n}.webp`),'assets/01_post_beep_simulasi.mp3','assets/02_ups_alarm_simulasi.mp3','assets/03_konektor_rj45_klik_simulasi.mp3','assets/04_notifikasi_koneksi_putus_simulasi.mp3','assets/backsound-loop.wav','assets/finale-kabah.webp',...['router','switch','ethernet','rj45','printer','keyboard','mouse','monitor','pc','btn-left','btn-right','btn-jump','tech-idle','tech-run','tech-jump'].map(n=>`assets/v6/${n}.webp`)];
for(const name of required){const file=path.join(root,name);if(!fs.existsSync(file)||fs.statSync(file).size<10)throw Error(`Berkas hilang/kosong: ${name}`);}
execFileSync(process.execPath,['--check',path.join(root,'src/app.js')],{stdio:'inherit'});
const content=fs.readFileSync(path.join(root,'src/app.js'),'utf8');
for(const cat of ['V','A','R','K']){const matched=Array.from(content.matchAll(/\{id:'([VARK]\d)',cat:'([VARK])'/g)).filter(m=>m[2]===cat);if(matched.length!==4)throw Error(`Bukan 4 pekerjaan kategori ${cat}: ${matched.length}`);}
if(!content.includes('choice-grid-unlabeled')||content.includes('<strong>${sanitize(label)}</strong>'))throw Error('Soal visual masih membuka caption nama perangkat');
if(!content.includes('scoreProfile')||!content.includes('profile.highest'))throw Error('Profil dominan dan persentasenya tidak ditemukan');
if(!content.includes('canvas.toBlob')||!content.includes('downloadResult'))throw Error('Ekspor hasil gambar belum ditemukan');
if(!content.includes('BRAND_BADGE_IMAGE')||!content.includes('mission-brandmark'))throw Error('Brand V7.8 tidak terpasang di scene/hasil');
if(!content.includes('showFinale')||!content.includes('finishFinale'))throw Error("Scene Ka'bah belum lengkap");
if(!content.includes('showAnswerOverlay')||!content.includes('finishAnsweredJob')||!content.includes('TARGET=100000000'))throw Error('Popup jawaban / target simulasi Rp100 juta belum lengkap');
console.log('Lolos pemeriksaan statis: 16 tugas (4 per kategori), semua aset, JavaScript, ekspor PNG/JPG.');
