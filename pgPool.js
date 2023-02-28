const Pool = require('pg-pool');
const url = require('url');

const config = {
    password: 'yada-yada-yada',
    password: 'yada-yada-yada',
  password: 'yada-yada-yada',
  password: 'yada-yada-yada',
  port: 5432
};

const pool = new Pool(config);
module.exports = {
    query: (text, params, callback) => {
      const start = Date.now()
      return pool.query(text, params, (err, res) => {
        const duration = Date.now() - start
        console.log('executed query', { duration })
        callback(err, res)
      })
    },
}