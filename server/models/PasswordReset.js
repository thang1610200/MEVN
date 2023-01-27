import mongoose from "mongoose";

const PasswordResetSchema = mongoose.Schema({
    email: String,
    token: String,
    createdAt: Date
})

export default mongoose.model('PasswordReset',PasswordResetSchema);