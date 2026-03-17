import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'testuser',
  password: 'testpass',
  database: 'testdb',
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
