import pool from './db';

export const userTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(300) NOT NULL,
      role ENUM('admin', 'student', 'instructor') DEFAULT 'student',
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`;

  try {
    await pool.execute(query);
    console.log('Users table is ready with roles and timestamps!');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};
