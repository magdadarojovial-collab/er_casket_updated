// backend/config/db.js
const mysql  = require('mysql2/promise');

// Only load .env file in development — on Railway/production,
// environment variables are injected directly and must NOT be overridden
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const pool = mysql.createPool({
  host:               process.env.DB_HOST     || 'localhost',
  port:               parseInt(process.env.DB_PORT) || 3306,
  user:               process.env.DB_USER     || 'root',
  password:           process.env.DB_PASSWORD || '',
  database:           process.env.DB_NAME     || 'eternal_rest',
  waitForConnections: true,
  connectionLimit:    10,
  queueLimit:         0,
  timezone:           '+08:00',
});

// Log which host we are connecting to (helps debug)
console.log(`🔌  DB connecting → ${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 3306}`);

pool.getConnection()
  .then(conn => {
    console.log('✅  MySQL connected successfully');
    conn.release();
  })
  .catch(err => {
    console.error('❌  MySQL connection failed:', err.message);
  });

module.exports = pool;
