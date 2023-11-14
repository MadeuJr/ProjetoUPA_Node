
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sql10662049','sql10662049', 'HTZCKuCsYy', {
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql',
    logging: console.log
  });

(async () => {
    await sequelize.sync();
    
})();


module.exports = sequelize;