document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-cadastro'); 
    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#e-mail');
    const telefoneInput = document.querySelector('#numero');
    const tabela = document.querySelector('table tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        console.log('Formulário enviado');

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();

        if (nome === '' || telefone === '' || email === '') {
            alert('Preencha o formulário corretamente!');
            return;
        }

        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `<th>${nome}</th> <th>${telefone}</th> <th>${email}</th>`;

        tabela.appendChild(novaLinha);

        nomeInput.value = '';
        emailInput.value = '';
        telefoneInput.value = '';
    });
});
