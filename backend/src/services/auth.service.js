const Auth = require('../models/auth/auth.models');
const Encrypter = require("../utils/bcrypt")
const Token = require("../utils/token")

const AuthService = {
  async login(request) {
    const { username, password } = request;
    const encriptedPassword = Encrypter.encrypt(password)

    user = Auth.login({ username: username, password: encriptedPassword })

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      role: user.role
    }

    return {
      user: payload,
      token: Token.generate_token(payload)
    }

  },

  async refresh_token(token) {
    // TokenService
    const payload = Token.get_payload(token)
    payload.exp 

  },

  async forgot_password() {
    // EmailService - send_email(type: forgot_password)

  }
}

module.exports = AuthService