import mongoose from 'mongoose'

const Schema = mongoose.Schema

let User = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    phone: String,
    id: String
})

export default mongoose.model("User", User, 'users')