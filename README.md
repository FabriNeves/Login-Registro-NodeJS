# Projeto de Login e Registro com Autenticação em Node.js

Este é um projeto de exemplo para demonstrar como criar um sistema de login e registro de usuários com autenticação em Node.js usando as bibliotecas **bcrypt**, **express**, **mongoose** e **nodemon** somente para o desenvolvimento. O projeto permite que novos usuários se cadastrem, façam login. Além disso, usa bcrypt para criptografar e armazenar com segurança as senhas dos usuários.

## 🛠 Como instalar e executar o projeto

1) 👨🏾‍🤝‍👨🏾 Clone este repositório em seu computador:

``` git clone https://github.com/seu-usuario/nome-do-repositorio.git ```

2) 🍺 Instale as dependências do projeto:

```npm install```

3) 📗 Certifique-se de ter o MongoDB instalado em sua máquina, caso contrário instale e execute:

```sudo apt install mongodb-server-core```

```sudo systemctl start mongodb.service```

obs: Copiei isso de um tutorial de Linux

4) 🏁 Inicie o servidor de desenvolvimento:

```npm start```

5) ⛴ Abra um navegador da web e acesse o seguinte URL:

``` http://localhost:3000.```

Se nada explodir ja é possivel acessar as funcionalidades da aplicação. 

## 📖 Como usar o projeto
### ✍🏿 Cadastro de Usuários
Para criar uma nova conta de usuário, clique em "Register" na página inicial. Preencha o formulário de registro com um nome de usuário, um endereço de e-mail e uma senha. Depois de enviar o formulário, você será redirecionado para a página de login.( Ou pelo menos deveria )

### 🔑 Login de Usuários
Para fazer login em uma conta existente, clique em "Login" na página inicial. Preencha o formulário de login com o nome de usuário e a senha que você escolheu durante o registro.

## 🔧 Como o projeto funciona
Arquivos e Diretórios Principais
O projeto consiste nos seguintes arquivos e diretórios principais:

**server.js**: o arquivo principal do servidor.

**config/mongoConnection.js**: o arquivo que define a conexão do Mongoose com o banco de dados MongoDB.

**controllers/UserControllers.js**: o arquivo que define os controladores para a criação e autenticação de usuários.

**models/User.js**: o arquivo que define o modelo do Mongoose para usuários.

**front-end/**: o diretório que contém arquivos estáticos do frontend, como arquivos CSS e JavaScript.
