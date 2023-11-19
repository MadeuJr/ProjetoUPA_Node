const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://ifzgjcdo:S5X65ge-otVIp-v8tWnn7F0XvnmB1Bv0@isabelle.db.elephantsql.com/ifzgjcdo');

(async () => {
    await sequelize.sync();
    
})();


module.exports = sequelize;