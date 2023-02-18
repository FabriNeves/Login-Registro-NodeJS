import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/registro', { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection

export default db;