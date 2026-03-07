/* =============================================
   SIAPA PENYUSUP? — Script Bersama (script.js)
   Berisi tema, konstanta pesan, dan fungsi bantuan
   ============================================= */

// ─── Tema dan Objek ───────────────────────────
// Setiap tema punya minimal 12 objek
// Pemain normal akan mendapat salah satu objek ini secara acak
const THEMES = {
  "Dapur": [
    "Pisau", "Wajan", "Garpu", "Kompor", "Sendok",
    "Piring", "Blender", "Kulkas", "Talenan", "Spatula",
    "Mangkuk", "Celemek", "Penggorengan", "Parutan"
  ],
  "Pantai": [
    "Pasir", "Ombak", "Payung Pantai", "Kerang", "Papan Selancar",
    "Kapal", "Bintang Laut", "Terumbu Karang", "Tikar", "Kacamata Hitam",
    "Pelampung", "Pasir Putih", "Perahu Karet", "Ember Pasir"
  ],
  "Kantor": [
    "Komputer", "Printer", "Pulpen", "Kalkulator", "Stapler",
    "Proyektor", "Papan Tulis", "Meja Rapat", "Kertas", "Penggaris",
    "Amplop", "Jam Dinding", "Kursi Roda", "Lemari Arsip"
  ],
  "Luar Angkasa": [
    "Roket", "Bulan", "Bintang", "Astronot", "Meteor",
    "Teleskop", "Nebula", "Satelit", "Planet Mars", "Pesawat Ulang-Alik",
    "Lubang Hitam", "Oksigen", "Modul Pendarat", "Baju Astronot"
  ],
  "Sekolah": [
    "Buku Pelajaran", "Pensil", "Papan Tulis", "Penghapus", "Tas Sekolah",
    "Seragam", "Ulangan", "Kantin", "Perpustakaan", "Laboratorium",
    "Bangku", "Rapor", "Ekstrakurikuler", "Peta Dunia"
  ],
  "Rumah Sakit": [
    "Jarum Suntik", "Stetoskop", "Tandu", "Termometer", "Obat",
    "Infus", "Kursi Roda", "Masker", "Sarung Tangan", "Ambulans",
    "Rontgen", "Apoteker", "Brankar", "Plester"
  ],
  "Pasar": [
    "Timbangan", "Kios", "Sayuran", "Dompet", "Kantong Belanja",
    "Tawar-Menawar", "Tukang Ikan", "Buah Segar", "Gerobak", "Mie",
    "Tempe", "Bumbu", "Terpal", "Keranjang Bambu"
  ],
  "Bioskop": [
    "Popcorn", "Tiket", "Layar Besar", "Proyektor Film", "Kursi Empuk",
    "Trailer", "Gelap", "Earphone", "AC Dingin", "Antrian",
    "Kacamata 3D", "Minuman Besar", "Sinema", "Subtitle"
  ]
};

// ─── Jenis Pesan Multiplayer ─────────────────
// Digunakan oleh host dan pemain untuk komunikasi
const MSG = {
  JOIN:          'join',          // Pemain → Host: minta bergabung
  JOINED:        'joined',        // Host → Pemain: konfirmasi bergabung
  PLAYER_LIST:   'player_list',   // Host → Semua: daftar pemain terkini
  START_GAME:    'start_game',    // Host → Semua: game dimulai
  ROLE:          'role',          // Host → Pemain: peran rahasia
  PHASE_DISCUSS: 'phase_discuss', // Host → Semua: masuk fase diskusi
  TIMER_UPDATE:  'timer_update',  // Host → Semua: update waktu
  VOTING_START:  'voting_start',  // Host → Semua: mulai voting
  VOTE:          'vote',          // Pemain → Host: kirim suara
  VOTE_UPDATE:   'vote_update',   // Host → Semua: progress voting
  RESULTS:       'results',       // Host → Semua: hasil akhir
  RESTART:       'restart',       // Host → Semua: main lagi
  ERROR:         'error'          // Host → Pemain: pesan kesalahan
};

// ─── Generate Kode Ruangan ───────────────────
// Menghasilkan kode 4 huruf/angka yang mudah dibaca
function generateRoomCode() {
  // Hindari karakter yang membingungkan (O/0, I/1, dll)
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
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
// Mengubah detik menjadi format "m:ss"
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ─── Animasi Latar Belakang (Host Screen) ────
// Membuat efek bintang mengambang di latar belakang
function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        alpha: Math.random() * 0.6 + 0.2,
        drift: (Math.random() - 0.5) * 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid tipis
    ctx.strokeStyle = 'rgba(34,211,238,0.04)';
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = 0; x < W; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Bintang-bintang
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,220,255,${s.alpha})`;
      ctx.fill();

      // Gerakkan ke atas perlahan
      s.y -= s.speed;
      s.x += s.drift;
      if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; }
    });

    requestAnimationFrame(draw);
  }

  resize();
  createStars(120);
  draw();
  window.addEventListener('resize', () => { resize(); createStars(120); });
}
