const bcrypt = require("bcrypt")

const saltRounds = parseInt(process.env.SALT) || 20;

const Encrypter = {
  async encrypt(password) {
    try {
      return await bcrypt.hash(password, saltRounds);
    }
    catch (error) {
      console.error("Error hashing password: " + error);
    }
  },

  async decode(enteredPassword, hashedPassword) {
    try {
      return await bcrypt.compare(enteredPassword, hashedPassword);
    }
    catch (error) {
      console.error("Error comparing passwords: " + error);
    }
  }
}

module.exports = Encrypter