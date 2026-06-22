/* ═══════════════════════════════════════════════════
   SpectaEvent — script.js
   Vanilla JavaScript, no framework
═══════════════════════════════════════════════════ */

"use strict";

/* ══════════════════════════════════════════════
   DATA DUMMY
══════════════════════════════════════════════ */

const events = [
  {
    id: 1,
    nama_event: "Seminar Nasional Kecerdasan Buatan 2026",
    penyelenggara: "Himpunan Mahasiswa Sistem Informasi",
    kategori: "Seminar",
    tanggal: "2026-07-15",
    waktu: "08:00",
    lokasi: "Auditorium Gedung A ITK",
    kuota: 300,
    status: "Akan Datang",
    deskripsi: "Seminar nasional yang membahas perkembangan Kecerdasan Buatan dan Machine Learning di Indonesia, dengan pembicara dari industri dan akademisi terkemuka.",
    gambar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    warna: "#DBEAFE"
  },
  {
    id: 2,
    nama_event: "Workshop UI/UX Design Thinking",
    penyelenggara: "BEM ITK",
    kategori: "Workshop",
    tanggal: "2026-07-08",
    waktu: "09:00",
    lokasi: "Lab Komputer B2",
    kuota: 40,
    status: "Akan Datang",
    deskripsi: "Workshop intensif 2 hari tentang proses desain berbasis Design Thinking, dari riset pengguna hingga prototyping interaktif menggunakan Figma.",
    gambar: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    warna: "#FCE7F3"
  },
  {
    id: 3,
    nama_event: "Pembekalan PKM",
    penyelenggara: "KM ITK",
    kategori: "Lomba",
    tanggal: "2026-07-22",
    waktu: "07:30",
    lokasi: "Gedung Serba Guna ITK",
    kuota: 150,
    status: "Akan Datang",
    deskripsi: "Kompetisi karya tulis ilmiah tingkat nasional dengan tema 'Inovasi Teknologi untuk Kalimantan Berkelanjutan'. Terbuka untuk mahasiswa D3/S1 seluruh Indonesia.",
    gambar: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
    warna: "#D1FAE5"
  },
  {
    id: 4,
    nama_event: "Pelatihan Git & GitHub untuk Pemula",
    penyelenggara: "IEEE ITK",
    kategori: "Pelatihan",
    tanggal: "2026-06-28",
    waktu: "13:00",
    lokasi: "Lab Komputer C Labter 1",
    kuota: 30,
    status: "Berlangsung",
    deskripsi: "Pelatihan hands-on penggunaan Git dan GitHub untuk version control, kolaborasi tim, dan manajemen proyek perangkat lunak secara profesional.",
    gambar: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    warna: "#E0E7FF"
  },
  {
    id: 5,
    nama_event: "Rapat Koordinasi BEM KM ITK 2026",
    penyelenggara: "BEM ITK",
    kategori: "Organisasi",
    tanggal: "2026-06-25",
    waktu: "15:00",
    lokasi: "Ruang Rapat Rektorat",
    kuota: 50,
    status: "Selesai",
    deskripsi: "Rapat koordinasi seluruh pengurus BEM untuk membahas program kerja semester genap 2026 dan evaluasi kegiatan yang telah berjalan.",
    gambar: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
    warna: "#FEF3C7"
  },
  {
    id: 6,
    nama_event: "Seminar Keamanan Siber & Ethical Hacking",
    penyelenggara: "Himpunan Mahasiswa Informatika",
    kategori: "Seminar",
    tanggal: "2026-07-30",
    waktu: "08:30",
    lokasi: "Aula Gedung A ITK",
    kuota: 200,
    status: "Akan Datang",
    deskripsi: "Seminar mengenai ancaman keamanan siber terkini, teknik ethical hacking, dan bagaimana membangun sistem yang aman dari serangan siber.",
    gambar: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    warna: "#FEE2E2"
  },
  {
    id: 7,
    nama_event: "Workshop Data Science dengan Python",
    penyelenggara: "Developer Student Club ITK",
    kategori: "Workshop",
    tanggal: "2026-08-05",
    waktu: "08:00",
    lokasi: "Lab Komputer B1",
    kuota: 35,
    status: "Akan Datang",
    deskripsi: "Pelatihan Data Science menggunakan Python, mencakup pandas, numpy, visualisasi data, dan machine learning dasar.",
    gambar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    warna: "#DBEAFE"
  },
  {
    id: 8,
    nama_event: "Lomba Hackathon Kalimantan 2026",
    penyelenggara: "Fakultas Teknologi Informasi",
    kategori: "Lomba",
    tanggal: "2026-08-12",
    waktu: "07:00",
    lokasi: "Gedung Serba Guna ITK",
    kuota: 100,
    status: "Akan Datang",
    deskripsi: "Hackathon 24 jam berfokus pada pengembangan solusi teknologi untuk permasalahan nyata di Kalimantan. Berhadiah total Rp 30 juta.",
    gambar: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    warna: "#FEF9C3"
  },
  {
    id: 9,
    nama_event: "Pelatihan Kepemimpinan Mahasiswa",
    penyelenggara: "Kemahasiswaan ITK",
    kategori: "Pelatihan",
    tanggal: "2025-06-20",
    waktu: "08:00",
    lokasi: "Aula Gedung A ITK",
    kuota: 80,
    status: "Selesai",
    deskripsi: "Program pelatihan kepemimpinan untuk calon pemimpin organisasi mahasiswa, mencakup komunikasi efektif, manajemen konflik, dan pengambilan keputusan.",
    gambar: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    warna: "#F3E8FF"
  },
  {
    id: 10,
    nama_event: "Seminar Industri 4.0 dan IoT",
    penyelenggara: "Himpunan Mahasiswa Teknik Elektro",
    kategori: "Seminar",
    tanggal: "2026-07-18",
    waktu: "09:00",
    lokasi: "Ruang Seminar Gedung B",
    kuota: 120,
    status: "Akan Datang",
    deskripsi: "Seminar tentang perkembangan Industri 4.0, Internet of Things, dan penerapannya di sektor industri dan kehidupan sehari-hari.",
    gambar: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    warna: "#D1FAE5"
  },
  {
    id: 11,
    nama_event: "Workshop Fotografi & Videografi",
    penyelenggara: "UKM Fotografi ITK",
    kategori: "Workshop",
    tanggal: "2026-07-05",
    waktu: "10:00",
    lokasi: "Studio Kreatif ITK",
    kuota: 25,
    status: "Akan Datang",
    deskripsi: "Workshop praktis teknik fotografi dan videografi untuk dokumentasi event kampus, termasuk editing menggunakan Adobe Lightroom dan Premiere Pro.",
    gambar: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop",
    warna: "#FCE7F3"
  },
  {
    id: 12,
    nama_event: "Musyawarah Besar UKM Olahraga",
    penyelenggara: "UKM Olahraga ITK",
    kategori: "Organisasi",
    tanggal: "2026-06-30",
    waktu: "14:00",
    lokasi: "Aula Gedung A ITK",
    kuota: 60,
    status: "Akan Datang",
    deskripsi: "Musyawarah besar tahunan untuk pemilihan ketua UKM Olahraga periode 2025-2026 dan penetapan program kerja.",
    gambar: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    warna: "#D1FAE5"
  },
  {
    id: 13,
    nama_event: "Lomba Mobile App Development",
    penyelenggara: "Himpunan Mahasiswa Informatika",
    kategori: "Lomba",
    tanggal: "2026-08-20",
    waktu: "08:00",
    lokasi: "Auditorium Labter 1",
    kuota: 75,
    status: "Akan Datang",
    deskripsi: "Kompetisi pengembangan aplikasi mobile berbasis Flutter/React Native dengan tema solusi smart campus.",
    gambar: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000",
    warna: "#E0E7FF"
  },
  {
    id: 14,
    nama_event: "Pelatihan Public Speaking & Presentasi",
    penyelenggara: "BEM KM ITK",
    kategori: "Pelatihan",
    tanggal: "2026-07-10",
    waktu: "13:00",
    lokasi: "Auditorium Gedung A",
    kuota: 45,
    status: "Akan Datang",
    deskripsi: "Pelatihan teknik public speaking, storytelling, dan presentasi profesional untuk mahasiswa yang ingin tampil percaya diri di depan umum.",
    gambar: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000",
    warna: "#FEF3C7"
  }
];

