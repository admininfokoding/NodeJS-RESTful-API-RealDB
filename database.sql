CREATE DATABASE IF NOT EXISTS db_perusahaan;
USE db_perusahaan;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL,
  status VARCHAR(20) DEFAULT 'aktif'
);

INSERT INTO users (nama, role, status) VALUES
('Budi Hartono', 'Admin', 'aktif'),
('Siti Aminah', 'Member', 'aktif'),
('Joko Widodo', 'Member', 'nonaktif');
