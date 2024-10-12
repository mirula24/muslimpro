# Aplikasi MuslimPro

Aplikasi web ini menyediakan berbagai fitur Islami seperti Caption Islami, Al-Qur'an, dan Doa-Doa untuk aktivitas sehari-hari. Pengguna juga dapat mengunggah caption Islami mereka sendiri ke dalam aplikasi.

## Fitur Utama

### 1. Beranda
- Beranda aplikasi menampilkan **Caption Islami** yang diambil secara acak dari koleksi yang ada.
- Caption Islami ini berisi teks Arab, teks Latin, terjemahan ayat, dan artinya.
- Pengguna dapat memperbarui caption secara acak dengan mengklik tombol "Random Caption untuk memperbaiki mood mu".

### 2. Al-Qur'an
- Fitur ini memungkinkan pengguna untuk membaca ayat-ayat Al-Qur'an.
- Pengguna dapat memilih surah dan ayat yang ingin dibaca.
- Tersedia teks Arab beserta terjemahan dan teks Latin dari setiap ayat.

### 3. Doa - Doa
- Fitur ini menyediakan berbagai doa untuk aktivitas sehari-hari.
- Pengguna dapat mencari doa berdasarkan kategori atau aktivitas spesifik seperti doa sebelum tidur, doa keluar rumah, dan lain-lain.
- Setiap doa disertai dengan teks Arab, teks Latin, dan artinya.

### 4. Upload Caption
- Pengguna dapat mengunggah caption Islami mereka sendiri melalui fitur ini.
- Form upload caption meminta input teks Arab, teks Latin, ayat, dan artinya.
- Caption yang diunggah akan disimpan dan dapat ditampilkan di beranda.

## Teknologi yang Digunakan
- **React.js**: Digunakan untuk membangun antarmuka pengguna.
- **Axios**: Untuk melakukan permintaan HTTP ke server JSON untuk mengambil dan mengunggah data.
- **JSON Server**: Digunakan sebagai server sementara untuk menyimpan dan mengelola data caption.

## Cara Menggunakan
1. **Clone** repositori ini ke mesin lokal kamu.
   ```bash
   git clone <repository-url> 
   
   npm install

   npx json-server --watch db.json --port 3000
   
   npm start