const venues = [
  { id: 1,  nama_ruangan: "Auditorium A",          gedung: "Gedung A",                kapasitas: 250, status: "Digunakan", event_sekarang: "Sidang TAP KPU HMSI 2027",       waktu_mulai: "13:00", waktu_selesai: "17:00" },
  { id: 2,  nama_ruangan: "Lab Komputer B",         gedung: "Laboratorium Terpadu 1",  kapasitas: 40,  status: "Kosong",    event_sekarang: null,                              waktu_mulai: null,    waktu_selesai: null },
  { id: 3,  nama_ruangan: "Lab Komputer C",         gedung: "Laboratorium Terpadu 2",  kapasitas: 40,  status: "Digunakan", event_sekarang: "Rapat Himpunan Mahasiswa",        waktu_mulai: "14:00", waktu_selesai: "16:00" },
  { id: 4,  nama_ruangan: "Ruang Rapat",            gedung: "Gedung B",                kapasitas: 120, status: "Kosong",    event_sekarang: null,                              waktu_mulai: null,    waktu_selesai: null },
  { id: 5,  nama_ruangan: "Auditorium Labter",      gedung: "Laboratorium Terpadu",    kapasitas: 35,  status: "Digunakan", event_sekarang: "Praktikum Basis Data",            waktu_mulai: "10:00", waktu_selesai: "12:00" },
  { id: 6,  nama_ruangan: "E303",                   gedung: "Gedung E",                kapasitas: 35,  status: "Kosong",    event_sekarang: null,                              waktu_mulai: null,    waktu_selesai: null },
  { id: 7,  nama_ruangan: "Perpustakaan",           gedung: "Gedung A",                kapasitas: 50,  status: "Digunakan", event_sekarang: "Rapat Pimpinan",                  waktu_mulai: "09:00", waktu_selesai: "11:00" },
  { id: 8,  nama_ruangan: "F201",                   gedung: "Gedung F",                kapasitas: 500, status: "Kosong",    event_sekarang: null,                              waktu_mulai: null,    waktu_selesai: null },
  { id: 9,  nama_ruangan: "Studio Kreatif ITK",     gedung: "Gedung D",                kapasitas: 30,  status: "Kosong",    event_sekarang: null,                              waktu_mulai: null,    waktu_selesai: null },
  { id: 10, nama_ruangan: "Ruang Kelas D-101",      gedung: "Gedung D",                kapasitas: 50,  status: "Digunakan", event_sekarang: "Seminar Proposal Kerja Praktik",  waktu_mulai: "08:00", waktu_selesai: "10:00" },
  { id: 11, nama_ruangan: "Ruang Kelas D-102",      gedung: "Gedung D",                kapasitas: 50,  status: "Kosong",    event_sekarang: null,                              waktu_mulai: null,    waktu_selesai: null },
  { id: 12, nama_ruangan: "E203",                   gedung: "Gedung E",                kapasitas: 55,  status: "Digunakan", event_sekarang: "ITK Open House",                  waktu_mulai: "07:00", waktu_selesai: "20:00" },
];

