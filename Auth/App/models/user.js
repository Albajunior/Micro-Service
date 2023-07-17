// Import de Mongoose
const mongoose = require("mongoose");
//email unique
var uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

// Création du schéma pour la collection "users"
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Required Field"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Required Field"],
  },
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

//hashPassword
 userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
   this.password = await bcrypt.hash(this.password, 10);
  }
  next();
})

// Création du modèle pour la collection "utilisateurs"
const User = mongoose.model("User", userSchema);

module.exports = User;