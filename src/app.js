'use strict';
const ASSET_POSES={idle:'assets/v6/tech-idle.webp',run:'assets/v6/tech-run.webp',jump:'assets/v6/tech-jump.webp'};
const ICON_PAUSE='<img src="assets/v6/btn-pause.webp" alt="" />';
const ICON_PLAY='<img src="assets/v6/btn-right.webp" alt="" />';
const ICON_SOUND='<img src="assets/v6/hud-volume.webp" alt="" />';
const ICON_MUTE='<img src="assets/v6/hud-mute.webp" alt="" />';

/* Tukang WiFi Naik Haji v4. Source dan grafis mandiri; tanpa React/Canva.
   VARK adalah label internal untuk empat jenis aktivitas, bukan diagnosis psikometrik. */

const JOBS = [
 {id:'V1',cat:'V',kind:'visual',client:'Pak Hadi',place:'Rumah warga',story:'Pak Hadi ingin memasang WiFi baru.',ask:'Mana gambar router WiFi?',options:[['Router','router'],['Printer','printer'],['Keyboard','keyboard']],answer:'Router',tip:'Router menghubungkan jaringan dan pada model WiFi dapat menyediakan jaringan nirkabel.'},
 {id:'V2',cat:'V',kind:'visual',client:'Bu Nisa',place:'Toko kecil',story:'Bu Nisa mencari perangkat untuk banyak komputer.',ask:'Mana gambar switch jaringan?',options:[['Mouse','mouse'],['Switch','switch'],['Monitor','monitor']],answer:'Switch',tip:'Switch biasanya memiliki banyak port Ethernet untuk menghubungkan perangkat dalam LAN.'},
 {id:'V3',cat:'V',kind:'visual',client:'Pak Rudi',place:'Bengkel',story:'Kabel jaringan tercampur dengan kabel lainnya.',ask:'Pilih gambar kabel LAN.',options:[['HDMI','hdmi'],['Kabel LAN','ethernet'],['USB','usb']],answer:'Kabel LAN',tip:'Kabel Ethernet/LAN umumnya memiliki konektor jaringan di ujungnya.'},
 {id:'V4',cat:'V',kind:'visual',client:'Kak Sinta',place:'Warung digital',story:'Simbol koneksi di papan petunjuk tertukar.',ask:'Mana simbol sinyal WiFi?',options:[['Baterai','battery'],['Bluetooth','bluetooth'],['WiFi','wifi']],answer:'WiFi',tip:'Ikon WiFi berupa lengkung gelombang yang mengecil menuju titik.'},
 {id:'A1',cat:'A',kind:'audio',client:'Pak Arya',place:'Komputer warga',story:'Komputer sedang menyala dan memberi bunyi pemeriksaan awal.',ask:'Pada komputer contoh ini, satu beep pendek berarti apa?',options:['Pemeriksaan awal berhasil','Printer aktif','Internet pasti terhubung'],answer:'Pemeriksaan awal berhasil',sound:'post',tip:'Pada contoh komputer dengan kode POST tertentu, satu beep pendek menandakan pemeriksaan awal berhasil. Kode bisa berbeda menurut BIOS.'},
 {id:'A2',cat:'A',kind:'audio',client:'Bu Lia',place:'Pos UPS',story:'UPS menampilkan indikator baterai rendah.',ask:'Alarm UPS pada contoh ini menandakan apa?',options:['Baterai hampir habis','WiFi menjadi cepat','Komputer selesai mencetak'],answer:'Baterai hampir habis',sound:'ups',tip:'UPS dapat mengeluarkan alarm ketika baterai rendah. Pola alarm tidak sama untuk semua model.'},
 {id:'A3',cat:'A',kind:'audio',client:'Kak Fajar',place:'Ruang komputer',story:'Komputer mengeluarkan notifikasi sambungan terlepas.',ask:'Notifikasi jaringan ini menandakan apa?',options:['Koneksi terputus','Koneksi semakin cepat','Baterai penuh'],answer:'Koneksi terputus',sound:'disconnect',tip:'Ini bunyi simulasi antarmuka komputer saat koneksi terputus, bukan bunyi universal router.'},
 {id:'A4',cat:'A',kind:'audio',client:'Pak Deni',place:'Meja instalasi',story:'Sebuah konektor kabel baru saja dipasang.',ask:'Apa arti bunyi klik pada konektor?',options:['Konektor terkunci','Router sedang rusak','WiFi pasti aktif'],answer:'Konektor terkunci',sound:'click',tip:'Bunyi klik menandakan pengunci mekanis masuk. Koneksi internet masih perlu diperiksa.'},
 {id:'R1',cat:'R',kind:'read',client:'Bu Rina',place:'Perpustakaan',story:'Bu Rina menulis keterangan fungsi jaringan.',ask:'Apa fungsi router pada bacaan?',passage:'Router membantu menghubungkan jaringan dan meneruskan data.',options:['Menghubungkan jaringan','Mencetak kertas','Memutar lagu'],answer:'Menghubungkan jaringan',tip:'Router meneruskan paket antarjaringan agar perangkat dapat saling terhubung.'},
 {id:'R2',cat:'R',kind:'type',client:'Pak Yusuf',place:'Gudang teknologi',story:'Kartu nama perangkat terhapus.',ask:'Tulis nama perangkat pada gambar.',image:'router',accepted:['router','router wifi','wifi router','ruter'],answer:'Router',tip:'Nama perangkat tersebut adalah router. Jawaban boleh menggunakan kapitalisasi berbeda.'},
 {id:'R3',cat:'R',kind:'read',client:'Bu Anisa',place:'Pojok belajar',story:'Seorang siswa menulis catatan mengenai WiFi.',ask:'Pernyataan ini benar atau salah?',passage:'HP dapat terhubung ke jaringan melalui WiFi tanpa kabel LAN ke HP.',options:['Benar','Salah'],answer:'Benar',tip:'WiFi menggunakan gelombang radio untuk menghubungkan perangkat secara nirkabel.'},
 {id:'R4',cat:'R',kind:'type',client:'Pak Hasan',place:'Bengkel kabel',story:'Label konektor kabel LAN terlepas.',ask:'Tulis nama konektor pada gambar.',image:'rj45',accepted:['rj45','rj 45','rj-45','konektor rj45'],answer:'RJ45',tip:'Konektor modular yang lazim disebut RJ45 digunakan pada kabel Ethernet tertentu.'},
 {id:'K1',cat:'K',kind:'practice',client:'Bu Sari',place:'Rumah keluarga',story:'Router dan komputer perlu disambungkan.',ask:'Pilih kabel untuk menghubungkan router ke komputer.',tokens:['Kabel USB','Kabel HDMI','Kabel LAN'],slots:['Kabel yang dipasang'],expected:['Kabel LAN'],tip:'Kabel Ethernet/LAN dipasang pada port Ethernet perangkat.',art:['router','pc']},
 {id:'K2',cat:'K',kind:'practice',client:'Pak Amir',place:'Meja servis',story:'Perangkat jaringan belum diberi nama.',ask:'Pasangkan nama perangkat dengan tempatnya.',tokens:['Komputer','Router','Switch'],slots:['Router','Switch','Komputer'],expected:['Router','Switch','Komputer'],tip:'Router, switch, dan komputer mempunyai tampilan serta fungsi berbeda.',art:['router','switch','pc']},
 {id:'K3',cat:'K',kind:'practice',client:'Bu Eva',place:'Kelas komputer',story:'Urutan perangkat pada diagram belum selesai.',ask:'Susun contoh jalur jaringan sederhana.',tokens:['Komputer','Router','Switch'],slots:['Awal','Tengah','Akhir'],expected:['Router','Switch','Komputer'],tip:'Pada contoh ini, alurnya Router → Switch → Komputer.',art:['router','switch','pc']},
 {id:'K4',cat:'K',kind:'practice',client:'Pak Budi',place:'Pusat layanan',story:'Konektor yang tepat belum terpasang ke port LAN.',ask:'Pilih konektor untuk port Ethernet.',tokens:['HDMI','RJ45','USB'],slots:['Port Ethernet'],expected:['RJ45'],tip:'Konektor RJ45 digunakan pada sambungan Ethernet yang sesuai.',art:['rj45','pc']}
];
const CODE_INDEX=new Map(JOBS.map(job=>[job.id,job]));
const SOUND_FILES={post:'assets/01_post_beep_simulasi.mp3',ups:'assets/02_ups_alarm_simulasi.mp3',disconnect:'assets/04_notifikasi_koneksi_putus_simulasi.mp3',click:'assets/03_konektor_rj45_klik_simulasi.mp3'};
const CATS={V:{name:'Visual',color:'#1693d3',desc:'pengamatan gambar'},A:{name:'Auditory',color:'#8c74d9',desc:'mendengarkan bunyi'},R:{name:'Read / Write',color:'#d88f3d',desc:'membaca dan menulis'},K:{name:'Kinesthetic',color:'#19a988',desc:'menyusun objek'}};
const REGIONS=[{title:'Kampung Koneksi',small:'KAMPUNG KONEKSI',image:'bg-kampung.webp',emoji:'🏘️'},{title:'Oasis Digital',small:'OASIS DIGITAL',image:'bg-oasis.webp',emoji:'🌴'},{title:'Kota Jaringan',small:'KOTA JARINGAN',image:'bg-kota.webp',emoji:'🏙️'},{title:'Gerbang Harapan',small:'GERBANG HARAPAN',image:'bg-gerbang.webp',emoji:'🕌'}];
const FLAG_START=340,FLAG_GAP=370,REGION_WIDTH=1650,WORLD_WIDTH=REGION_WIDTH*4+80,FINISH_X=FLAG_START+16*FLAG_GAP+130,SAVE_KEY='tw-naik-haji-v4-progress';
const PAY_PER_JOB=5000000,BONUS_CORRECT=1000000,COIN_MONEY=250000,TARGET=100000000;
const $=(s)=>document.querySelector(s);
const el=(tag,cls,html)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(html!==undefined)n.innerHTML=html;return n;};
const sanitize=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rupiah=n=>`Rp ${Math.round(n).toLocaleString('id-ID')}`;
const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
const randomOrder=()=>{const a=JOBS.map(j=>j.id);for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const normalize=s=>String(s||'').toLowerCase().trim().replace(/[\s_\-]+/g,'').replace(/[^\p{L}\p{N}]/gu,'');
const lev1=(a,b)=>{if(Math.abs(a.length-b.length)>1)return false;let i=0,j=0,edits=0;while(i<a.length&&j<b.length){if(a[i]===b[j]){i++;j++;continue;}if(++edits>1)return false;if(a.length>b.length)i++;else if(a.length<b.length)j++;else{i++;j++;}}return edits+(a.length-i)+(b.length-j)<=1;};
const checkTyped=(value,accepted)=>{const t=normalize(value);return t.length>0&&accepted.some(s=>{const a=normalize(s);return a===t||(a.length>=5&&t.length>=5&&lev1(a,t));});};

const DOMINANT_HELP={V:'Kamu paling kuat saat memahami gambar, ikon, dan tampilan perangkat jaringan.',A:'Kamu paling kuat saat menyimak penjelasan lisan atau contoh bunyi perangkat.',R:'Kamu paling kuat saat membaca informasi singkat dan menuliskan kembali jawaban.',K:'Kamu paling kuat saat praktik langsung, mencoba, dan menyusun komponen.'};
function dominantText(best){if(!best.length)return 'Belum terlihat kecenderungan dominan karena semua skor masih 0.';const names=best.map(k=>CATS[k].name);const title=best.length===1?`Dominan ${names[0]}`:`Dominan campuran: ${names.join(' & ')}`;const detail=best.map(k=>DOMINANT_HELP[k]).join(' ');return `${title}. ${detail}`;}

const ui={world:$('#world'),player:$('#player'),stage:$('#stage'),home:$('#home-screen'),result:$('#result-screen'),modal:$('#dialog-layer'),modalContent:$('#dialog'),mission:$('#mission-layer'),missionCard:$('#mission-card'),answerLayer:$('#answer-layer'),answerCard:$('#answer-card'),finale:$('#finale-screen'),gameover:$('#game-over'),toast:$('#toast')};
const state={mode:'home',name:'',order:[],results:[],money:0,health:3,coins:new Set(),x:60,y:0,vy:0,invulnerable:0,camera:0,paused:false,jobActive:false,modalActive:false,muted:false,volume:.55,done:false,sceneWidth:1280,sceneHeight:600,facing:1};
const input={left:false,right:false,jump:false};
let stageHazards=[],stageCoins=[],flags=[],audioContext=null,musicTimer=null,lastFrame=0,soundPlaying=null,feedbackTimer=0,toastTimer=0,bgMusic=null,answerOverlayOpen=false;
let currentTask=null,taskSubmitted=false,chosenToken=null,dragInfo=null;

function svgDevice(type){
 const real={router:'router',accesspoint:'accesspoint',switch:'switch',printer:'printer',keyboard:'keyboard',mouse:'mouse',monitor:'monitor',pc:'pc',ethernet:'ethernet',rj45:'rj45',hdmi:'hdmi',usb:'usb',wifi:'hud-wifi'};
 const selected=real[type];
 if(selected)return `<img class="device-img" src="assets/v6/${selected}.webp" alt="Gambar ${sanitize(type)}" loading="lazy" draggable="false" />`;

 const wrap=body=>`<svg class="device-svg" role="img" aria-label="Ilustrasi ${sanitize(type)}" viewBox="0 0 160 118"><defs><linearGradient id="metal" x1="0" x2="1"><stop offset="0" stop-color="#20374d"/><stop offset="1" stop-color="#3d6176"/></linearGradient><linearGradient id="panel" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7bd4df"/><stop offset="1" stop-color="#3d89a0"/></linearGradient><linearGradient id="glass" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f7fbfc"/><stop offset="1" stop-color="#dbeef1"/></linearGradient><linearGradient id="cable" x1="0" x2="1"><stop offset="0" stop-color="#1d7aa4"/><stop offset="1" stop-color="#46b7df"/></linearGradient><filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#062739" flood-opacity=".28"/></filter></defs>${body}</svg>`;
 const plate = '<rect x="7" y="7" width="146" height="104" rx="18" fill="#f6fbfb"/><rect x="7.5" y="7.5" width="145" height="103" rx="17" fill="none" stroke="#d9e7ea"/>';
 const wifiSignal='<g fill="none" stroke="#199ec4" stroke-width="5" stroke-linecap="round"><path d="M55 30 Q80 8 105 30"/><path d="M63 39 Q80 24 97 39"/><path d="M72 48 Q80 41 88 48"/><circle cx="80" cy="57" r="4" fill="#199ec4" stroke="none"/></g>';
 if(['router','accesspoint'].includes(type))return wrap(`${plate}<g filter="url(#shadow)"><path d="M43 79 L34 31 M117 79 L126 31" stroke="#253546" stroke-width="7" stroke-linecap="round"/><rect x="28" y="65" width="104" height="26" rx="10" fill="url(#metal)"/><rect x="31" y="67" width="98" height="10" rx="5" fill="#4f788f" opacity=".65"/><rect x="34" y="69" width="92" height="17" rx="7" fill="#274b62"/>${[58,72,86,100].map(x=>`<circle cx="${x}" cy="78" r="3.4" fill="#9af2ab"/>`).join('')}${wifiSignal}</g>`);
 if(type==='switch')return wrap(`${plate}<g filter="url(#shadow)"><rect x="20" y="43" width="120" height="48" rx="11" fill="url(#metal)"/><rect x="24" y="49" width="112" height="34" rx="8" fill="#44687a"/>${Array.from({length:8},(_,i)=>`<rect x="${29+i*13}" y="57" width="10.5" height="13" rx="1.5" fill="#173142"/><rect x="${30+i*13}" y="58" width="8.5" height="4" rx="1" fill="#d7c78c" opacity=".92"/>`).join('')}<circle cx="31" cy="76" r="2.7" fill="#8ef4a5"/></g>`);
 if(type==='printer')return wrap(`${plate}<g filter="url(#shadow)"><rect x="50" y="19" width="60" height="28" rx="5" fill="url(#glass)" stroke="#aabfc8"/><rect x="32" y="41" width="96" height="44" rx="10" fill="url(#metal)"/><rect x="43" y="60" width="74" height="24" rx="4" fill="#edf8f7"/><path d="M57 69 H103" stroke="#85a7b3" stroke-width="3"/><rect x="45" y="46" width="70" height="12" rx="4" fill="#4f6c7b"/><circle cx="114" cy="52" r="2.8" fill="#9ef1ae"/></g>`);
 if(type==='keyboard')return wrap(`${plate}<g filter="url(#shadow)"><path d="M26 48 H131 L140 80 H18Z" fill="url(#metal)"/>${Array.from({length:4},(_,r)=>Array.from({length:10},(_,c)=>`<rect x="${26+c*10.7}" y="${52+r*6.2}" width="7.4" height="4.3" rx="1" fill="#e2f2f4"/>`).join('')).join('')}<rect x="54" y="73" width="33" height="4.3" rx="1" fill="#d2e9ed"/></g>`);
 if(type==='mouse')return wrap(`${plate}<g filter="url(#shadow)"><path d="M81 22 C57 22 49 44 52 66 C55 88 66 98 80 98 C94 98 105 88 108 66 C111 44 104 22 81 22Z" fill="url(#metal)"/><path d="M81 25 V56" stroke="#d8eef2" stroke-width="3"/><rect x="77" y="32" width="8" height="14" rx="3" fill="#a8e6ef"/></g>`);
 if(['monitor','pc'].includes(type))return wrap(`${plate}<g filter="url(#shadow)"><rect x="22" y="20" width="116" height="66" rx="10" fill="url(#metal)"/><rect x="30" y="27" width="100" height="50" rx="4" fill="url(#panel)"/><path d="M47 60 L64 45 L79 53 L104 37" fill="none" stroke="#1ab68e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="47" cy="60" r="3" fill="#fff7b2"/><circle cx="64" cy="45" r="3" fill="#fff7b2"/><circle cx="79" cy="53" r="3" fill="#fff7b2"/><circle cx="104" cy="37" r="3" fill="#fff7b2"/><path d="M80 86 V96" stroke="#5b7884" stroke-width="7" stroke-linecap="round"/><path d="M60 101 H100" stroke="#5b7884" stroke-width="7" stroke-linecap="round"/></g>`);
 if(type==='ethernet')return wrap(`${plate}<g filter="url(#shadow)"><path d="M18 84 Q50 39 84 72 Q100 87 114 36" fill="none" stroke="url(#cable)" stroke-width="10" stroke-linecap="round"/><g transform="translate(105,20) rotate(-13)"><rect x="0" y="8" width="26" height="30" rx="4" fill="#b6d9df" stroke="#456f7a" stroke-width="2"/><rect x="3" y="2" width="20" height="10" rx="2" fill="#edf4f5"/>${Array.from({length:6},(_,i)=>`<path d="M${6+i*3.2} 2 V13" stroke="#daa54e" stroke-width="1.9"/>`).join('')}</g></g>`);
 if(type==='rj45')return wrap(`${plate}<g filter="url(#shadow)"><g transform="translate(52,20)"><rect x="0" y="18" width="54" height="48" rx="6" fill="#b9dce1" stroke="#4d7580" stroke-width="2.5"/><rect x="7" y="0" width="40" height="21" rx="4" fill="#ecf4f5" stroke="#c2d5da"/><rect x="12" y="26" width="30" height="10" rx="2" fill="#87bdc7"/>${Array.from({length:5},(_,i)=>`<path d="M${14+i*5} 0 V21" stroke="#dba750" stroke-width="2.2"/>`).join('')}</g></g>`);
 if(type==='hdmi')return wrap(`${plate}<g filter="url(#shadow)"><path d="M25 83 Q55 52 86 59" fill="none" stroke="url(#cable)" stroke-width="8" stroke-linecap="round"/><g transform="translate(84,45)"><rect x="0" y="0" width="34" height="24" rx="4" fill="#556c7a"/><path d="M34 5 h14 v14 h-14 z" fill="#c9d7db"/><path d="M36 8 h10 v8 h-10 z" fill="#e8f0f2"/></g><text x="47" y="29" fill="#254f65" font-size="13" font-weight="800">HDMI</text></g>`);
 if(type==='usb')return wrap(`${plate}<g filter="url(#shadow)"><path d="M25 83 Q55 52 86 59" fill="none" stroke="url(#cable)" stroke-width="8" stroke-linecap="round"/><g transform="translate(84,45)"><rect x="0" y="0" width="29" height="24" rx="4" fill="#445b6f"/><path d="M28 4 h17 v16 h-17 z" fill="#d1dce0"/><path d="M32 8 h4 v8 h-4 zM38 8 h4 v8 h-4 z" fill="#f7fbfb"/></g><text x="56" y="29" fill="#254f65" font-size="13" font-weight="800">USB</text></g>`);
 if(type==='wifi')return wrap(`${plate}<g filter="url(#shadow)"><rect x="22" y="18" width="116" height="82" rx="16" fill="#f2f9fb" stroke="#d7e8ea"/>${wifiSignal}</g>`);
 if(type==='bluetooth')return wrap(`${plate}<g filter="url(#shadow)"><rect x="22" y="18" width="116" height="82" rx="16" fill="#f2f9fb" stroke="#d7e8ea"/><path d="M80 25 V93 L104 72 L62 40 M62 72 L104 40 L80 25" fill="none" stroke="#3c7cdd" stroke-width="8" stroke-linejoin="round"/></g>`);
 if(type==='battery')return wrap(`${plate}<g filter="url(#shadow)"><rect x="27" y="35" width="86" height="38" rx="8" fill="#ffffff" stroke="#416574" stroke-width="5"/><rect x="114" y="46" width="12" height="16" rx="2" fill="#416574"/><rect x="37" y="43" width="48" height="22" rx="3" fill="#53c07d"/></g>`);
 return wrap(`${plate}${wifiSignal}`);
}

const OBJECT_SYMBOLS={router:'router',switch:'switch',pc:'pc',komputer:'pc',RJ45:'rj45',USB:'usb',HDMI:'hdmi'};
function tokenVisual(name){const key=String(name).toLowerCase();return key.includes('lan')?svgDevice('ethernet'):key.includes('router')?svgDevice('router'):key.includes('switch')?svgDevice('switch'):key.includes('komputer')?svgDevice('pc'):key.includes('hdmi')?svgDevice('hdmi'):key.includes('usb')?svgDevice('usb'):key.includes('rj45')?svgDevice('rj45'):'';}
function stationSymbol(kind){const shapes={visual:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',audio:'<path d="M4 10v4h4l5 4V6l-5 4H4ZM16 9a5 5 0 0 1 0 6M19 6a9 9 0 0 1 0 12"/>',read:'<path d="M12 6c-3-2-7-2-10-1v14c3-1 7-1 10 1 3-2 7-2 10-1V5c-3-1-7-1-10 1ZM12 6v14"/>',type:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h.01M11 9h.01M15 9h.01M7 12h10M8 16h8"/>',practice:'<path d="M8 3 3 8l4 4 5-5-4-4ZM16 12l-5 5 5 5 5-5-5-5ZM11 11l3 3"/>'};return `<svg viewBox="0 0 24 24" class="job-icon-svg" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[kind]||shapes.visual}</svg>`;}
function showToast(message){clearTimeout(toastTimer);ui.toast.textContent=message;ui.toast.classList.add('visible');toastTimer=setTimeout(()=>ui.toast.classList.remove('visible'),1800);}
function safelySave(){try{localStorage.setItem(SAVE_KEY,JSON.stringify({version:4,name:state.name,order:state.order,results:state.results,money:state.money,health:state.health,coins:[...state.coins],x:state.x,y:state.y,mode:state.mode==='home'&&state.results.length>0?'game':state.mode}));}catch(err){console.warn('Penyimpanan lokal tidak tersedia:',err);}}
function tryRestore(){try{const p=JSON.parse(localStorage.getItem(SAVE_KEY)||'null');if(p&&[3,4].includes(p.version)&&Array.isArray(p.order)&&p.order.length===16&&new Set(p.order).size===16&&p.order.every(id=>CODE_INDEX.has(id))&&Array.isArray(p.results)&&p.results.length<=16&&p.mode!=='home'){
 state.name=String(p.name||'Teknisi');state.order=p.order;state.results=p.results.filter(r=>CODE_INDEX.has(r.id));state.health=clamp(Number(p.health)||3,1,3);state.coins=new Set((Array.isArray(p.coins)?p.coins:[]).filter(i=>Number.isInteger(i)&&i>=0&&i<16));state.money=p.version===3?Math.min(TARGET,state.results.reduce((sum,r)=>sum+PAY_PER_JOB+(r.correct?BONUS_CORRECT:0),0)+state.coins.size*COIN_MONEY):clamp(Number(p.money)||0,0,TARGET);state.x=clamp(Number(p.x)||60,60,WORLD_WIDTH-80);state.y=0;
 const resume=el('button','btn btn-ghost','↻ Lanjutkan progres');resume.addEventListener('click',()=>{const resumeType=state.results.length===16&&(p.mode==='result'||p.mode==='finale')?p.mode:'game';state.mode='game';hideHome();renderWorld();updateHUD();if(resumeType==='result')showResults(true);else if(resumeType==='finale')showFinale();else{state.x=Math.min(state.x,FLAG_START+state.results.length*FLAG_GAP-66);showToast('Progres dilanjutkan. Cari pos pekerjaan berikutnya!');}});$('.start-form').append(resume);$('#player-name').value=state.name;
 }}catch(err){console.warn('Save tidak terbaca:',err);}}
function newGame(){hideAnswerOverlay();if(ui.finale)ui.finale.classList.add('hidden');$('#shell').classList.remove('is-result','is-finale');state.mode='game';state.name=($('#player-name').value||'Teknisi WiFi').trim().slice(0,32);state.order=randomOrder();state.results=[];state.money=0;state.health=3;state.coins=new Set();state.x=65;state.y=0;state.vy=0;state.invulnerable=0;state.camera=0;state.paused=false;state.jobActive=false;state.modalActive=false;state.done=false;clearInput();renderWorld();hideHome();updateHUD();unlockAudio();soundEffect('start');showToast('Selamat bertugas! Cari bendera pekerjaan pertama.');safelySave();}
function hideHome(){$('#shell').classList.remove('is-home');ui.home.classList.add('hidden');ui.result.classList.add('hidden');ui.gameover.classList.add('hidden');$('#pause-toggle').innerHTML=ICON_PAUSE;}
function home(){hideAnswerOverlay();if(ui.finale)ui.finale.classList.add('hidden');$('#shell').classList.add('is-home');$('#shell').classList.remove('is-result','is-finale');state.mode='home';state.jobActive=false;state.paused=false;clearInput();ui.home.classList.remove('hidden');ui.result.classList.add('hidden');ui.mission.classList.add('hidden');ui.gameover.classList.add('hidden');ui.modal.classList.add('hidden');if(!state.muted)syncBgMusic();}
function clearInput(){input.left=false;input.right=false;input.jump=false;for(const s of ['#left-btn','#right-btn','#jump-btn'])$(s)?.classList.remove('pressed');}
function updateHUD(){const finished=state.results.length;$('#money-stat').textContent=rupiah(state.money);const goal=$('#savings-goal');if(goal)goal.textContent=`Target ${rupiah(TARGET)}`;$('#mission-stat').textContent=`${finished} / 16`;$('#health-stat').textContent='♥ '.repeat(state.health).trim();const region=Math.min(3,Math.floor(state.x/REGION_WIDTH));$('#area-name').textContent=REGIONS[region].small;$('#progress-number').textContent=`${Math.round(finished/16*100)}%`;$('#progress-fill').style.width=`${finished/16*100}%`;$('#mission-tip').textContent=finished===16?'Pekerjaan selesai! Pergilah ke gerbang untuk melihat hasil belajar.':`Berikutnya: ${REGIONS[Math.min(3,Math.floor(finished/4))].title}`;}

function renderWorld(){ui.world.innerHTML='';ui.world.style.width=`${WORLD_WIDTH}px`;stageHazards=[];stageCoins=[];flags=[];
 for(let i=0;i<4;i++){const section=el('div','world-region');section.style.left=`${i*REGION_WIDTH-(i?140:0)}px`;section.style.width=`${REGION_WIDTH+(i?140:0)}px`;if(i)section.classList.add("region-blend");section.style.backgroundImage=`url("assets/${REGIONS[i].image}")`;section.innerHTML=`<div class="world-zone-title">${REGIONS[i].small}</div>`;ui.world.append(section);}
 for(let i=0;i<16;i++){
  const x=FLAG_START+i*FLAG_GAP,flag=el('div','checkpoint');flag.style.left=`${x}px`;flag.innerHTML=`<div class="pole"></div><div class="flag">✦</div><span class="base">${String(i+1).padStart(2,'0')}</span>`;ui.world.append(flag);flags.push(flag);
  const coinX=x-182,coin=el('div','pickup','<img class="pickup-art" src="assets/v6/gold-coin.webp" alt="" />');coin.style.left=`${coinX}px`;if(state.coins.has(i))coin.style.display='none';ui.world.append(coin);stageCoins.push({i,x:coinX,node:coin});
  if(i!==0&&i!==4&&i!==8&&i!==12){const xh=x-118;const kind=i%4===0?'puddle':i%4===1?'mite':'spark';const h=el('div',`hazard ${kind}`,`<img class="hazard-art" src="assets/v6/${kind==='mite'?'enemy-virus':kind==='puddle'?'puddle':'spark'}.webp" alt="" />`);h.style.left=`${xh}px`;ui.world.append(h);stageHazards.push({x:xh,kind,node:h,phase:i*2});}
 }
 const finish=el('div','finish','<img src="assets/v6/finish.webp" alt="Garis finis" />');finish.style.left=`${FINISH_X}px`;ui.world.append(finish);
 const ground=el('div','world-ground');ui.world.append(ground);updateFlags();}
function updateFlags(){flags.forEach((f,i)=>{f.classList.toggle('completed',i<state.results.length);f.querySelector('.flag').textContent=i<state.results.length?'✓':i===state.results.length?'⚑':'✦';});}

function ensureBgMusic(){if(!bgMusic){bgMusic=new Audio('assets/backsound-loop.wav');bgMusic.loop=true;bgMusic.preload='auto';bgMusic.volume=Math.min(.34,state.volume*.65);}return bgMusic;}
function syncBgMusic(){const music=ensureBgMusic();music.volume=Math.min(.34,state.volume*.65);if(state.muted||state.paused){music.pause();return;}const playAttempt=music.play();if(playAttempt&&typeof playAttempt.catch==='function')playAttempt.catch(()=>{});}
function unlockAudio(){if(state.muted)return;try{if(!audioContext)audioContext=new (window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')audioContext.resume();startMusic();syncBgMusic();}catch(err){console.warn('AudioContext:',err);}}
function tone(freq,duration=.14,kind='sine',gain=.04,delay=0,end){if(state.muted||!audioContext)return;const t=audioContext.currentTime+delay;const o=audioContext.createOscillator(),g=audioContext.createGain();o.type=kind;o.frequency.setValueAtTime(freq,t);if(end)o.frequency.exponentialRampToValueAtTime(end,t+duration);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.00011,gain*state.volume),t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(audioContext.destination);o.start(t);o.stop(t+duration+.015);}
function soundEffect(kind){if(state.muted)return;unlockAudio();if(kind==='start'){tone(440,.15,'triangle',.07);tone(660,.23,'sine',.09,.15);}else if(kind==='coin'){tone(730,.12,'sine',.09);tone(1090,.2,'sine',.08,.12);}else if(kind==='jump'){tone(410,.13,'sine',.055,0,690);}else if(kind==='success'){tone(490,.13,'sine',.08);tone(680,.13,'sine',.08,.13);tone(880,.26,'sine',.08,.27);}else if(kind==='wrong'){tone(350,.23,'triangle',.075,0,190);}else if(kind==='hit'){tone(140,.23,'sawtooth',.07,0,85);}else if(kind==='click')tone(800,.06,'triangle',.05);}
function startMusic(){if(musicTimer||state.muted||!audioContext)return;let tick=0;const chords=[[196,247,294],[174,220,261],[220,261,330],[196,247,294]];const beat=()=>{if(state.mode==='game'&&!state.paused&&!state.jobActive&&!state.modalActive&&!state.muted){const chord=chords[Math.floor(tick/3)%chords.length];tone(chord[tick%3]/2,1.4,'sine',.01);tone(chord[(tick+1)%3],.43,'triangle',.009);tick++;}};musicTimer=setInterval(beat,730);}
function toggleSound(){state.muted=!state.muted;$('#sound-toggle').innerHTML=state.muted?ICON_MUTE:ICON_SOUND;$('#sound-toggle').title=state.muted?'Nyalakan suara':'Matikan suara';if(soundPlaying&&state.muted){soundPlaying.pause();soundPlaying.currentTime=0;}if(state.muted){if(bgMusic)bgMusic.pause();}else{unlockAudio();soundEffect('coin');}showToast(state.muted?'Suara dimatikan':'Suara aktif');}
async function playDevice(sound){if(soundPlaying){soundPlaying.pause();soundPlaying.currentTime=0;}if(state.muted){state.muted=false;$('#sound-toggle').innerHTML=ICON_SOUND;}unlockAudio();const a=new Audio(SOUND_FILES[sound]);a.volume=Math.min(1,state.volume*.95+.25);soundPlaying=a;try{await a.play();}catch(err){console.warn('Gagal memutar file bunyi:',err);if(sound==='post')tone(900,.28,'sine',.2);else if(sound==='ups'){[0,.4,.8].forEach(d=>tone(680,.18,'square',.08,d));}else if(sound==='disconnect'){tone(780,.17,'sine',.14,0,450);tone(450,.21,'triangle',.14,.23,250);}else tone(1230,.04,'triangle',.12);showToast('Memainkan bunyi simulasi cadangan');}}

function haltGameForMission(){clearInput();state.jobActive=true;state.paused=false;}
function openJob(){if(state.jobActive||state.results.length>=16)return;haltGameForMission();currentTask=CODE_INDEX.get(state.order[state.results.length]);taskSubmitted=false;chosenToken=null;dragInfo=null;ui.missionCard.dataset.region=String(Math.min(3,Math.floor(state.results.length/4)));renderJob();ui.missionCard.scrollTop=0;ui.mission.classList.remove('hidden');ui.missionCard.scrollTop=0;requestAnimationFrame(()=>{if(state.jobActive){ui.missionCard.scrollTop=0;ui.mission.scrollTop=0;refreshMissionScrollHint();}});$('#corner-caption').textContent='BANTU WARGA · JAWAB LANGSUNG';soundEffect('click');}
function renderJob(){const q=currentTask;if(!q)return;let body='';
 if(q.kind==='visual'){body=`<div class="job-section-label"><span class="section-dot"></span>Amati gambar perangkat, lalu pilih jawabannya</div><div class="choice-grid choice-grid-unlabeled">${q.options.map(([label,type],i)=>`<button type="button" class="choice-card image-only-option" data-answer="${sanitize(label)}" aria-label="Pilih ilustrasi nomor ${i+1}"><span class="choice-number">0${i+1}</span><span class="device-frame" aria-hidden="true">${svgDevice(type).replace(/alt="[^"]*"/g,'alt=""')}</span></button>`).join('')}</div>`;}
 if(q.kind==='audio'){body=`<div class="sound-player"><div class="sound-display"><span class="sound-disc">${stationSymbol('audio')}</span><div class="audio-bars" aria-hidden="true">${Array.from({length:25},(_,i)=>`<i style="--i:${i};--h:${8+((i*23)%24)}px"></i>`).join('')}</div></div><div class="sound-controls"><button class="play-sound" id="play-device">${stationSymbol('audio')} Putar suara perangkat</button><small>Bunyi simulasi • boleh diputar ulang sebelum menjawab</small></div></div><div class="choice-small">${q.options.map((o,i)=>`<button data-answer="${sanitize(o)}"><span class="option-letter">${String.fromCharCode(65+i)}</span>${sanitize(o)}</button>`).join('')}</div>`;}
 if(q.kind==='read'){body=`<div class="reading reading-paper"><span class="read-icon">${stationSymbol('read')}</span><div><small>CATATAN DARI WARGA</small><p>${sanitize(q.passage)}</p></div></div><div class="choice-small">${q.options.map((o,i)=>`<button data-answer="${sanitize(o)}"><span class="option-letter">${String.fromCharCode(65+i)}</span>${sanitize(o)}</button>`).join('')}</div>`;}
 if(q.kind==='type'){body=`<div class="typing-task-v4"><div class="type-illustration"><div class="type-art-label">PERANGKAT DI LOKASI</div>${svgDevice(q.image)}</div><form id="type-form" class="type-answer-form"><label class="type-instruction" for="answer-text">Tulis nama perangkat menurutmu</label><div class="typing-row"><input id="answer-text" autocomplete="off" placeholder="Boleh menulis jawaban apa saja" maxlength="60" aria-label="Jawaban teks"/><button class="btn btn-dark" type="submit">Kirim jawaban ↗</button></div><p class="typing-hint">Boleh salah ketik atau salah jawab. Setelah dinilai, perjalanan tetap lanjut.</p></form></div>`;}
 if(q.kind==='practice'){body=`<div class="practice-hint"><span class="practice-hand">${stationSymbol('practice')}</span>Seret benda ke tempatnya, atau ketuk benda lalu ketuk kotak. Cukup sekali menjawab.</div><div class="practice-workspace">${q.art?.length?`<div class="practice-art">${q.art.map((a,i)=>`<div class="practice-device">${svgDevice(a)}</div>`).join('<span class="practice-link">↔</span>')}</div>`:''}<div class="practice-workspace-main"><div class="job-section-label">Pilih alat atau perangkat</div><div class="token-box">${q.tokens.map(t=>`<button draggable="true" data-token="${sanitize(t)}" class="token"><span class="token-img">${tokenVisual(t)}</span><span>${sanitize(t)}</span></button>`).join('')}</div><div class="job-section-label">Tempatkan pada kotak</div><div class="slots">${q.slots.map((slot,i)=>`<button class="slot" data-slot="${i}"><small>${sanitize(slot)}</small><b>+ Letakkan</b></button>`).join('')}</div><button id="submit-practice" class="btn btn-dark practice-submit">Kirim hasil praktik ↗</button></div></div>`;}
 const region=REGIONS[Math.min(3,Math.floor(state.results.length/4))];
 const idx=String(state.results.length+1).padStart(2,'0');
 const clientName=sanitize(q.client),place=sanitize(q.place);
 ui.missionCard.innerHTML=`<div class="mission-vista" style="--mission-bg:url('assets/${region.image}')"><div class="mission-vista-left"><span class="mission-vista-tag">MISI ${idx} / 16</span><span class="mission-vista-location">${sanitize(region.title)} • ${place}</span></div><span class="mission-vista-mark mission-brandmark"><img src="assets/brand-badge-small.webp" alt="" /></span></div><div class="mission-head"><div class="mission-agent"><span class="client-avatar">${stationSymbol('visual')}</span><div><b>${clientName} membutuhkan bantuanmu</b><small>${sanitize(q.story)}</small></div></div><div class="job-reward"><small>UPAH MISI</small><b>+ ${rupiah(PAY_PER_JOB)}</b></div></div><div class="mission-body"><h2>${sanitize(q.ask)}</h2>${body}<div class="mission-footer"><button class="hint-toggle" id="hint-toggle" type="button">✧ Butuh petunjuk?</button><span class="one-try-note">Satu jawaban • salah tetap lanjut</span></div><p class="reading hidden" id="hint-box">${sanitize(q.tip)}</p><div id="answer-feedback" aria-live="polite"></div></div>`;
 ui.missionCard.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{ui.missionCard.querySelectorAll('[data-answer]').forEach(x=>x.classList.remove('chosen'));b.classList.add('chosen');answerJob(b.dataset.answer===q.answer); }));
 $('#hint-toggle').addEventListener('click',()=>$('#hint-box').classList.toggle('hidden'));
 if(q.kind==='audio')$('#play-device').addEventListener('click',()=>{const visual=ui.missionCard.querySelector('.sound-player');visual?.classList.add('is-playing');setTimeout(()=>visual?.classList.remove('is-playing'),1800);playDevice(q.sound);});
 if(q.kind==='type'){$('#type-form').addEventListener('submit',e=>{e.preventDefault();answerJob(checkTyped($('#answer-text').value,q.accepted));});setTimeout(()=>$('#answer-text')?.focus({preventScroll:true}),90);}
 if(q.kind==='practice')wirePractice(q);
}
function wirePractice(q){const placements=new Array(q.slots.length).fill(null);let activeToken=null;const redraw=()=>{ui.missionCard.querySelectorAll('[data-token]').forEach(b=>{b.classList.toggle('selected',b.dataset.token===activeToken);b.classList.toggle('used',placements.includes(b.dataset.token));});ui.missionCard.querySelectorAll('[data-slot]').forEach(b=>{const i=Number(b.dataset.slot);b.classList.toggle('filled',Boolean(placements[i]));b.querySelector('b').textContent=placements[i]||'+ Tempatkan';});};
 const assign=(index,token)=>{if(taskSubmitted||!q.tokens.includes(token))return;const idx=placements.indexOf(token);if(idx>=0)placements[idx]=null;placements[index]=token;activeToken=null;redraw();soundEffect('click');};
 ui.missionCard.querySelectorAll('[data-token]').forEach(b=>{b.addEventListener('click',()=>{activeToken=b.dataset.token;redraw();});b.addEventListener('dragstart',e=>{activeToken=b.dataset.token;e.dataTransfer.setData('text/plain',activeToken);e.dataTransfer.effectAllowed='move';});
  b.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'||taskSubmitted)return;activeToken=b.dataset.token;dragInfo={id:e.pointerId,name:activeToken,x:e.clientX,y:e.clientY,element:null};b.setPointerCapture(e.pointerId);redraw();});
  b.addEventListener('pointermove',e=>{if(!dragInfo||dragInfo.id!==e.pointerId)return;const delta=Math.abs(e.clientX-dragInfo.x)+Math.abs(e.clientY-dragInfo.y);if(delta<8)return;if(!dragInfo.element){dragInfo.element=el('div','drag-ghost',sanitize(dragInfo.name));document.body.append(dragInfo.element);}dragInfo.element.style.left=`${e.clientX}px`;dragInfo.element.style.top=`${e.clientY}px`;});
  b.addEventListener('pointerup',e=>{if(!dragInfo||dragInfo.id!==e.pointerId)return;const token=dragInfo.name;const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-slot]');dragInfo.element?.remove();dragInfo=null;if(target&&ui.missionCard.contains(target))assign(Number(target.dataset.slot),token);});
  b.addEventListener('pointercancel',()=>{dragInfo?.element?.remove();dragInfo=null;});
 });
 ui.missionCard.querySelectorAll('[data-slot]').forEach(b=>{b.addEventListener('click',()=>{const i=Number(b.dataset.slot);if(activeToken)assign(i,activeToken);else if(placements[i]){placements[i]=null;redraw();}});b.addEventListener('dragover',e=>{e.preventDefault();});b.addEventListener('drop',e=>{e.preventDefault();assign(Number(b.dataset.slot),e.dataTransfer.getData('text/plain'));});});
 $('#submit-practice').addEventListener('click',()=>answerJob(q.expected.every((t,i)=>placements[i]===t)));
}
function hideAnswerOverlay(){
 clearTimeout(feedbackTimer);
 answerOverlayOpen=false;
 if(ui.answerLayer)ui.answerLayer.classList.add('hidden');
}
function finishAnsweredJob(){
 if(!answerOverlayOpen)return;
 hideAnswerOverlay();
 ui.mission.classList.add('hidden');
 state.jobActive=false;
 currentTask=null;
 $('#corner-caption').textContent='TEMUKAN POS PEKERJAAN BERIKUTNYA';
 if(state.results.length===16)showToast('16 pekerjaan selesai! Lanjutkan menuju gerbang hasil.');
 else showToast(`Tabungan ${rupiah(state.money)} dari target ${rupiah(TARGET)}`);
 safelySave();
}
function showAnswerOverlay(correct,task,earned){
 answerOverlayOpen=true;
 const answer=task.kind==='practice'?task.expected.join(' → '):task.answer;
 const total=Math.round(state.money/TARGET*100);
 ui.answerCard.className=`answer-card ${correct?'is-correct':'is-wrong'}`;
 ui.answerCard.innerHTML=`
  <img class="answer-brandmark" src="assets/brand-badge-small.webp" alt="" /><div class="answer-result-symbol" aria-hidden="true">${correct?'✓':'!'}</div>
  <div class="answer-result-kicker">${correct?'MISI BERHASIL':'MISI TETAP SELESAI'}</div>
  <h2 id="answer-title">${correct?'Jawaban benar!':'Belum tepat, tetap semangat!'}</h2>
  <p class="answer-subtitle">${correct?'Kamu berhasil membantu jaringan warga.':'Belajar dari kesalahan juga bagian dari perjalanan.'}</p>
  <div class="answer-explanation"><span>KENAPA?</span><p>${sanitize(task.tip)}</p>${correct?'':`<div class="answer-correct-key">Jawaban yang tepat: <strong>${sanitize(answer)}</strong></div>`}</div>
  <div class="answer-earnings"><div class="answer-earnings-label">UPAH PEKERJAAN</div><strong>+ ${rupiah(earned)}</strong><div class="answer-earnings-breakdown">Upah ${rupiah(PAY_PER_JOB)}${correct?` · Bonus benar ${rupiah(BONUS_CORRECT)}`:' · Tanpa bonus benar'}</div></div>
  <div class="answer-savings"><div><span>Tabungan menuju haji</span><strong>${rupiah(state.money)} <small>/ ${rupiah(TARGET)}</small></strong></div><b>${total}%</b></div>
  <div class="answer-savings-track"><span style="width:${total}%"></span></div>
  <button class="answer-next" id="answer-continue" type="button">Lanjutkan perjalanan <span aria-hidden="true">→</span></button>
  <p class="answer-note">Tabungan merupakan simulasi permainan, bukan biaya haji sebenarnya.</p>
 `;
 ui.answerLayer.classList.remove('hidden');
 requestAnimationFrame(()=>ui.answerCard.querySelector('#answer-continue')?.focus({preventScroll:true}));
}
function answerJob(correct){
 if(taskSubmitted)return;
 const q=currentTask;
 if(!q)return;
 taskSubmitted=true;
 const earned=PAY_PER_JOB+(correct?BONUS_CORRECT:0);
 state.results.push({id:q.id,correct:Boolean(correct)});
 state.money=Math.min(TARGET,state.money+earned);
 updateHUD();updateFlags();safelySave();
 soundEffect(correct?'success':'wrong');
 if(soundPlaying){soundPlaying.pause();soundPlaying.currentTime=0;}
 ui.missionCard.querySelectorAll('button,input').forEach(b=>b.disabled=true);
 showAnswerOverlay(correct,q,earned);
}
function pauseGame(){if(state.mode!=='game'||state.jobActive||state.modalActive)return;state.paused=!state.paused;clearInput();$('#pause-toggle').innerHTML=state.paused?ICON_PLAY:ICON_PAUSE;if(state.paused){if(bgMusic)bgMusic.pause();openInfo('jeda');}else{closeInfo();syncBgMusic();}}
function hitHazard(){if(state.invulnerable>0||state.jobActive)return;state.health--;state.invulnerable=1.6;soundEffect('hit');updateHUD();if(state.health<=0){state.health=0;state.mode='game';ui.gameover.classList.remove('hidden');clearInput();}else{state.x=Math.max(65,FLAG_START+(state.results.length-1)*FLAG_GAP+66);state.y=0;state.vy=0;showToast('Awas gangguan jaringan! Energi -1.');}safelySave();}
function retry(){state.health=3;state.invulnerable=1.6;state.x=Math.max(65,FLAG_START+(state.results.length-1)*FLAG_GAP+65);state.y=0;state.vy=0;ui.gameover.classList.add('hidden');updateHUD();showToast('Energi pulih. Kamu bisa melanjutkan!');}
function tick(time){const delta=Math.min(.038,(time-lastFrame)/1000||.016);lastFrame=time;
 if(state.mode==='game'&&!state.paused&&!state.modalActive&&!state.jobActive&&!(!ui.gameover.classList.contains('hidden'))){
  const velocity=(Number(input.right)-Number(input.left))*255;
  const prevX=state.x;state.x=clamp(state.x+velocity*delta,50,WORLD_WIDTH-100);
  if(input.jump&&state.y<.01){state.vy=720;input.jump=false;soundEffect('jump');}
  state.vy-=1950*delta;state.y=Math.max(0,state.y+state.vy*delta);if(state.y===0)state.vy=0;
  state.invulnerable=Math.max(0,state.invulnerable-delta);
  for(const o of stageCoins){if(!state.coins.has(o.i)&&Math.abs(state.x-o.x)<27&&state.y<105){state.coins.add(o.i);o.node.style.display='none';state.money=Math.min(TARGET,state.money+COIN_MONEY);soundEffect('coin');updateHUD();safelySave();}}
  for(const h of stageHazards){const hx=h.x+(h.kind==='mite'?Math.sin(time*.002+h.phase)*18:0);h.node.style.left=`${hx}px`;if(Math.abs(state.x-hx)<33&&state.y<43){hitHazard();break;}}
  const next=state.results.length;if(next<16&&Math.abs(state.x-(FLAG_START+next*FLAG_GAP))<27&&state.y<65)openJob();
  if(next===16&&state.x>=FINISH_X-35)showFinale();
  if(Math.abs(prevX-state.x)>.05&&Math.floor(prevX/REGION_WIDTH)!==Math.floor(state.x/REGION_WIDTH)){updateHUD();showToast(`Memasuki ${REGIONS[Math.min(3,Math.floor(state.x/REGION_WIDTH))].title}`);}
  ui.player.classList.toggle('running',Math.abs(velocity)>0&&state.y===0);ui.player.classList.toggle('jumping',state.y>0);
  const pose=state.y>0?'jump':Math.abs(velocity)>0?'run':'idle';
  const sprite=ui.player.querySelector('img');
  if(sprite&&sprite.dataset.pose!==pose){sprite.dataset.pose=pose;sprite.src=ASSET_POSES[pose];}
  ui.player.style.opacity=state.invulnerable>0&&Math.floor(time/100)%2===0?'.65':'1';
  if(velocity<0)state.facing=-1;else if(velocity>0)state.facing=1;
  ui.player.style.transform=`translateX(-50%) scaleX(${state.facing})`;
 }
 state.sceneWidth=ui.stage.clientWidth||1000;
 const cam=clamp(state.x-state.sceneWidth*.35,0,Math.max(0,WORLD_WIDTH-state.sceneWidth));state.camera=cam;ui.world.style.transform=`translate3d(${-cam}px,0,0)`;
 ui.player.style.left=`${state.x-cam}px`;ui.player.style.bottom=`${76+state.y}px`;
 requestAnimationFrame(tick);
}

function restartFinaleAnimation(){
 if(!ui.finale)return;
 ui.finale.classList.remove('finale-animate');
 // Reading offsetWidth restarts entrance animations when the player replays the scene.
 void ui.finale.offsetWidth;
 ui.finale.classList.add('finale-animate');
}
function showFinale(){
 if(state.results.length!==16)return;
 clearInput();hideAnswerOverlay();
 state.mode='finale';state.jobActive=false;state.paused=false;
 ui.mission.classList.add('hidden');ui.result.classList.add('hidden');ui.home.classList.add('hidden');ui.gameover.classList.add('hidden');
 $('#shell').classList.remove('is-home','is-result');$('#shell').classList.add('is-finale');
 $('#finale-balance').textContent=rupiah(state.money);
 const goalPct=Math.round(state.money/TARGET*100);
 $('#finale-goal-text').textContent=state.money>=TARGET?'Target simulasi Rp100 juta tercapai!':`${goalPct}% dari target simulasi ${rupiah(TARGET)}`;
 $('#finale-money-fill').style.width=`${goalPct}%`;
 ui.finale.classList.remove('hidden');
 restartFinaleAnimation();
 if(!state.muted){unlockAudio();tone(523,.35,'sine',.06,0);tone(659,.35,'sine',.06,.18);tone(784,.56,'sine',.08,.36);}
 safelySave();
}
function finishFinale(){
 if(state.mode!=='finale')return;
 ui.finale.classList.add('hidden');
 showResults(true);
}
function scores(){const out={V:0,A:0,R:0,K:0};for(const r of state.results){const q=CODE_INDEX.get(r.id);if(q&&r.correct)out[q.cat]+=25;}return out;}
function scoreProfile(){
 const scoresByCat=scores(),highest=Math.max(...Object.values(scoresByCat)),correct=state.results.filter(r=>r.correct).length;
 const leaders=highest>0?Object.keys(scoresByCat).filter(k=>scoresByCat[k]===highest):[];
 const label=leaders.length===0?'Belum ada dominasi':leaders.length===1?CATS[leaders[0]].name:`Seimbang: ${leaders.map(k=>CATS[k].name).join(' & ')}`;
 const description=leaders.length===0?'Belum ada jawaban benar. Coba lagi dan jelajahi semua bentuk aktivitas.':leaders.length===1?DOMINANT_HELP[leaders[0]]:`Skor tertinggi diperoleh secara setara pada ${leaders.map(k=>CATS[k].name).join(', ')}.`;
 return {scoresByCat,highest,leaders,correct,label,description};
}
function showResults(force=false){
 if(state.done&&!force)return;
 $('#shell').classList.add('is-result');$('#shell').classList.remove('is-finale');ui.finale.classList.add('hidden');state.done=true;state.mode='result';clearInput();
 hideAnswerOverlay();ui.mission.classList.add('hidden');ui.gameover.classList.add('hidden');ui.result.classList.remove('hidden');
 updateHUD();safelySave();soundEffect('success');
 const profile=scoreProfile(),highest=profile.highest,leaders=profile.leaders;
 const percentDescription=leaders.length>1?`Masing-masing ${highest}%`:`${highest}%`;
 ui.result.innerHTML=`<div class="result-shell result-shell-v73">
  <div class="result-top result-top-v73"><div><div class="result-ident"><img src="assets/brand-badge-small.webp" class="result-brandmark" alt="" /><div class="result-tag">✦ LAPORAN PERJALANAN • 16 PEKERJAAN SELESAI</div></div><h1>Perjalanan hebat, ${sanitize(state.name||'Teknisi')}!</h1><p>Ini hasil tantangan jaringan yang sudah kamu selesaikan.</p></div><button class="icon-btn" id="result-home" title="Kembali ke beranda" aria-label="Kembali ke beranda">⌂</button></div>
  <div class="result-columns result-columns-v73"><section class="result-panel result-profile-panel v73-profile">
   <div class="v73-feature"><div class="v73-feature-copy"><span class="v73-kicker">AKTIVITAS PALING MENONJOL</span><h2>${sanitize(profile.label)}</h2><p>${sanitize(profile.description)}</p><div class="v73-feature-help">${leaders.length===0?'Belum ada nilai kategori':leaders.length>1?'Beberapa aktivitas memperoleh nilai sama':'Terbaik dari empat tantangan aktivitas'}</div></div>
   <div class="v73-gauge" style="--gauge:${highest}%" role="img" aria-label="Persentase tertinggi ${highest} persen"><div class="v73-gauge-inner"><strong>${highest}%</strong><small>${leaders.length>1?'masing-masing':'tertinggi'}</small></div></div></div>
   <div class="v73-chart-head"><div><h2>Profil aktivitas belajarmu</h2><p>Persentase jawaban benar dari 4 soal di setiap kategori.</p></div><span class="v73-chart-icon" aria-hidden="true">▥</span></div>
   <div class="v73-meters">${Object.entries(CATS).map(([key,c])=>`<div class="v73-meter"><div class="v73-meter-line"><span class="v73-meter-name"><i style="background:${c.color}"></i>${sanitize(c.name)}</span><span class="v73-meter-meta"><small>${profile.scoresByCat[key]/25}/4 benar</small><strong>${profile.scoresByCat[key]}%</strong></span></div><div class="v73-meter-track"><div style="width:${profile.scoresByCat[key]}%;background:${c.color}"></div></div></div>`).join('')}</div>
   <div class="v73-summary"><span aria-hidden="true">✦</span><p><b>Perjalanan tuntas!</b> Semua aktivitas telah dicoba. Gunakan hasilnya untuk berdiskusi dengan guru tentang cara belajar yang paling membantu.</p></div><p class="v73-caveat">*Persentase menunjukkan performa menjawab pada game ini, bukan ukuran atau diagnosis gaya belajar yang permanen.</p>
  </section>
  <aside class="result-side v73-side"><section class="result-panel v73-journey"><span class="v73-side-kicker">PENCAPAIAN PETUALANGAN</span><div class="v73-savings"><span class="v73-savings-icon" aria-hidden="true">✦</span><div><small>Tabungan simulasi · Target Rp100 juta</small><strong>${rupiah(state.money)}</strong><span class="v75-goal-percent">${Math.round(state.money/TARGET*100)}% target tercapai</span></div></div><div class="v73-metric-grid"><div><b>${profile.correct}/16</b><span>Jawaban benar</span></div><div><b>16/16</b><span>Misi selesai</span></div><div><b>${Math.round(profile.correct/16*100)}%</b><span>Nilai keseluruhan</span></div><div><b>${percentDescription}</b><span>Aktivitas tertinggi</span></div></div><div class="v73-route"><span>01 Kampung</span><span>02 Oasis</span><span>03 Kota</span><span>04 Gerbang</span></div></section>
   <section class="result-panel v73-download"><h2>Simpan kartu hasil</h2><p>Unduh sertifikat hasil untuk diberikan kepada guru atau disimpan.</p><button class="finale-result-rewatch" id="revisit-finale" type="button">✧ Tonton lagi adegan Ka'bah</button><div class="v73-actions"><button class="btn btn-dark" id="save-png">↓ Unduh PNG</button><button class="btn btn-dark" id="save-jpg">↓ Unduh JPG</button></div><div class="v73-actions v73-actions-secondary"><button class="btn btn-ghost" id="back-home">⌂ Beranda</button><button class="btn btn-accent" id="replay">↻ Main lagi</button></div></section>
  </aside></div></div>`;
 $('#revisit-finale').addEventListener('click',showFinale);$('#save-png').addEventListener('click',()=>downloadResult('png'));$('#save-jpg').addEventListener('click',()=>downloadResult('jpg'));
 $('#back-home').addEventListener('click',home);$('#result-home').addEventListener('click',home);
 $('#replay').addEventListener('click',()=>{home();$('#player-name').value=state.name;newGame();});
}
const BRAND_BADGE_IMAGE=new Image();BRAND_BADGE_IMAGE.src='assets/brand-badge-small.webp';
function downloadResult(format){
 const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');
 if(!ctx){showToast('Browser tidak dapat membuat gambar hasil.');return;}
 canvas.width=1400;canvas.height=980;
 const profile=scoreProfile();const W=1400,H=980;
 const gradient=ctx.createLinearGradient(0,0,W,H);gradient.addColorStop(0,'#071d32');gradient.addColorStop(.62,'#0c4558');gradient.addColorStop(1,'#0b6b67');
 ctx.fillStyle=gradient;ctx.fillRect(0,0,W,H);
 const rounded=(x,y,w,h,r,color)=>{ctx.fillStyle=color;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill();};
 const text=(value,x,y,font,color,maxWidth)=>{ctx.font=font;ctx.fillStyle=color;ctx.fillText(String(value),x,y,maxWidth||W);};
 const wrap=(value,width,font)=>{
  ctx.font=font;const words=String(value).split(/\s+/).filter(Boolean);const out=[];let line='';
  for(const word of words){const next=line?`${line} ${word}`:word;if(line&&ctx.measureText(next).width>width){out.push(line);line=word;}else{line=next;}}
  if(line)out.push(line);return out;
 };
 const lines=(value,x,y,width,font,color,spacing=28,maxLines=3)=>{
  let parts=wrap(value,width,font);const count=Math.min(parts.length,maxLines);
  for(let i=0;i<count;i++){let label=parts[i];if(i===maxLines-1&&parts.length>maxLines)label=label.replace(/\s+\S+$/,'')+'…';text(label,x,y+i*spacing,font,color,width);}
  return count;
 };
 // Background decoration stays separate from all type areas.
 ctx.lineWidth=4;ctx.strokeStyle='rgba(154,233,209,.13)';
 for(let radius=220;radius<500;radius+=95){ctx.beginPath();ctx.arc(1325,70,radius,0,2*Math.PI);ctx.stroke();}
 rounded(64,47,1272,91,23,'#123d50');rounded(67,49,9,87,5,'#f2c36b');
 if(BRAND_BADGE_IMAGE.complete&&BRAND_BADGE_IMAGE.naturalWidth)ctx.drawImage(BRAND_BADGE_IMAGE,84,58,64,64);
 text('TUKANG WIFI NAIK HAJI',165,105,'bold 31px Arial','#f7fbfb',495);
 ctx.textAlign='right';text('KARTU HASIL SISWA',1302,102,'bold 21px Arial','#f7d78d',480);ctx.textAlign='left';
 text('PERJALANAN SELESAI',70,190,'bold 19px Arial','#a0e6d5');
 lines(state.name||'Teknisi WiFi',70,242,1180,'bold 44px Arial','#fff',47,1);
 text(`16 misi selesai  •  ${profile.correct} jawaban benar`,70,290,'23px Arial','#c5dfe5');
 // Gold signature panel. No font is ever layered over an emblem.
 rounded(64,320,1272,240,25,'#fff3d8');rounded(86,346,9,187,5,'#c79543');
 text('AKTIVITAS PALING MENONJOL',119,377,'bold 20px Arial','#986a25');
 const chartNames=profile.leaders.map(k=>CATS[k].name);
 const shortTitle=profile.leaders.length>1?`Dominan campuran (${profile.leaders.length} aktivitas)`:profile.label;
 lines(shortTitle,119,424,860,'bold 37px Arial','#133d50',42,2);
 const explanation=profile.leaders.length>1?`Skor tertinggi sama pada: ${chartNames.join(', ')}.`:profile.description;
 lines(explanation,119,482,860,'19px Arial','#486778',27,2);
 rounded(1095,362,210,161,24,'#143d51');
 ctx.textAlign='center';text(`${profile.highest}%`,1200,434,'bold 55px Arial','#ffd58a',165);
 lines(profile.leaders.length>1?'masing-masing':'per kategori',1200,468,160,'18px Arial','#dcefe9',23,1);ctx.textAlign='left';
 // Bar chart: 4 visibly separated rows, footnote safely below final row.
 rounded(64,584,1272,295,25,'#f8fcf9');
 text('PERFORMA PADA EMPAT AKTIVITAS',97,628,'bold 25px Arial','#153d51');
 ['V','A','R','K'].forEach((key,i)=>{
  const cat=CATS[key],score=profile.scoresByCat[key],y=673+i*48;
  text(cat.name,99,y,'bold 20px Arial','#254a5b',245);
  rounded(397,y-18,726,17,8,'#e0ebec');if(score>0)rounded(397,y-18,726*score/100,17,8,cat.color);
  ctx.textAlign='right';text(`${score}%`,1286,y,'bold 22px Arial','#173e4f',104);ctx.textAlign='left';
 });
 text('Skor tiap kategori: jumlah benar dari 4 tugas × 25%.',99,858,'17px Arial','#6d8890',980);
 text('TABUNGAN HAJI (SIMULASI) · TARGET Rp100 JUTA',74,916,'bold 18px Arial','#b0dbd7');
 text(rupiah(state.money),74,951,'bold 32px Arial','#ffcf79',495);
 lines('Persentase ini hanya menunjukkan performa dalam permainan, bukan diagnosis gaya belajar permanen.',685,925,633,'17px Arial','#d2e7e6',23,2);
 canvas.toBlob(blob=>{
  if(!blob){showToast('Unduh gagal. Coba kembali dari browser lain.');return;}
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;
  a.download=`hasil-petualangan-${(state.name||'teknisi').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-')}.${format}`;
  document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);
 },format==='jpg'?'image/jpeg':'image/png',.95);
}

function infoHtml(kind){const common='<p>Gunakan menu ini untuk memahami cara bermain serta materi sebelum atau sesudah mengerjakan misi. Tidak ada soal yang harus dibuka melalui menu ini.</p>';
 const pieces={
 tujuan:`<div class="mini-card"><b>Tujuan pembelajaran</b><p>Setelah bermain, siswa mampu mengenali gambar perangkat jaringan dasar, memahami fungsi utamanya, mengenali contoh bunyi terkait perangkat, membaca informasi singkat, dan menyusun koneksi sederhana.</p></div><div class="mini-card"><b>Ruang lingkup</b><p>Router, switch, kabel Ethernet, konektor RJ45, koneksi WiFi, perangkat komputer, dan simulasi bunyi dasar.</p></div><p>Media ini berfungsi sebagai pengenalan awal, bukan ujian sertifikasi teknisi.</p>`,
 peta:`<h3>Peta konsep materi</h3><div class="mini-card"><b>1. Kenali perangkat</b><p>Router • Switch • Komputer • Kabel LAN • RJ45</p></div><div class="mini-card"><b>2. Pahami koneksi</b><p>Perangkat terhubung menggunakan kabel Ethernet atau sinyal WiFi.</p></div><div class="mini-card"><b>3. Amati tanda kerja</b><p>Gambar perangkat • Status jaringan • Contoh bunyi komputer, UPS dan konektor.</p></div><div class="mini-card"><b>4. Berlatih dan mengevaluasi</b><p>Pilih, dengarkan, baca/tulis, lalu susun perangkat pada mini game.</p></div>`,
 siswa:`<h3>Petunjuk bermain</h3><p><b>Laptop:</b> A/D atau tombol ←/→ untuk berjalan, Spasi untuk melompat. Lepaskan tombol agar berhenti. <b>HP:</b> gunakan tiga tombol sentuh yang muncul saat permainan dimulai.</p><ol><li>Masukkan nama dan pilih <b>Mulai perjalanan</b>.</li><li>Gunakan <b>← / →</b> atau <b>A / D</b> untuk bergerak, dan <b>Spasi</b> untuk melompat. Pada HP, gunakan tombol di bawah.</li><li>Datangi bendera layanan. Panggilan kerja akan muncul otomatis.</li><li>Kerjakan tugas dengan memilih gambar, mendengarkan bunyi, membaca/menulis, atau menyeret benda.</li><li>Jawaban benar/salah memunculkan penjelasan dan hadiah. Ketuk Lanjutkan perjalanan untuk melanjutkan; jawaban salah tetap mendapat upah dasar.</li><li>Kumpulkan tabungan simulasi menuju target Rp100 juta: upah Rp5 juta per misi, bonus benar Rp1 juta, dan koin Rp250 ribu.</li><li>Selesaikan 16 pekerjaan, lalu capai gerbang akhir untuk mengunduh hasil PNG/JPG.</li></ol><div class="guide-sound-setting"><label for="volume-slider">Volume suara permainan <b id="volume-indicator">55%</b></label><input id="volume-slider" type="range" min="0" max="100" step="5" value="55" aria-label="Volume suara permainan" /></div><p>Tips: kamu dapat mengulang bunyi perangkat kapan saja sebelum menjawab. Coba kembali jika terkena rintangan; progres tetap tersimpan.</p>`,
 guru:`<h3>Panduan guru</h3><ol><li>Perlihatkan tujuan dan peta konsep terlebih dahulu.</li><li>Berikan kesempatan kepada siswa bermain mandiri selama sekitar 15–25 menit sesuai kondisi kelas.</li><li>Biarkan siswa mencoba berbagai interaksi tanpa memberi tahu label tugas VARK pada setiap soal.</li><li>Arahkan siswa mengunduh hasil PNG/JPG dan membagikannya sebagai dokumentasi.</li><li>Diskusikan jawaban benar/salah dan perangkat yang sulit dikenali, bukan hanya skor.</li></ol><p>Nilai empat aktivitas dihitung dari 4 tugas per kategori (benar = 25 poin untuk kategorinya, salah = 0). Hasil tidak memastikan gaya belajar tetap siswa.</p><p>Data hanya disimpan di browser perangkat ini; belum ada database kelas atau leaderboard daring.</p>`,
 rangkuman:`<h3>Rangkuman materi</h3><div class="mini-card"><b>Router</b><p>Perangkat yang meneruskan data antarjaringan; router nirkabel dapat menyediakan akses WiFi.</p></div><div class="mini-card"><b>Switch</b><p>Menghubungkan beberapa perangkat dalam jaringan lokal melalui port Ethernet.</p></div><div class="mini-card"><b>Kabel LAN & RJ45</b><p>Kabel Ethernet menghubungkan perangkat secara kabel; RJ45 adalah nama umum konektornya.</p></div><div class="mini-card"><b>WiFi</b><p>Memungkinkan perangkat terhubung tanpa kabel langsung menggunakan gelombang radio.</p></div>`,
 referensi:`<h3>Referensi materi</h3><p><a target="_blank" rel="noopener noreferrer" href="https://www.netacad.com/courses/networking-basics/how-routers-work?courseLang=en-US">Cisco Networking Academy — How Routers Work</a></p><p><a target="_blank" rel="noopener noreferrer" href="https://www.cloudflare.com/learning/network-layer/what-is-a-router/">Cloudflare Learning — What Is a Router?</a></p><p><a target="_blank" rel="noopener noreferrer" href="https://www.netacad.id/course/CCNA-Introduction-to-Networks">Networking Academy Indonesia — Introduction to Networks</a></p><h3>Sumber aset</h3><p>Maskot dan latar kawasan: aset ilustrasi khusus proyek yang disiapkan bersama kelompok, dioptimalkan menjadi WebP. Gambar perangkat: ilustrasi SVG mandiri. Audio: empat file simulasi bunyi perangkat (tidak mengklaim berasal dari model perangkat tertentu). Musik antarmuka: nada sintetis orisinal dari Web Audio API.</p>`,
 diskusi:`<h3>Refleksi & tanya guru</h3><p>Tulis hal yang belum dipahami atau pendapatmu tentang permainan. Catatan disimpan secara lokal dan bisa disalin/dibagikan. Ini belum berupa ruang obrolan langsung antar-pemain.</p><label for="reflection-note">Pertanyaan / refleksiku</label><textarea id="reflection-note" maxlength="1200" placeholder="Contoh: Apa bedanya router dan switch?" ></textarea><div class="action-row"><button class="btn btn-accent" id="save-note">Simpan catatan</button><button class="btn btn-ghost" id="share-note">Bagikan / salin untuk guru</button></div><small style="display:block;margin-top:10px;color:#77909c">Untuk diskusi realtime dan pemantauan semua siswa diperlukan backend/database tambahan.</small>`,
 jeda:`<h3>Permainan dijeda</h3><p>Ambil waktu istirahat. Progres jawaban dan tabunganmu tetap tersimpan di browser.</p><div class="action-row"><button class="btn btn-accent" id="resume-pause">▶ Lanjut bermain</button><button class="btn btn-ghost" id="restart-journey">↻ Mulai ulang perjalanan</button></div>`
 };
 return pieces[kind]||common;
}
function openInfo(kind){if(state.jobActive)return;state.modalActive=true;clearInput();ui.modal.classList.remove('hidden');const titles={tujuan:'Tujuan pembelajaran',peta:'Peta konsep',siswa:'Panduan siswa',guru:'Panduan guru',rangkuman:'Rangkuman materi',referensi:'Referensi & sumber',diskusi:'Refleksi & tanya guru',jeda:'Jeda permainan'};ui.modalContent.innerHTML=`<div class="dialog-head"><h2>${titles[kind]||'Informasi'}</h2><button class="close-btn" id="close-info" aria-label="Tutup">×</button></div>${infoHtml(kind)}`;
 $('#close-info').addEventListener('click',closeInfo);
 if(kind==='siswa'){const volume=$('#volume-slider');if(volume){volume.value=Math.round(state.volume*100);$('#volume-indicator').textContent=volume.value+'%';volume.addEventListener('input',()=>{state.volume=Number(volume.value)/100;$('#volume-indicator').textContent=volume.value+'%';if(!state.muted)syncBgMusic();});}}
 if(kind==='diskusi'){const box=$('#reflection-note');try{box.value=localStorage.getItem('tw-naik-haji-refleksi')||'';}catch{}$('#save-note').addEventListener('click',()=>{try{localStorage.setItem('tw-naik-haji-refleksi',box.value);}catch{}showToast('Catatan disimpan pada browser ini.');});$('#share-note').addEventListener('click',async()=>{const text=`Refleksi game Tukang WiFi Naik Haji oleh ${state.name||'Siswa'}:\n${box.value}`;try{if(navigator.share)await navigator.share({text,title:'Refleksi belajar jaringan'});else if(navigator.clipboard){await navigator.clipboard.writeText(text);showToast('Refleksi disalin. Kirimkan kepada guru.');}else showToast('Fitur berbagi tidak tersedia pada browser ini.');}catch(e){if(e.name!=='AbortError')showToast('Gagal membagikan catatan.');}});}
 if(kind==='jeda'){$('#resume-pause').addEventListener('click',()=>{state.paused=false;$('#pause-toggle').innerHTML=ICON_PAUSE;closeInfo();});$('#restart-journey').addEventListener('click',()=>{closeInfo();state.paused=false;home();newGame();});}
}
function closeInfo(){ui.modal.classList.add('hidden');state.modalActive=false;if(state.paused){state.paused=false;$('#pause-toggle').innerHTML=ICON_PAUSE;}if(!state.muted)syncBgMusic();}
function attachControls(){document.addEventListener('keydown',e=>{const focused=document.activeElement;const isTyping=focused&&['INPUT','TEXTAREA'].includes(focused.tagName);if(isTyping||state.mode!=='game'||state.jobActive||state.modalActive)return;if(['ArrowLeft','ArrowRight','Space','ArrowUp','KeyA','KeyD','KeyW'].includes(e.code))e.preventDefault();if(e.code==='ArrowLeft'||e.code==='KeyA')input.left=true;else if(e.code==='ArrowRight'||e.code==='KeyD')input.right=true;else if(['Space','ArrowUp','KeyW'].includes(e.code)&&!e.repeat)input.jump=true;});document.addEventListener('keyup',e=>{if(['ArrowLeft','KeyA'].includes(e.code))input.left=false;if(['ArrowRight','KeyD'].includes(e.code))input.right=false;});window.addEventListener('blur',clearInput);document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInput();});for(const [selector,key] of [['#left-btn','left'],['#right-btn','right'],['#jump-btn','jump']]){const b=$(selector);b.addEventListener('pointerdown',e=>{if(state.mode!=='game'||state.jobActive||state.modalActive||state.paused)return;e.preventDefault();b.setPointerCapture(e.pointerId);input[key]=true;b.classList.add('pressed');});const release=()=>{input[key]=false;b.classList.remove('pressed');};b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release);}}
function refreshMissionScrollHint(){
 const hint=document.getElementById('mission-scroll-hint');
 if(!hint)return;
 const c=ui.missionCard;
 const overflow=c.scrollHeight>c.clientHeight+10;
 const nextAction=c.querySelector('#submit-practice')||c.querySelector('.typing-row button')||c.querySelector('.choice-small button:last-child')||c.querySelector('.choice-grid .choice-card:last-child');
 const cardBox=c.getBoundingClientRect();
 const actionBox=nextAction?.getBoundingClientRect();
 const actionVisible=!!actionBox&&actionBox.top>=cardBox.top&&actionBox.bottom<=cardBox.bottom-6;
 const more=overflow&&!actionVisible&&c.scrollTop+c.clientHeight<c.scrollHeight-12;
 hint.classList.toggle('hidden',!more||ui.mission.classList.contains('hidden'));
}
function installMissionScrollHint(){
 const btn=document.createElement('button');
 btn.type='button';btn.id='mission-scroll-hint';
 btn.className='mission-scroll-hint hidden';
 btn.textContent='↓ Geser untuk lanjut';
 btn.setAttribute('aria-label','Gulir pertanyaan untuk melihat tombol jawaban');
 ui.mission.append(btn);
 btn.addEventListener('click',()=>ui.missionCard.scrollTo({top:ui.missionCard.scrollHeight,behavior:'smooth'}));
 ui.missionCard.addEventListener('scroll',refreshMissionScrollHint,{passive:true});
 window.addEventListener('resize',refreshMissionScrollHint);
}
function wireApp(){installMissionScrollHint();$('#finale-to-result').addEventListener('click',finishFinale);$('#finale-rewatch').addEventListener('click',restartFinaleAnimation);ui.answerLayer.addEventListener('click',e=>{if(e.target.closest('#answer-continue'))finishAnsweredJob();});ui.answerLayer.addEventListener('keydown',e=>{if(e.code==='Escape'&&answerOverlayOpen){e.preventDefault();finishAnsweredJob();}});$('#start-btn').addEventListener('click',newGame);$('#go-home').addEventListener('click',()=>{if(state.jobActive)return;home();});$('#open-guide').addEventListener('click',()=>openInfo('siswa'));$('#sound-toggle').addEventListener('click',toggleSound);$('#pause-toggle').addEventListener('click',pauseGame);$('#discussion-btn').addEventListener('click',()=>openInfo('diskusi'));$('#retry-btn').addEventListener('click',retry);document.querySelectorAll('[data-info]').forEach(b=>b.addEventListener('click',()=>openInfo(b.dataset.info)));ui.modal.addEventListener('click',e=>{if(e.target===ui.modal)closeInfo();});$('#player-name').addEventListener('keydown',e=>{if(e.key==='Enter')newGame();});attachControls();window.addEventListener('beforeunload',safelySave);setInterval(()=>{if(state.mode==='game'&&!state.jobActive&&!state.modalActive)safelySave();},3500);}
wireApp();renderWorld();updateHUD();tryRestore();requestAnimationFrame(tick);
