const Post = require('../Models/Post')

module.exports = {
    async likePost(req, res){
        const { post_id } = req.params
        const { user_id} = req.headers
        try {
            const likedPost = await Post.findById(post_id)
            if(!likedPost) return res.status(400).send('Post does not exists')

            if(likedPost.likes.includes(user_id)) return res.status(400).send('Post already liked')

            likedPost.likes.push(user_id)

            await likedPost.save()

            return res.status(200).send({
                message: 'Post Liked',
                likedPost
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async dislikePost(req, res){
        const { post_id } = req.params
        const { user_id} = req.headers

        try {
            const dislikedPost = await Post.findById(post_id)
            if(!dislikedPost) return res.status(400).send('Post does not exists')

            if(!dislikedPost.likes.includes(user_id)) return res.status(400).send('Post not liked yet')

            dislikedPost.likes.pull(user_id)
            await dislikedPost.save()

            return res.status(200).send({
                message: 'Post unliked',
                dislikedPost
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}