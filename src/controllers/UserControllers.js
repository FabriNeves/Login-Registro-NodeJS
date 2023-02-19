import User from "../models/Users.js";
// Users

class registroController {

    static verificaUsuario = async function (username, password) {
        try {
            const user = await User.findOne({ username });
            //console.log(user.username,user.password);
            if (!user) {
                return { bool: false, message: "Username Inválido!" }
            }
    
            const pass = user.password === password;
    
            if (!pass) {
                return { bool: false, message: "Senha Inválida!" }
            }
    
            return { bool: true, message: "Verificado" }
    
        } catch (err) {
            console.error(err);
        }
    }

    static cadastrarUser = function (registroObj) {
        let newUser = new User(registroObj);
        newUser.save((err) => {
            if (err) {
                return err.message;
            } else {
                return "Registro Salvo";
            }
        }
        )
    }
}

export default registroController;

