const db = require("../../database/connection")

const add = (postId) => db.query('INSERT INTO likes (post_id) VALUES ($1)', [postId])

const manyByPostId = (id) => db.query(
    `SELECT * FROM likes WHERE post_id = $1`, [id]
)
    .then(result => result.rows)
    .catch(error => console.log('Error: likes model: manyByPostId', error))

const countPostLikes = (id) => db.query(
    `SELECT COUNT(*) FROM likes WHERE post_id = $1`, [id]
)
    .then(result => result.rows[0].count)
    .catch(error => console.log('Error: likes model: countPostLikes', error))


module.exports = { manyByPostId, countPostLikes, add }
