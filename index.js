require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Inisialisasi Koneksi Database Nyata (Real DB Connection)
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'db_perusahaan',
  waitForConnections: true,
  connectionLimit: 10
});

// Endpoint GET /api/users
app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, nama, role, status FROM users WHERE status = ?', ['aktif']);
    
    res.status(200).json({
      success: true,
      message: 'Data pengguna dari database berhasil diambil',
      data: rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Database Error' });
  }
});

// Endpoint POST /api/users (Create User)
app.post('/api/users', async (req, res) => {
  try {
    const { nama, role } = req.body;
    
    if (!nama || !role) {
      return res.status(400).json({ success: false, message: 'Nama dan role wajib diisi' });
    }

    const [result] = await pool.query('INSERT INTO users (nama, role, status) VALUES (?, ?, ?)', [nama, role, 'aktif']);
    
    res.status(201).json({
      success: true,
      message: 'Pengguna berhasil ditambahkan',
      data: {
        id: result.insertId,
        nama,
        role,
        status: 'aktif'
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Gagal menambahkan pengguna' });
  }
});

app.listen(port, () => {
  console.log(`Backend API Database Realtime berjalan di http://localhost:${port}`);
});
