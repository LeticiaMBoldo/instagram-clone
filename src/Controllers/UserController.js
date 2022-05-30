const res = require('express/lib/response')
const User = require('../Models/user')

module.exports = {
    async createUser(req, res){
        const { username,
                password,
                name,
                description,
                site,
                avatar
             } = req.body

        try {

            const userAlreadyExists = await User.findOne({
                username
            })
            if (userAlreadyExists) return res.status(400).send({ message: 'User already exists. try a different one'})

            const createdUser = await User.create({
                username,
                password,
                name,
                description,
                site,
                avatar
            })
            return res.status(200).send ({
                message: 'User created successfully',
                data: createdUser
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async listUser(req, res) {
        try {
            const allUsers = await User.find()

            return res.status(200).send({
                message: 'All users found',
                data: allUsers
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    
}