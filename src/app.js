import express from "express";
import bodyParser from "body-parser";
import db from "./config/mongoConection.js";
import users from "../users.js";
import path from 'path';
import url from 'url';
import registroController from "./controllers/UserControllers.js";

db.on("error", console.log.bind(console, "Erro de conexão...")); // bind = ligar , conectar.
db.once("open", () => console.log("Conexão com o banco de dados estabelecida."));

const __filename = url.fileURLToPath(import.meta.url);
const baseDir = path.dirname(__filename);
const __dirname = path.join(baseDir, '..');
// atribuir a dirname o diretorio acima deste.
//console.log(__filename);
//console.log(__dirname);

const app = express();
app.use('/css', express.static(__dirname + '/front-end/css'));
app.use('/js',express.static(__dirname + '/front-end/js'))

// Configura o middleware do body-parser - Usado para tranformar a string em objetos do javascript
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/front-end/index.html");
});

app.get('/login', (req, res) => {
    res.status(200).sendFile(__dirname + "/front-end/login.html");
});

app.get('/register', (req, res) => {
    res.status(200).sendFile(__dirname + "/front-end/registro.html");
});

app.get("/dev", (req, res) => {
    res.status(200).send(users);
})

// Define a rota para o processamento do formulário de login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const validacao = await registroController.verificaUsuario(username, password);

    if (validacao.bool) {
        // Retorna a mensagem de sucesso para o usuário
        res.send('Login efetuado com sucesso!');
    } else {
        // Retorna uma mensagem de erro para o usuário
        res.status(401).send(validacao.message);
    }
});

// Define a rota para o processamento do formulário de registro
app.post('/register', (req, res) => {
    const { username, email, password, "confirm-password": confirmPassword } = req.body;
    // Aqui foi usada a desestruturação ES6 para criar constantes a partir do objeto req.body porem devido ao Javascript 
    // não ser convencional usar variaveis com hifen , foi renomeado para confirmPassword. 

    if (password !== confirmPassword) {
        return res.status(400).send('As senhas não conferem!');
    }

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(409).send('Usuário já existe!');
    }

    // Adiciona o novo usuário ao array de usuários
    users.push({ username, email, password });    
    registroController.cadastrarUser({ username, email, password });


    res.send('Usuário registrado com sucesso!');
});

// Exporta a instância do servidor
export default app;
