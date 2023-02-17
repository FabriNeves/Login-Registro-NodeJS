import express from "express";
import bodyParser from "body-parser";
import users from "./users.js";
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);


const app = express();
app.use('/static', express.static(__dirname + '/public'));

// Configura o middleware do body-parser - Usado para tranformar a string em objetos do javascript
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname+"/front-end/index.html");
});

app.get('/login', (req, res) => {
  res.status(200).sendFile(__dirname+"/front-end/login.html");
});

app.get('/register', (req, res) => {
    res.status(200).sendFile(__dirname+"/front-end/registro.html");
});

// Define a rota para o processamento do formulário de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Retorna a mensagem de sucesso para o usuário
      res.send('Login efetuado com sucesso!');
    } else {
      // Retorna uma mensagem de erro para o usuário
      res.status(401).send('Usuário ou senha inválidos!');
    }
});

// Define a rota para o processamento do formulário de registro
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    res.status(409).send('Usuário já existe!');
  } else {
    users.push({ username, password });
    res.send('Usuário registrado com sucesso!');
  }
});

 //=> server.js
export default app;