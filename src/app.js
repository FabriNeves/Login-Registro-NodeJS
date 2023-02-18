import express from "express";
import bodyParser from "body-parser";
import users from "../users.js";
import path from 'path';
import url from 'url';



const __filename = url.fileURLToPath(import.meta.url);
const baseDir = path.dirname(__filename);
const __dirname = path.join(baseDir, '..');
// atribuir a dirname o diretorio acima deste.


console.log(__filename);
console.log(__dirname);

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
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    // metodo find usa uma callback function para retornar o objeto usuario , caso o mesmo tenha igualdade entre usario e senha; 
    // como o retorno da função find se não achar nenhum elemento é undefined , podemos usar para verificar o if abaixo;

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

    res.send('Usuário registrado com sucesso!');
});

// Exporta a instância do servidor
export default app;
