// Elementos do DOM
const ticketTypeSelect = document.getElementById('ticketType');
const casadinhaFields = document.getElementById('casadinhaFields');
const reservationForm = document.getElementById('reservationForm');
const successMessage = document.getElementById('successMessage');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const partner1NameInput = document.getElementById('partner1Name');
const partner1PhoneInput = document.getElementById('partner1Phone');
const partner2NameInput = document.getElementById('partner2Name');
const partner2PhoneInput = document.getElementById('partner2Phone');

// Event Listeners
ticketTypeSelect.addEventListener('change', toggleCasadinhaFields);
reservationForm.addEventListener('submit', handleFormSubmit);

// Função para mostrar/ocultar campos de casadinha
function toggleCasadinhaFields() {
    const selectedValue = ticketTypeSelect.value;
    
    if (selectedValue === 'casadinha') {
        casadinhaFields.style.display = 'block';
        // Adicionar validação obrigatória aos campos
        partner1NameInput.required = true;
        partner1PhoneInput.required = true;
        partner2NameInput.required = true;
        partner2PhoneInput.required = true;
        
        // Animar a aparição
        casadinhaFields.style.animation = 'slideDown 0.3s ease';
    } else {
        casadinhaFields.style.display = 'none';
        // Remover validação obrigatória
        partner1NameInput.required = false;
        partner1PhoneInput.required = false;
        partner2NameInput.required = false;
        partner2PhoneInput.required = false;
        // Limpar os campos
        partner1NameInput.value = '';
        partner1PhoneInput.value = '';
        partner2NameInput.value = '';
        partner2PhoneInput.value = '';
    }
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Validar campos obrigatórios
    if (!validarFormulario()) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Coletar dados do formulário
    const formData = coletarDadosFormulario();
    
    // Exibir mensagem de sucesso
    mostrarMensagemSucesso();
    
    // Limpar formulário
    resetForm();
    
    // Log dos dados (em produção, isso seria enviado para um servidor)
    console.log('Dados da Reserva:', formData);
    
    // Aqui você poderia enviar os dados para um servidor
    // enviarDadosParaServidor(formData);
}

// Função para validar o formulário
function validarFormulario() {
    const ticketType = ticketTypeSelect.value;
    
    if (!ticketType) {
        alert('Selecione um tipo de passagem.');
        return false;
    }
    
    if (ticketType === 'casadinha') {
        if (!partner1NameInput.value.trim() || !partner1PhoneInput.value.trim() ||
            !partner2NameInput.value.trim() || !partner2PhoneInput.value.trim()) {
            alert('Por favor, preencha os dados de ambas as pessoas da casadinha.');
            return false;
        }
    }
    
    return true;
}

// Função para coletar dados do formulário
function coletarDadosFormulario() {
    const ticketType = ticketTypeSelect.value;
    const formData = {
        nome: nameInput.value,
        telefone: phoneInput.value,
        email: document.getElementById('email').value,
        tipoPassagem: ticketType,
        localEmbarque: document.getElementById('embarkPoint').value,
        destino: document.getElementById('destination').value,
        formaPagamento: document.getElementById('paymentMethod').value,
        observacoes: document.getElementById('observations').value,
        data: new Date().toLocaleString('pt-BR')
    };
    
    if (ticketType === 'casadinha') {
        formData.casadinha = {
            pessoa1: {
                nome: partner1NameInput.value,
                telefone: partner1PhoneInput.value
            },
            pessoa2: {
                nome: partner2NameInput.value,
                telefone: partner2PhoneInput.value
            }
        };
    }
    
    return formData;
}

// Função para mostrar mensagem de sucesso
function mostrarMensagemSucesso() {
    reservationForm.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Scroll para a mensagem de sucesso
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Função para resetar o formulário
function resetForm() {
    reservationForm.reset();
    casadinhaFields.style.display = 'none';
    successMessage.style.display = 'none';
    reservationForm.style.display = 'block';
    ticketTypeSelect.value = '';
}

// Função para formatar telefone
function formatarTelefone(telefone) {
    const apenasNumeros = telefone.replace(/\D/g, '');
    if (apenasNumeros.length === 11) {
        return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
    }
    return telefone;
}

// Adicionar máscara de telefone aos inputs
phoneInput.addEventListener('input', function() {
    this.value = formatarTelefone(this.value);
});

partner1PhoneInput.addEventListener('input', function() {
    this.value = formatarTelefone(this.value);
});

partner2PhoneInput.addEventListener('input', function() {
    this.value = formatarTelefone(this.value);
});

// Animação CSS para slideDown
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Inicializar
console.log('Script carregado com sucesso!');

