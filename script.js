/* =============================================
   SIAPA PENYUSUP? — Script Bersama (script.js)
   ============================================= */

// ─── Tema dan Objek ───────────────────────────
const THEMES = {
  "Dapur": [
    "Pisau","Wajan","Garpu","Kompor","Sendok",
    "Piring","Blender","Kulkas","Talenan","Spatula",
    "Mangkuk","Celemek","Penggorengan","Parutan"
  ],
  "Pantai": [
    "Pasir","Ombak","Payung Pantai","Kerang","Papan Selancar",
    "Kapal","Bintang Laut","Terumbu Karang","Tikar","Kacamata Hitam",
    "Pelampung","Pasir Putih","Perahu Karet","Ember Pasir"
  ],
  "Kantor": [
    "Komputer","Printer","Pulpen","Kalkulator","Stapler",
    "Proyektor","Papan Tulis","Meja Rapat","Kertas","Penggaris",
    "Amplop","Jam Dinding","Lemari Arsip","Kursi Putar"
  ],
  "Luar Angkasa": [
    "Roket","Bulan","Bintang","Astronot","Meteor",
    "Teleskop","Nebula","Satelit","Planet Mars","Pesawat Ulang-Alik",
    "Lubang Hitam","Oksigen","Modul Pendarat","Baju Astronot"
  ],
  "Sekolah": [
    "Buku Pelajaran","Pensil","Papan Tulis","Penghapus","Tas Sekolah",
    "Seragam","Ulangan","Kantin","Perpustakaan","Laboratorium",
    "Bangku","Rapor","Ekstrakurikuler","Peta Dunia"
  ],
  "Rumah Sakit": [
    "Jarum Suntik","Stetoskop","Tandu","Termometer","Obat",
    "Infus","Kursi Roda","Masker","Sarung Tangan","Ambulans",
    "Rontgen","Apoteker","Brankar","Plester"
  ],
  "Pasar": [
    "Timbangan","Kios","Sayuran","Dompet","Kantong Belanja",
    "Tukang Ikan","Buah Segar","Gerobak","Mie","Tempe",
    "Bumbu","Terpal","Keranjang Bambu","Tawar-Menawar"
  ],
  "Bioskop": [
    "Popcorn","Tiket","Cinepolis","XX1","Hollywood",
    "Trailer","Earphone","AC Dingin","Antrian","Kacamata 3D",
    "Coca Cola","Gelap","Subtitle","Sinema"
  ],
  "Film": [
    "Laskar Pelangi","Pengabdi Setan","Ada Apa Dengan Cinta?","Dilan 1990","Warkop DKI Reborn",
    "KKN di Desa Penari","Petualangan Sherina","Habibie & Ainun","Gundala","Ngeri-Ngeri Sedap",
    "Agak Laen","Filosofi Kopi","Cek Toko Sebelah","Sang Penari","Bumi Manusia",
    "Mencuri Raden Saleh","Siksa Kubur","Yowis Ben","Keluarga Cemara","Ayat-Ayat Cinta",
    "5 CM","Garuda di Dadaku","Jelangkung","Kuntilanak","The Raid",
    "The Raid 2: Berandal","Merantau","Headshot","Comic 8","Get Married",
    "Perempuan Tanah Jahanam","Marlina Si Pembunuh","Si Doel The Movie","Avengers: Endgame","Avatar",
    "Titanic","Harry Potter","Spider-Man","Kuch Kuch Hota Hai","Kung Fu Hustle"
  ],
  "Musik": [
    "Dewa 19","Sheila On 7","Slank","Noah / Peterpan","Iwan Fals",
    "Tulus","Raisa","Denny Caknan","JKT48","Mahalini",
    "Tiara Andini","Lyodra","NDX A.K.A","Guyon Waton","Didi Kempot",
    "Wali","Kangen Band","Padi Reborn","Gigi","Naif",
    "Kahitna","Yovie & Nuno","Maliq & D'Essentials","RAN","Vina Panduwinata",
    "Glenn Fredly","Afgan","Judika","Rossa","Isyana Sarasvati",
    "Pamungkas","Hindia","Nadin Amizah","Payung Teduh","Fiersa Besari",
    "Coldplay","Taylor Swift","Blackpink","BTS","Ed Sheeran"
  ],
  "Anime": [
    "Naruto","One Piece","Doraemon","Dragon Ball","Detective Conan",
    "Crayon Shin-chan","Captain Tsubasa","Attack on Titan","Demon Slayer","Jujutsu Kaisen",
    "Bleach","Hunter x Hunter","Fullmetal Alchemist","Death Note","My Hero Academia",
    "Haikyuu!!","Kuroko no Basket","Slam Dunk","Digimon","Pokemon",
    "Inuyasha","Samurai X","Sailor Moon","Cardcaptor Sakura","Chibi Maruko-chan",
    "Ninja Hattori","Beyblade","Yu-Gi-Oh!","Fairy Tail","Sword Art Online",
    "Tokyo Ghoul","One Punch Man","Spy x Family","Chainsaw Man","Dr. Stone",
    "Gintama","JoJo's Bizarre Adventure","Neon Genesis Evangelion","Gundam","Boruto"
  ],
  "Benua": [
    "Asia","Eropa","Afrika","Amerika Utara","Amerika Selatan","Australia","Antartika"
  ],
  "Aktor": [
    "Reza Rahadian","Iko Uwais","Joe Taslim","Vino G. Bastian","Nicholas Saputra",
    "Jefri Nichol","Angga Yunanda","Abimana Aryasatya","Iqbaal Ramadhan","Arya Saloka",
    "Chicco Jerikho","Rio Dewanto","Lukman Sardi","Tora Sudiro","Indro Warkop",
    "Deddy Mizwar","Rano Karno","Dian Sastrowardoyo","Tara Basro","Chelsea Islan",
    "Pevita Pearce","Luna Maya","Prilly Latuconsina","Amanda Manopo","Putri Marino",
    "Shenina Cinnamon","Nirina Zubir","Acha Septriasa","Marsha Timothy","Laura Basuki",
    "Christine Hakim","Widyawati","Suzzanna","Raline Shah","Anya Geraldine",
    "Wulan Guritno","Tom Cruise","Leonardo DiCaprio","Robert Downey Jr.","Jackie Chan"
  ],
  "Peralatan": [
    "Sapu Lidi","Cobek","Ulekan","Gayung","Panci",
    "Cangkul","Sabit","Tampah","Kipas Anyaman","Kukusan",
    "Parutan Kelapa","Talenan","Sendok Sayur","Spatula","Termos",
    "Rantang","Tudung Saji","Galon Air","Ember","Baskom",
    "Pel Lantai","Kemoceng","Sapu Ijuk","Pengki","Rak Piring",
    "Setrika Listrik","Keranjang Belanja","Obeng","Palu","Tang",
    "Kunci Inggris","Gergaji Kayu","Meteran","Bor Listrik","Kuas Cat",
    "Sekop","Linggis","Gerobak Sorong","Blender","Microwave"
  ],
  "Makanan": [
    "Rendang","Nasi Goreng","Sate Madura","Bakso","Soto Ayam",
    "Gado-Gado","Pempek","Martabak Manis","Martabak Telur","Nasi Padang",
    "Gudeg","Rawon","Opor Ayam","Sate Padang","Mie Ayam",
    "Bubur Ayam","Ketoprak","Pecel Lele","Ayam Penyet","Ayam Geprek",
    "Seblak","Batagor","Siomay","Cireng","Cilok",
    "Tempe Mendoan","Tahu Bulat","Pisang Goreng","Nasi Kuning","Nasi Uduk",
    "Lontong Sayur","Sop Buntut","Ikan Bakar","Seblak","Es Cendol",
    "Es Campur","Kolak Pisang","Nasi Liwet","Sate Lilit","Ayam Betutu"
  ],
  "Negara": [
    "Indonesia","Malaysia","Singapura","Thailand","Filipina",
    "Brunei Darussalam","Vietnam","Myanmar","Jepang","Korea Selatan",
    "China (Tiongkok)","Taiwan","Arab Saudi","Turki","Palestina",
    "Mesir","Belanda","Inggris Raya","Amerika Serikat","Australia",
    "India","Pakistan","Rusia","Ukraina","Jerman",
    "Prancis","Italia","Spanyol","Brasil","Argentina",
    "Kanada","Meksiko","Afrika Selatan","Maroko","Qatar",
    "Uni Emirat Arab","Iran","Selandia Baru","Vatikan","Swiss"
  ],
  "Provinsi": [
    "Nanggroe Aceh Darussalam","Sumatera Utara","Sumatera Barat","Riau","Kepulauan Riau",
    "Jambi","Bengkulu","Sumatera Selatan","Kepulauan Bangka Belitung","Lampung",
    "Banten","DKI Jakarta","Jawa Barat","Jawa Tengah","DI Yogyakarta",
    "Jawa Timur","Bali","Nusa Tenggara Barat","Nusa Tenggara Timur","Kalimantan Barat",
    "Kalimantan Tengah","Kalimantan Selatan","Kalimantan Timur","Kalimantan Utara","Sulawesi Utara",
    "Gorontalo","Sulawesi Tengah","Sulawesi Barat","Sulawesi Selatan","Sulawesi Tenggara",
    "Maluku","Maluku Utara","Papua","Papua Barat","Papua Selatan",
    "Papua Tengah","Papua Pegunungan","Papua Barat Daya"
  ]
};

