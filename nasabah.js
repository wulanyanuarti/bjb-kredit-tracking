// ============================================================
//  DATA NASABAH - Edit file ini untuk tambah / ubah data
//  Format: tambahkan objek baru di dalam array NASABAH
// ============================================================

const NASABAH = [
  {
    nik: "3276010101900001",
    nama: "Budi Santoso",
    nopeng: "BJB-KPR-2025-00431",
    jenis: "KPR Griya Makmur",
    plafon: "Rp 450.000.000",
    tenor: "180 Bulan (15 Tahun)",
    tglPengajuan: "12 Juni 2025",
    estimasi: "7–10 Hari Kerja",
    // activeStep: 0=Pengajuan, 1=Verifikasi, 2=Analisa, 3=Approval, 4=Selesai
    activeStep: 2,
    statusLabel: "Dalam Proses Analisa",
    stepDates: ["12 Jun 2025", "14 Jun 2025", "Sedang Berjalan", "—", "—"],
    ao: {
      nama: "Ahmad Santoso",
      inisial: "AS",
      telp: "0812-3456-7890",
      email: "a.santoso@bankbjb.co.id"
    }
  },
  {
    nik: "3276020202850002",
    nama: "Siti Rahayu",
    nopeng: "BJB-KMK-2025-00287",
    jenis: "Kredit Modal Kerja",
    plafon: "Rp 200.000.000",
    tenor: "60 Bulan (5 Tahun)",
    tglPengajuan: "05 Juni 2025",
    estimasi: "3–5 Hari Kerja",
    activeStep: 3,
    statusLabel: "Menunggu Approval",
    stepDates: ["05 Jun 2025", "07 Jun 2025", "10 Jun 2025", "Sedang Berjalan", "—"],
    ao: {
      nama: "Dewi Puspita",
      inisial: "DP",
      telp: "0821-9876-5432",
      email: "d.puspita@bankbjb.co.id"
    }
  },
  {
    nik: "3276030303750003",
    nama: "Rudi Firmansyah",
    nopeng: "BJB-KKB-2025-00112",
    jenis: "KKB Kendaraan Bermotor",
    plafon: "Rp 85.000.000",
    tenor: "48 Bulan (4 Tahun)",
    tglPengajuan: "28 Mei 2025",
    estimasi: "1–2 Hari Kerja",
    activeStep: 4,
    statusLabel: "Disetujui – Siap Cair",
    stepDates: ["28 Mei 2025", "29 Mei 2025", "02 Jun 2025", "04 Jun 2025", "06 Jun 2025"],
    ao: {
      nama: "Hendra Wijaya",
      inisial: "HW",
      telp: "0813-1111-2222",
      email: "h.wijaya@bankbjb.co.id"
    }
  }
];
