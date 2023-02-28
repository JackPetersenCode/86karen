const db = require("../pgPool");

const getAll = (request, response, next) => {
    db.query(`SELECT * FROM "restaurants"
                UNION SELECT * FROM "homeServices"`, (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAll,
}