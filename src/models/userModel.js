import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  languages: { type: Array },
  // languages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Language' }],
  categories: { type: Array },
  saved_stories: { type: Array },
  token: { type: String },
  verified: { type: Boolean, default: false },
  verify_token: { type: String }, //verifyToken with link from webiste
  verify_token_expires: Date,
  verifyCode: { type: String }, //verifyCode from Mobile
  verifyCodeExpires: Date,
  reset_password_token: { type: String }, //resetPasswordToken with link from webiste
  reset_password_expires: Date,
  resetPasswordCode: { type: String }, //resetPasswordCode from Mobile
  resetPasswordCodeExpires: Date,
});

const User = mongoose.model("User", userSchema);

export default User;
