import mongoose from "mongoose";

await mongoose.connect("mongodb+srv://Usuario1:1234@to-do-list.xgrmd7m.mongodb.net/Login");
//mongodb://127.0.0.1:27017
let db = mongoose.connection
localhost:27017

export default db;