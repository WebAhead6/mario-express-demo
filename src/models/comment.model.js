const db = require("../../database/connection")

const manyByPostId = (id) => db.query(
    `SELECT * FROM comments WHERE post_id = $1`, [id]
)
    .then(result => result.rows)
    .catch(error => console.log('Error: commnets model: manyByPostId', error))


const add = (data) => db.query(`
INSERT INTO comments (content, post_id) VALUES ($1, $2)
RETURNING id`, [data.content, data.post_id])
    .then(result => result.rows[0].id)
    .catch(error => console.log('Error: posts model: add', error))

module.exports = { manyByPostId, add }
