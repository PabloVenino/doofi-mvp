const jwt = require("jsonwebtoken")

const jwt_secret = "1"
const expirationTime = "1h"

const Token = {
  generate_token(payload) {
    return jwt.sign(payload, jwt_secret, { expiresIn: expirationTime || "15m" })
  },

  get_payload(token) {
    // tokenWithoutBearer = token.split(" ")[1]
    return jwt.verify(token)
  }
}

module.exports = Token