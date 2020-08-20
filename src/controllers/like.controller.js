const models = require('../models')

const create = (req, res) => {
    models.like.add(req.body.postId)
        .then(() => res.json({ success: true }))
        .catch(error => {
            console.log(error)
            res.json({ success: false })
        })
}

module.exports = { create }