// ─── Emoji tiap tema ────────────────────────
const THEME_EMOJI = {
  "Dapur":       "🍳",
  "Pantai":      "🏖️",
  "Kantor":      "💼",
  "Luar Angkasa":"🚀",
  "Sekolah":     "📚",
  "Rumah Sakit": "🏥",
  "Pasar":       "🛒",
  "Bioskop":     "🎬",
  "Film":        "🎭",
  "Musik":       "🎵",
  "Anime":       "⛩️",
  "Benua":       "🌍",
  "Aktor":       "🎥",
  "Peralatan":   "🔧",
  "Makanan":     "🍜",
  "Negara":      "🗺️",
  "Provinsi":    "🏝️"
};

// ─── Jenis Pesan Multiplayer ─────────────────
const MSG = {
  JOIN:          'join',
  JOINED:        'joined',
  PLAYER_LIST:   'player_list',
  START_GAME:    'start_game',
  ROLE:          'role',
  PHASE_DISCUSS: 'phase_discuss',
  TIMER_UPDATE:  'timer_update',
  TURN_UPDATE:   'turn_update',
  VOTING_START:  'voting_start',
  VOTE:          'vote',
  VOTE_UPDATE:   'vote_update',
  RESULTS:       'results',
  RESTART:       'restart',
  ERROR:         'error'
};

