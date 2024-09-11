

import { Sequelize, DataTypes } from 'sequelize';


const sequelize = new Sequelize('footwear_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  
});


(async () => {
  try {
    await sequelize.sync();
    console.log('Database and tables synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

export { sequelize, DataTypes };
