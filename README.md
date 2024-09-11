# Proyek Manajemen Setoran - Backend API

Ini adalah proyek backend API untuk manajemen setoran bulanan dengan berbagai sumber penerimaan, pengelolaan pengguna, dan otentikasi. Proyek ini menggunakan **NestJS**, **TypeORM**, dan **Microsoft SQL Server** sebagai basis data.

## Fitur Utama

- Otentikasi pengguna (login, logout).
- Pengelolaan pengguna dengan role-based access control (RBAC).
- Manajemen sumber penerimaan negara dan subkategori.
- Manajemen setoran bulanan dengan pelacakan berdasarkan tahun.

## Persyaratan

Sebelum menjalankan proyek, pastikan Anda telah menginstal:

- Node.js (minimal versi 14.x)
- Microsoft SQL Server
- Redis (untuk manajemen token blacklist)

## Instalasi

1. Clone repositori ini ke dalam direktori lokal Anda:

```bash
git clone https://github.com/username/repo-name.git

Masuk ke dalam direktori proyek:
cd repo-name

Install dependensi:
npm install

Sesuaikan file .env dengan konfigurasi database SQL Server dan Redis Anda. Contoh:
DB_HOST=localhost
DB_PORT=1433
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your_jwt_secret

Jalankan migrasi database (jika ada).

Menjalankan Aplikasi
Untuk menjalankan aplikasi secara lokal:

npm run start

Aplikasi akan berjalan di http://localhost:3000.

Rute API
1. Auth (Otentikasi)
Login
POST /api/auth/login
Body:

{
  "username": "your_username",
  "password": "your_password"
}

Logout
POST /api/auth/logout
Header: Authorization: Bearer <token>

2. Users (Pengguna)
Get All Users

GET /api/users
Create User

POST /api/users/create
Body:

{
  "username": "new_username",
  "email": "user@example.com",
  "password": "your_password",
  "role": "SPESIALIS_KEUANGAN" // atau "AM_PPN"
}

Update User Role

PUT /api/users/:id/role
Body:

{
  "role": "AM_PPN"
}

3. Kategori Sumber Penerimaan
Get All Kategori

GET /api/kategori-sumber-penerimaan
Create Kategori

POST /api/kategori-sumber-penerimaan/create
Body:

{
  "nama": "Penerimaan Pajak"
}

Get Kategori by ID

GET /api/kategori-sumber-penerimaan/:id
Update Kategori

PUT /api/kategori-sumber-penerimaan/:id
Body:

{
  "nama": "Penerimaan Pajak Daerah"
}

Delete Kategori

DELETE /api/kategori-sumber-penerimaan/:id
4. Sub Kategori Sumber Penerimaan
Get All Sub Kategori

GET /api/subkategori-sumber-penerimaan
Create Sub Kategori

POST /api/subkategori-sumber-penerimaan/create
Body:
{
  "nama": "PPH 21",
  "persen_kota_kab": 30,
  "persen_provinsi": 20,
  "persen_pusat": 50,
  "kategoriId": 1
}

Get Sub Kategori by ID

GET /api/subkategori-sumber-penerimaan/:id
Update Sub Kategori

PUT /api/subkategori-sumber-penerimaan/:id
Body:
{
  "nama": "PPH 22",
  "persen_kota_kab": 35,
  "persen_provinsi": 25,
  "persen_pusat": 40
}

Delete Sub Kategori

DELETE /api/subkategori-sumber-penerimaan/:id
5. Pembayaran (Setoran)
Create Pembayaran

POST /api/pembayaran/create
Body:
{
  "userId": 1,
  "subKategoriId": 2,
  "amount": 10000000,
  "kota_kab": 3000000,
  "provinsi": 2000000,
  "pusat": 5000000,
  "date": "2024-09-11"
}

Update Pembayaran

PUT /api/pembayaran/update/:id
Body:
{
  "amount": 12000000,
  "date": "2024-09-12"
}