// ─── Generate Kode Ruangan ───────────────────
function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

// ─── Acak Array (Fisher-Yates) ───────────────
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Format Waktu ────────────────────────────
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ─── Animasi Latar Belakang (Pastel Bubbles) ─
function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let bubbles = [];
  let W, H;

  const pastelColors = [
    'rgba(216,180,254,',  // lavender
    'rgba(249,168,212,',  // pink
    'rgba(167,243,208,',  // mint
    'rgba(253,230,138,',  // yellow
    'rgba(186,230,253,',  // sky
    'rgba(252,165,165,',  // coral
  ];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createBubbles(count) {
    bubbles = [];
    for (let i = 0; i < count; i++) {
      bubbles.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 40 + 10,
        speed: Math.random() * 0.25 + 0.05,
        alpha: Math.random() * 0.15 + 0.05,
        drift: (Math.random() - 0.5) * 0.15,
        color: pastelColors[Math.floor(Math.random() * pastelColors.length)]
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    bubbles.forEach(b => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.color + b.alpha + ')';
      ctx.fill();
      b.y -= b.speed;
      b.x += b.drift;
      if (b.y < -b.r * 2) { b.y = H + b.r; b.x = Math.random() * W; }
    });
    requestAnimationFrame(draw);
  }

  resize();
  createBubbles(30);
  draw();
  window.addEventListener('resize', () => { resize(); createBubbles(30); });
}
