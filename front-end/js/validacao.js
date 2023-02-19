const form = document.querySelector('#registration-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

document.onclick = function() {
    console.log("javascript is in the house!")
};

form.addEventListener('submit', (event) => {
    // Previne o envio do formulário
    event.preventDefault();

    // Valida o nome de usuário
    // trim() remove os espaços do valor de username deixando somente letras e numeros(no começo e no fim)
    if (usernameInput.value.trim() === '') {
        alert('Por favor, preencha o nome de usuário.');
        return;
    } else if (usernameInput.value.trim().indexOf(" ") > 0) {
        alert('Por favor o nome do usuário não pode conter espaços.');
        return;
    }

    // Valida o endereço de email
    if (!emailInput.checkValidity()) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }

    // Valida a senha
    if (passwordInput.value.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    // Valida a confirmação da senha
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('As senhas não correspondem.');
        return;
    }

    // Se todos os campos estiverem válidos, envia o formulário
    form.submit();
});