/* ══════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════ */

/** Format tanggal "2025-07-15" → "Selasa, 15 Juli 2025" */
function formatTanggal(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

/** Kembalikan class CSS untuk status event */
function statusClass(status) {
  if (status === "Akan Datang") return "tag-status-akan";
  if (status === "Berlangsung") return "tag-status-berlangsung";
  return "tag-status-selesai";
}

/**
 * Ambil event yang statusnya bukan "Selesai",
 * urutkan berdasarkan tanggal, ambil n terdekat.
 */
function getUpcomingEvents(n = 3) {
  return events
    .filter(e => e.status !== "Selesai")
    .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
    .slice(0, n);
}

/* ══════════════════════════════════════════════
   HERO SWIPER — isi slide dari data events
══════════════════════════════════════════════ */
function initHeroSwiper() {
  const wrapper = document.querySelector("#heroSwiperWrapper");
  if (!wrapper) return;

  // Ambil event yang punya gambar URL, utamakan Berlangsung → Akan Datang → Selesai
  const slideEvents = events
    .filter(e => e.gambar && e.gambar.startsWith("http"))
    .sort((a, b) => {
      const order = { "Berlangsung": 0, "Akan Datang": 1, "Selesai": 2 };
      return (order[a.status] ?? 3) - (order[b.status] ?? 3);
    })
    .slice(0, 8);

  // Warna fallback per kategori jika gambar gagal load
  const fallbackColors = {
    "Seminar":    "linear-gradient(135deg,#0F2460,#1A56DB)",
    "Workshop":   "linear-gradient(135deg,#1e1b4b,#4f46e5)",
    "Lomba":      "linear-gradient(135deg,#064e3b,#059669)",
    "Pelatihan":  "linear-gradient(135deg,#78350f,#d97706)",
    "Organisasi": "linear-gradient(135deg,#1e3a5f,#2563eb)",
  };

  wrapper.innerHTML = slideEvents.map(e => {
    const fallback = fallbackColors[e.kategori] || "linear-gradient(135deg,#0F2460,#1A56DB)";
    return `
    <div class="swiper-slide hero-slide-item" 
         data-bg="${e.gambar}"
         style="background: ${fallback};">
      <div class="hero-slide-label">
        <div class="hero-slide-tag">${e.kategori}</div>
        <div class="hero-slide-title">${e.nama_event}</div>
        <div class="hero-slide-meta">📅 ${formatTanggal(e.tanggal)} &nbsp;·&nbsp; 📍 ${e.lokasi}</div>
      </div>
    </div>`;
  }).join("");

  // Load gambar secara lazy — set background-image setelah img berhasil load
  wrapper.querySelectorAll(".hero-slide-item").forEach(slide => {
    const url = slide.dataset.bg;
    if (!url) return;
    const img = new Image();
    img.onload = () => {
      slide.style.backgroundImage = `url('${url}')`;
      slide.style.backgroundSize = "cover";
      slide.style.backgroundPosition = "center";
    };
    img.src = url;
  });

  new Swiper(".heroSwiper", {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

/* ══════════════════════════════════════════════
   HERO STATS
══════════════════════════════════════════════ */
function renderHeroStats() {
  const totalEvents = events.length;
  const akanDatang  = events.filter(e => e.status === "Akan Datang").length;
  const venueKosong = venues.filter(v => v.status === "Kosong").length;

  const heroStats = document.querySelector("#heroStats");
  heroStats.innerHTML = [
    { num: totalEvents, label: "Total Event" },
    { num: akanDatang,  label: "Akan Datang" },
    { num: venueKosong, label: "Venue Kosong" },
  ].map(s => `
    <div class="hero-stat">
      <div class="hero-stat-num">${s.num}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>
  `).join("");
}

/* ══════════════════════════════════════════════
   COUNTDOWN
══════════════════════════════════════════════ */
let countdownInterval = null;

function startCountdown() {
  const next = getUpcomingEvents(1)[0];
  if (!next) return;

  document.querySelector("#cdEventName").textContent = next.nama_event;
  const targetTime = new Date(`${next.tanggal}T${next.waktu}:00`);
  document.querySelector("#cdMeta").textContent =
    `${formatTanggal(next.tanggal)} · ${next.waktu} WIB · ${next.lokasi}`;

  function tick() {
    const now  = new Date();
    const diff = targetTime - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      document.querySelector("#cdTimer").innerHTML =
        `<span style="color:#fff;font-size:1.1rem;font-weight:700">Event sedang berlangsung!</span>`;
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector("#cdDays").textContent  = String(days).padStart(2, "0");
    document.querySelector("#cdHours").textContent = String(hours).padStart(2, "0");
    document.querySelector("#cdMins").textContent  = String(mins).padStart(2, "0");
    document.querySelector("#cdSecs").textContent  = String(secs).padStart(2, "0");
  }

  tick();
  countdownInterval = setInterval(tick, 1000);
}

/* ══════════════════════════════════════════════
   SECTION: EVENT TERDEKAT (3 TERDEKAT)
══════════════════════════════════════════════ */
function renderLatestEvents() {
  const latestGrid = document.querySelector("#latestGrid");
  const latest     = getUpcomingEvents(3);

  latestGrid.innerHTML = latest.map(e => `
    <div class="latest-card">
      <div class="latest-card-img">
        <img src="${e.gambar}" alt="${e.nama_event}" onerror="this.style.display='none'">
      </div>
      <div class="latest-card-body">
        <div class="latest-card-meta">
          <span class="tag tag-kategori">${e.kategori}</span>
          <span class="tag ${statusClass(e.status)}">${e.status}</span>
        </div>
        <div class="latest-card-title">${e.nama_event}</div>
        <div class="latest-card-info">
          <div class="info-item">
            <span>📅 ${formatTanggal(e.tanggal)}</span>
            <small>${e.waktu} WIB</small>
          </div>
        <div class="info-item">
            <span>📍 ${e.lokasi}</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ══════════════════════════════════════════════
   SECTION: SEMUA EVENT (CARD + FILTER)
══════════════════════════════════════════════ */

// State filter
let filterState = { keyword: "", kategori: "semua", status: "semua" };

function renderEvents() {
  const eventsGrid = document.querySelector("#eventsGrid");
  const emptyState = document.querySelector("#emptyState");
  const eventCount = document.querySelector("#eventCount");

  let filtered = events.filter(e => {
    const keyword       = filterState.keyword.toLowerCase();
    const matchKeyword  = e.nama_event.toLowerCase().includes(keyword) ||
                          e.penyelenggara.toLowerCase().includes(keyword);
    const matchKategori = filterState.kategori === "semua" || e.kategori === filterState.kategori;
    const matchStatus   = filterState.status === "semua"   || e.status   === filterState.status;
    return matchKeyword && matchKategori && matchStatus;
  });

  eventCount.textContent = `Menampilkan ${filtered.length} dari ${events.length} event`;

  if (filtered.length === 0) {
    eventsGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  eventsGrid.innerHTML = filtered.map(e => `
    <div class="event-card" data-id="${e.id}">
      <div class="card-img">
        <img src="${e.gambar}" alt="${e.nama_event}"
          onerror="this.src='https://placehold.co/600x400/DBEAFE/1A56DB?text=Event'">
      </div>
      <div class="card-body">
        <div class="card-tags">
          <span class="tag tag-kategori">${e.kategori}</span>
          <span class="tag ${statusClass(e.status)}">${e.status}</span>
        </div>
        <div class="card-title">${e.nama_event}</div>
        <div class="card-meta">
          <span>📅 ${formatTanggal(e.tanggal)} · ${e.waktu} WIB</span>
          <span>📍 ${e.lokasi}</span>
          <span>👥 Kuota: ${e.kuota} orang</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-penyelenggara">${e.penyelenggara}</span>
        <button class="btn-detail" data-id="${e.id}">Detail</button>
      </div>
    </div>
  `).join("");

  eventsGrid.querySelectorAll(".btn-detail").forEach(btn => {
    btn.addEventListener("click", () => openModal(Number(btn.dataset.id)));
  });
}

function initEventFilters() {
  const searchInput    = document.querySelector("#searchInput");
  const filterKategori = document.querySelector("#filterKategori");
  const filterStatus   = document.querySelector("#filterStatus");

  searchInput.addEventListener("input", e => {
    filterState.keyword = e.target.value;
    renderEvents();
  });

  filterKategori.addEventListener("change", e => {
    filterState.kategori = e.target.value;
    renderEvents();
  });

  filterStatus.addEventListener("change", e => {
    filterState.status = e.target.value;
    renderEvents();
  });
}

/* ══════════════════════════════════════════════
   MODAL DETAIL
══════════════════════════════════════════════ */
function openModal(eventId) {
  const e = events.find(ev => ev.id === eventId);
  if (!e) return;

  const modalBody = document.querySelector("#modalBody");
  modalBody.innerHTML = `
    <div class="modal-hero">
      <img src="${e.gambar}" alt="${e.nama_event}" onerror="this.style.display='none'">
    </div>
    <h2 class="modal-title">${e.nama_event}</h2>
    <div class="modal-tags">
      <span class="tag tag-kategori">${e.kategori}</span>
      <span class="tag ${statusClass(e.status)}">${e.status}</span>
    </div>
    <p class="modal-desc">${e.deskripsi}</p>
    <div class="modal-details">
      <div class="modal-detail-item">
        <span class="modal-detail-label">Tanggal</span>
        <span class="modal-detail-value">${formatTanggal(e.tanggal)}</span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-label">Waktu</span>
        <span class="modal-detail-value">${e.waktu} WIB</span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-label">Lokasi</span>
        <span class="modal-detail-value">${e.lokasi}</span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-label">Penyelenggara</span>
        <span class="modal-detail-value">${e.penyelenggara}</span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-label">Kuota</span>
        <span class="modal-detail-value">${e.kuota} orang</span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-label">Status</span>
        <span class="modal-detail-value">${e.status}</span>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary btn-sm" id="modalCloseBtn">Tutup</button>
    </div>
  `;

  document.querySelector("#modalOverlay").classList.add("active");
  document.querySelector("#modalCloseBtn").addEventListener("click", closeModal);
}

function closeModal() {
  document.querySelector("#modalOverlay").classList.remove("active");
}

function initModal() {
  document.querySelector("#modalClose").addEventListener("click", closeModal);
  document.querySelector("#modalOverlay").addEventListener("click", e => {
    if (e.target === document.querySelector("#modalOverlay")) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

/* ══════════════════════════════════════════════
   VENUE SECTION
══════════════════════════════════════════════ */
function renderVenueAnalytics() {
  const total   = venues.length;
  const kosong  = venues.filter(v => v.status === "Kosong").length;
  const dipakai = venues.filter(v => v.status === "Digunakan").length;
  const pct     = Math.round((dipakai / total) * 100);

  const analyticsGrid = document.querySelector("#analyticsGrid");
  const cards = [
    { icon: "🏢", num: total,     label: "Total Ruangan",     pct: null,                      pctColor: null },
    { icon: "✅", num: kosong,    label: "Ruangan Kosong",    pct: `${100 - pct}% tersedia`,  pctColor: "var(--green)" },
    { icon: "🔴", num: dipakai,   label: "Ruangan Digunakan", pct: `${pct}% terisi`,          pctColor: "var(--red)" },
    { icon: "📊", num: `${pct}%`, label: "Tingkat Okupansi",  pct: `${dipakai} dari ${total} ruangan`, pctColor: "var(--blue)" },
  ];

  analyticsGrid.innerHTML = cards.map(c => `
    <div class="analytics-card">
      <div class="analytics-icon">${c.icon}</div>
      <div>
        <div class="analytics-num">${c.num}</div>
        <div class="analytics-label">${c.label}</div>
        ${c.pct ? `<div class="analytics-pct" style="color:${c.pctColor}">${c.pct}</div>` : ""}
      </div>
    </div>
  `).join("");
}

function populateGedungFilter() {
  const gedungList   = [...new Set(venues.map(v => v.gedung))].sort();
  const filterGedung = document.querySelector("#filterGedung");
  gedungList.forEach(g => {
    const opt      = document.createElement("option");
    opt.value      = g;
    opt.textContent = g;
    filterGedung.appendChild(opt);
  });
}

let venueFilter = { gedung: "semua", status: "semua" };

function renderVenues() {
  const venuesGrid = document.querySelector("#venuesGrid");

  let filtered = venues.filter(v => {
    const matchGedung = venueFilter.gedung === "semua" || v.gedung === venueFilter.gedung;
    const matchStatus = venueFilter.status === "semua" || v.status === venueFilter.status;
    return matchGedung && matchStatus;
  });

  venuesGrid.innerHTML = filtered.map(v => {
    const isKosong  = v.status === "Kosong";
    const fillPct   = isKosong ? 0 : 75;
    const eventInfo = !isKosong
      ? `<div class="venue-event-now">🎯 ${v.event_sekarang} · ${v.waktu_mulai}–${v.waktu_selesai}</div>`
      : `<div class="venue-event-empty"></div>`;

    return `
      <div class="venue-card">
        <div class="venue-header">
          <div class="venue-name">${v.nama_ruangan}</div>
          <span class="venue-status ${isKosong ? "status-kosong" : "status-digunakan"}">${v.status}</span>
        </div>
        <div class="venue-gedung">📍 ${v.gedung}</div>
        <div class="venue-info">
          <span>👥 Kapasitas: <strong>${v.kapasitas} orang</strong></span>
        </div>
        ${eventInfo}
        <div class="venue-bar-wrap">
          <div class="venue-bar-label">
            <span>Kapasitas terpakai</span>
            <span>${isKosong ? "0%" : "~75%"}</span>
          </div>
          <div class="venue-bar-track">
            <div class="venue-bar-fill" style="width:${fillPct}%; background:${isKosong ? "var(--green)" : "var(--red)"}"></div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function initVenueFilters() {
  document.querySelector("#filterGedung").addEventListener("change", e => {
    venueFilter.gedung = e.target.value;
    renderVenues();
  });
  document.querySelector("#filterStatusVenue").addEventListener("change", e => {
    venueFilter.status = e.target.value;
    renderVenues();
  });
}

/* ══════════════════════════════════════════════
   STATISTIK (Chart.js)
══════════════════════════════════════════════ */
function renderCharts() {
  const kategoriList = ["Seminar", "Workshop", "Lomba", "Pelatihan", "Organisasi"];
  const counts       = kategoriList.map(k => events.filter(e => e.kategori === k).length);
  const palette      = ["#1A56DB", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

  // Bar Chart
  const barCtx = document.querySelector("#barChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: kategoriList,
      datasets: [{
        label: "Jumlah Event",
        data: counts,
        backgroundColor: palette.map(c => c + "CC"),
        borderColor: palette,
        borderWidth: 1.5,
        borderRadius: 6,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y} event` } }
      },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: "#F1F5F9" } },
        x: { grid: { display: false } }
      }
    }
  });

  // Pie / Doughnut Chart
  const pieCtx = document.querySelector("#pieChart").getContext("2d");
  new Chart(pieCtx, {
    type: "doughnut",
    data: {
      labels: kategoriList,
      datasets: [{
        data: counts,
        backgroundColor: palette,
        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 6,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { padding: 16, font: { size: 12 } } },
        tooltip: {
          callbacks: {
            label: ctx => {
              const pct = Math.round((ctx.parsed / events.length) * 100);
              return ` ${ctx.label}: ${ctx.parsed} event (${pct}%)`;
            }
          }
        }
      },
      cutout: "55%",
    }
  });
}

/* ══════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════ */
function initNavbar() {
  window.addEventListener("scroll", () => {
    document.querySelector("#navbar").classList.toggle("scrolled", window.scrollY > 20);
  });

  const hamburger = document.querySelector("#hamburger");
  const navLinks  = document.querySelector("#navLinks");
  hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));

  navLinks.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  const sections = ["home", "events", "venue", "statistik", "tentang"];
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(id => {
      const el = document.querySelector(`#${id}`);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.dataset.section === current);
    });
  });
}

/* ══════════════════════════════════════════════
   INIT — jalankan semua saat DOM siap
══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initHeroSwiper();      // ← Swiper harus diinit sebelum render lainnya
  initNavbar();
  renderHeroStats();
  startCountdown();
  renderLatestEvents();
  renderEvents();
  initEventFilters();
  initModal();
  renderVenueAnalytics();
  populateGedungFilter();
  renderVenues();
  initVenueFilters();
  renderCharts();
});

