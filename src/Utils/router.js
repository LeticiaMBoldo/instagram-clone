const { Router } = require('express')
const LoginController = require('../Controllers/LoginController')
const PostController = require('../Controllers/PostController')
const UserController = require('../Controllers/UserController')
const ProfileController = require('../Controllers/ProfileController')
const LikeController = require('../Controllers/LikeController')

const router = Router()

//ações que o sistema vai fazer = rotas
//users
router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)
//login
router.post('/login', LoginController.login)
//Post
router.post('/posts', PostController.createPost)
router.get('/posts', PostController.listAllPost)
router.delete('/posts/:post_id', PostController.deletePost)
router.put('/posts/:post_id', PostController.editPost)

// Visualizar perfil de um usuário
router.get('/users/:user_id', ProfileController.getProfile) 

//Dar like em uma foto
router.post('/posts/:post_id/like', LikeController.likePost)
router.post('/posts/:post_id/dislike', LikeController.dislikePost)

module.exports = router