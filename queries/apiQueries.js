const db = require("../pgPool");

const getAll = (request, response, next) => {
    db.query(`SELECT * FROM "businesses"`, (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

const getAllLike = (request, response, next) => {

    let { input } = request.params;
    input = input.replace("'", '');
    console.log(input)
    db.query(`SELECT * from "businesses" where '%${input}%' <~~ ANY(tags)`, (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

const getIndividualBusiness = (request, response, next) => {
    const { name } = request.params;
    db.query(`SELECT * FROM "businesses"
                WHERE name = $1`, [name], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

const getBusinessImages = (request, response, next) => {
    const { name } = request.params;
    console.log(name)
    db.query(`SELECT images FROM "businesses"
                WHERE name = $1`, [name], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAll,
    getAllLike,
    getIndividualBusiness,
    getBusinessImages,
}