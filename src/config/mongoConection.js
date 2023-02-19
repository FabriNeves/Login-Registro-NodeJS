import mongoose from "mongoose";

await mongoose.connect("mongodb+srv://Usuario1:1234@to-do-list.xgrmd7m.mongodb.net/Login");

let db = mongoose.connection


export default db;