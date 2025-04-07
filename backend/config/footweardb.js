import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  database: 'footwear_db',
  username: 'web-sepatu-111',
  password: 'P0qPrQoo0SLOsB',
  host: '34.46.53.84',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Test koneksi
(async () => {
  try {
    sequelize.authenticate()
      .then(() => console.log('✅ Connected successfully!'))
      .catch(err => {
        console.error('❌ Connection failed:', err.message);
        console.log('\nLangkah troubleshooting:');
        console.log('1. Pastikan IP', process.env.YOUR_IP, 'diizinkan di Authorized Networks');
        console.log('2. Coba koneksi via MySQL CLI:');
        console.log(`   mysql -h 34.46.53.84 -u web-sepatu-111 -p`);
        console.log('3. Jika masih gagal, gunakan Cloud SQL Proxy');
      });
  } catch (error) {
    console.error('Unable to connect:', error);
  }
})();

export { sequelize, DataTypes };
