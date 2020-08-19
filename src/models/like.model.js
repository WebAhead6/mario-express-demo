const db = require("../../database/connection")

const manyByPostId = (id) => db.query(
    `SELECT * FROM likes WHERE post_id = $1`, [id]
)
    .then(result => result.rows)
    .catch(error => console.log('Error: likes model: manyByPostId', error))

const countPostLikes = (id) => db.query(
    `SELECT COUNT(*) FROM likes WHERE post_id = $1`, [id]
)
    .then(result => result.rows[0].count)
    .catch(error => console.log('Error: likes model: manyByPostId', error))


module.exports = { manyByPostId, countPostLikes }
