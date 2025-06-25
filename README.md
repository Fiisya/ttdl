# ✨ Ttdl

[![HTML](https://img.shields.io/badge/language-HTML-blue.svg)](https://www.w3.org/html/)
[![npm](https://img.shields.io/badge/npm-latest-green.svg)](https://www.npmjs.com/)


> Pengunduh video dan gambar TikTok tanpa watermark.

## ✨ Fitur Utama

* **Pengunduhan Video TikTok:**  Aplikasi ini memungkinkan pengguna untuk mengunduh video dari TikTok tanpa watermark.  Hal ini dicapai melalui penggunaan library eksternal seperti `axios` dan `node-fetch` yang menangani permintaan HTTP untuk mengambil data video.
* **Pengunduhan Gambar TikTok:** Selain video, aplikasi juga memungkinkan pengguna untuk mengunduh gambar dari TikTok.  Fungsionalitas ini kemungkinan besar dibangun di atas mekanisme yang sama dengan pengunduhan video, hanya mengambil aset gambar yang berbeda.
* **Antarmuka Sederhana (Diperkirakan):** Berdasarkan nama repositori dan teknologi yang digunakan, aplikasi kemungkinan memiliki antarmuka pengguna yang sederhana dan mudah digunakan untuk memasukkan URL TikTok dan memulai proses unduhan.


## 🛠️ Tumpukan Teknologi

| Kategori       | Teknologi | Catatan                                      |
|-----------------|------------|----------------------------------------------|
| Bahasa          | HTML        | Bahasa markup utama untuk antarmuka pengguna. |
| Manajer Paket  | npm         | Digunakan untuk mengelola dependensi.          |
| Library HTTP    | axios, node-fetch | Digunakan untuk melakukan permintaan HTTP ke API TikTok (diperkirakan). |


## 🏛️ Tinjauan Arsitektur

Arsitektur aplikasi ini diperkirakan sederhana.  Karena hanya menggunakan HTML dan library HTTP, aplikasi kemungkinan berjalan di sisi klien dan tidak memerlukan server backend.  Pengguna memasukkan URL TikTok, dan aplikasi melakukan permintaan HTTP untuk mengambil data video atau gambar, lalu memberikannya kepada pengguna untuk diunduh.

## 🚀 Memulai

1. Kloning repositori:
   ```bash
   git clone https://github.com/Fiisya/ttdl.git
   ```
2. Navigasi ke direktori proyek:
   ```bash
   cd ttdl
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```


## 📂 Struktur File

```
/
├── README.md
├── index.html
└── package.json
```

* **/:** Direktori akar proyek.
* **README.md:** File README ini.
* **index.html:** File HTML utama yang berisi antarmuka pengguna.
* **package.json:** File yang mencantumkan dependensi proyek dan skrip.

