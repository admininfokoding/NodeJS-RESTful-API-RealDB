# NodeJS RESTful API Real Database

Repositori ini adalah implementasi nyata dari contoh kode yang dibahas pada panduan [Belajar Backend Development: Membuat RESTful API](https://infokoding.com/tutorial/backend/membuat-restful-api).

API ini dibangun menggunakan `Express.js` dan mendemonstrasikan koneksi database asinkron dengan `mysql2/promise` untuk mengambil data riil dari database.

## Instalasi

1. Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) dan MySQL server.
2. Clone repositori ini atau download source codenya.
3. Buka terminal di direktori proyek dan jalankan perintah:
   ```bash
   npm install
   ```

## Setup Database

1. Buka antarmuka MySQL Anda (seperti phpMyAdmin, DBeaver, atau MySQL CLI).
2. Eksekusi semua perintah SQL yang ada di dalam file `database.sql` untuk membuat tabel dan memasukkan data dummy.
3. Salin file `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
4. Sesuaikan konfigurasi `.env` dengan kredensial database lokal Anda.

## Menjalankan Server

Untuk menjalankan API Server, gunakan perintah:

```bash
node index.js
```

Server akan aktif secara default di `http://localhost:3000`.

## Endpoint Tersedia

* `GET /api/users` - Mengambil daftar user dengan status aktif.
* `POST /api/users` - Menambahkan pengguna baru.
