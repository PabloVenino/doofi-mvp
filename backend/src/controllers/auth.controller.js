const AuthService = require("../services/auth.service")

const AuthController = {
  async login(req, res) {
    try {
      const user = await AuthService.login(req.body)

      res.status(200).json({ data: user, message: "Logado com sucesso." })
    }
    catch (error) {
      res.status(500).json({ error: { code: "ERROR_LOGIN", message: "" } })
    }
  },

  async forgot_password(req, res) {
    try {

    }
    catch {

    }
  },

  async refresh_token(req, res) {
    try {

    }
    catch {

    }
  }
}