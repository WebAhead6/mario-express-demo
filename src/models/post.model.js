const db = require("../../database/connection")

const add = (data) => db.query(`
INSERT INTO posts (title, body) VALUES ($1, $2)
RETURNING id`, [data.title, data.body])
    .then(result => result.rows[0].id)
    .catch(error => console.log('Error: posts model: add', error))

const all = () => db.query('SELECT * FROM posts')
    .then(result => result.rows)
    .catch(error => console.log('Error: posts model: all', error))

const oneById = (id) => db.query('SELECT * FROM posts WHERE id = $1', [id])
    .then(result => result.rows[0])
    .catch(error => console.log('Error: posts model: oneById', error))

module.exports = {
    add, all, oneById
}