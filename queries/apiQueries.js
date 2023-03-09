const db = require("../pgPool");

const getAll = (request, response, next) => {
    db.query(`SELECT * FROM "restaurants"
                UNION SELECT * FROM "homeServices"
                UNION SELECT * FROM "autoServices"
                UNION SELECT * FROM "more"`, (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

const getAllLike = (request, response, next) => {

    const { input } = request.params;

    console.log(input)
    db.query(`SELECT * FROM restaurants
                WHERE name LIKE '%${input}%'
                UNION 
                SELECT * FROM "homeServices"
                WHERE name LIKE '%${input}%'
                UNION
                SELECT * FROM "autoServices"
                WHERE name LIKE '%${input}%'
                UNION 
                SELECT * FROM "more"
                WHERE name LIKE '%${input}%'`, (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAll,
    getAllLike,
}