const models = require('../models')


const home = (req, res) => {
    models.post.all()
        .then(data => {
            const formatData = data.map((post) => {
                post.created_at = post.created_at.toString().split('00:00:00')[0]

                return post
            })

            res.render('home', {
                posts: formatData
            })
        }).catch(error => {
            console.log(error)
            res.send('<h1>Error occurred</h1>')
        })
}

const postById = (req, res) => {
    const id = req.params.id

    Promise.all([
        models.post.oneById(id),
        models.comment.manyByPostId(id),
        models.like.countPostLikes(id)
    ])
        .then(data => {
            console.log(data)
            const post = data[0]

            res.render('post', {
                title: post.title,
                body: post.body,
                created_at: post.created_at.toString().split('00:00:00')[0],
                postId: post.id,
                comments: data[1],
                likes: data[2],
                postPage: true
            })
        }).catch(error => {
            console.log(error)
            res.send('<h1>Error occurred</h1>')
        })
}

const createForm = (req, res) => {
    res.render('new-post')
}

const create = (req, res) => {
    models.post.add(req.body)
        .then(id => res.redirect(`/post/${id}`))
        .catch(error => {
            console.log(error)
            res.send('<h1>Error occurred</h1>')
        })
}

module.exports = { home, postById, createForm, create }
