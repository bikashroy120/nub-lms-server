import pool from './db';

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      password VARCHAR(300),
    )`;
  try {
    await pool.execute(query);
    console.log('Users table is ready!');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

export default createTable;
