const db = require("../../config/database")

const Auth = {
    async login(userData) {
        return await db("users")
                    .where({ username: userData.username, password: userData.password })
                    .first()
    },

    async reset_password(id, userData) {
        return await db("users")
                    .where({ id })
                    .update(userData)
    }


}

module.exports = Auth