# Dashboard Tracking Kredit – Bank BJB Cabang Depok

## Struktur File

```
bjb-kredit-tracking/
├── index.html          ← Halaman nasabah (cek status)
├── admin.html          ← Panel AO (kelola data)
├── data/
│   └── nasabah.js      ← File data nasabah (edit di sini)
└── assets/
    └── logo_bjb.png    ← Logo Bank BJB
```

---

## CARA DEPLOY KE INTERNET (Step by Step)

### Langkah 1 – Buat akun GitHub
1. Buka https://github.com
2. Klik "Sign up" → isi email, password, username
3. Verifikasi email Anda

### Langkah 2 – Buat repository baru di GitHub
1. Login ke GitHub
2. Klik tombol "+" (pojok kanan atas) → "New repository"
3. Nama repository: `bjb-kredit-tracking`
4. Pilih: Public
5. Klik "Create repository"

### Langkah 3 – Upload file dari VS Code ke GitHub
Di VS Code, buka Terminal (Ctrl+` atau View > Terminal) lalu jalankan:

```bash
cd path/ke/folder/bjb-kredit-tracking

git init
git add .
git commit -m "Initial commit - Dashboard BJB"
git branch -M main
git remote add origin https://github.com/USERNAME_ANDA/bjb-kredit-tracking.git
git push -u origin main
```

Ganti `USERNAME_ANDA` dengan username GitHub Anda.

### Langkah 4 – Deploy ke Vercel (GRATIS, dapat link .vercel.app)
1. Buka https://vercel.com
2. Klik "Sign Up" → pilih "Continue with GitHub"
3. Authorize Vercel
4. Klik "Add New Project"
5. Pilih repository `bjb-kredit-tracking`
6. Klik "Deploy"
7. Tunggu 1-2 menit → Vercel akan memberi Anda link seperti:
   `https://bjb-kredit-tracking.vercel.app`

---

## CARA UPDATE DATA NASABAH

### Cara 1 – Edit file langsung (recommended untuk AO)
1. Buka file `data/nasabah.js` di VS Code
2. Tambah/edit objek nasabah sesuai format yang ada
3. Simpan file
4. Jalankan di terminal:
   ```bash
   git add data/nasabah.js
   git commit -m "Update data nasabah"
   git push
   ```
5. Vercel otomatis akan deploy ulang dalam 1-2 menit

### Cara 2 – Pakai Admin Panel di browser
1. Buka `admin.html` di browser
2. Tambah/edit data lewat form
3. Klik tombol "Download nasabah.js"
4. Salin file yang didownload ke folder `data/`
5. Push ke GitHub (ikuti langkah di Cara 1 poin 4-5)

---

## AKSES LINK

- **Nasabah:** `https://bjb-kredit-tracking.vercel.app/index.html`
- **Admin AO:** `https://bjb-kredit-tracking.vercel.app/admin.html`

---

## TIPS

- Bagikan link `index.html` ke nasabah atau manajer untuk demo
- Link `admin.html` cukup untuk internal AO saja
- Untuk proteksi admin dengan password, beritahu developer untuk ditambahkan nanti
