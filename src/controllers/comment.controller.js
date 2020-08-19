const models = require('../models')

const create = (req, res) => {
    models.comment.add(req.body)
        .then(() => res.redirect('back'))
        .catch(error => {
            console.log(error)
            res.send('<h1>Error occurred</h1>')
        })
}

module.exports = { create }
