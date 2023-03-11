const db = require("../pgPool");

const getReviews = (request, response, next) => {

    const { name } = request.params;
    console.log(request.params)
    db.query(`SELECT reviews FROM "businesses"
                WHERE name = $1`, [name], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

const getCount = (request, response, next) => {

    const { name } = request.params;
    console.log(request.params)
    db.query(`SELECT ARRAY_LENGTH(reviews, 1) FROM "businesses"
                WHERE name = $1`, [name], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getReviews,
    getCount,
}