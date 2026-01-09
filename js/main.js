document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('formContato');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const tel = document.getElementById('telefone').value;
            const cpf = document.getElementById('cpf').value;

            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            const telRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

            if (!cpfRegex.test(cpf)) {
                alert("CPF Inválido! Use o formato: 000.000.000-00");
                return;
            }

            if (!telRegex.test(tel)) {
                alert("Telefone Inválido! Use o formato: (11) 99999-9999");
                return; 
            }

            form.innerHTML = `
                <div style="background-color: #6a8c5a; color: white; padding: 20px; border: 3px solid #4a3c2e; border-radius: 8px; text-align: center;">
                    <h3 style="font-family: 'Press Start 2P', cursive; font-size: 14px;">RESPEITE MINHA AUTORIDADE!</h3>
                    <p>Mensagem enviada com sucesso, <strong>${nome}</strong>!</p>
                    <p>Seus dados foram validados localmente (Simulação POST).</p>
                    <button onclick="window.location.reload()" class="btn btn-light btn-sm mt-3">Novo Envio</button>
                </div>
            `;
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.querySelector('#carouselWiki');

    if (carouselElement) {
        var bsCarousel = new bootstrap.Carousel(carouselElement, {
            interval: 4000,
            wrap: true,    
            pause: 'hover' 
        });
        console.log("Carrossel 'carouselWiki' inicializado com sucesso!");
    }

    
});

const inputTel = document.getElementById('telefone');

if (inputTel) {
    inputTel.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '');
        

        x = x.replace(/^(\d{2})(\d)/g, "($1) $2"); 
        x = x.replace(/(\d{5})(\d)/, "$1-$2");
        
        e.target.value = x;
    });
}

const inputCpf = document.getElementById('cpf');

if (inputCpf) {
    inputCpf.addEventListener('input', function(e) {
        let valor = e.target.value.replace(/\D/g, ''); 
        
        if (valor.length <= 11) {
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        
        e.target.value = valor;
    });
}