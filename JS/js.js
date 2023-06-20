function changeContrast() {
    // Adicione o código para alterar o contraste da página aqui
    // Por exemplo, você pode adicionar uma classe CSS à <body> para alterar o estilo
    document.body.classList.toggle("high-contrast");
}

function increaseFontSize() {
    var elements = document.querySelectorAll("body *");

    if (increaseFontSize.fontSizeIncreased) {
        // Se a fonte estiver aumentada, diminuir para o tamanho original
        for (var i = 0; i < elements.length; i++) {
            if(elements[i]) {
                var originalSize = increaseFontSize.fontSizes[elements[i].tagName + i];
                if (originalSize) {
                    elements[i].style.fontSize = originalSize;
                }
            }
        }

        // Atualizar o estado da fonte para diminuída
        increaseFontSize.fontSizeIncreased = false;
    } else {
        // Se a fonte não estiver aumentada, aumentar
        increaseFontSize.fontSizes = {}; // Definir o objeto fontSizes aqui
        for (var i = 0; i < elements.length; i++) {
            var fontSize = window.getComputedStyle(elements[i]).getPropertyValue("font-size");
            increaseFontSize.fontSizes[elements[i].tagName + i] = fontSize; // Armazenar o tamanho original da fonte
            var newSize = parseInt(fontSize) + 1 + "px";
            elements[i].style.fontSize = newSize;
        }

        // Atualizar o estado da fonte para aumentada
        increaseFontSize.fontSizeIncreased = true;
    }
}


function openChatModal() {
    document.getElementById("chatModal").style.display = "block";
}

function closeChatModal() {
    document.getElementById("chatModal").style.display = "none";
}

function talk(){
    var know = {
    "1" : "Você pode acompanhar o status da sua encomenda acessando a área 'Minha Conta' no nosso site. Lá você encontrará informações atualizadas sobre o processamento, envio e entrega da sua encomenda",
    "2" : "Nossa equipe de especialistas está disponível para ajudá-lo a escolher a flor tropical perfeita para a ocasião desejada. Você pode entrar em contato conosco através do e-mail, Instagram e telefone, teremos prazer em fornecer recomendações personalizadas com base nas suas necessidades.",
    "3" : "Sim, oferecemos a opção de enviar uma mensagem personalizada junto com a sua flor tropical. Durante o processo de compra, você poderá adicionar uma mensagem especial que será incluída no arranjo ou no cartão que acompanha a flor.",
    "4" : "Sim, você pode personalizar um arranjo de acordo com as suas preferências. Entre em contato conosco e informe-nos sobre as suas preferências, como cores e estilo desejado. Faremos o possível para criar um arranjo exclusivo que atenda às suas expectativas.",
    "5" : "Para manter suas flores tropicais frescas por mais tempo, recomendamos mantê-las em local fresco, longe da luz direta do sol e de correntes de ar. Certifique-se de trocar a água regularmente, cortar as hastes diagonalmente e remover quaisquer folhas submersas. Siga as instruções de cuidados que acompanham o arranjo para obter melhores resultados.",
    "6" : "O prazo de entrega varia dependendo da sua localização e das opções de envio selecionadas. Durante o processo de compra, você poderá ver as opções de entrega disponíveis e os prazos estimados para cada uma delas.",
    "7" : "Sim, nos preocupamos com a qualidade das flores tropicais que entregamos. Se por algum motivo você não estiver satisfeito com a qualidade das flores recebidas, entre em contato conosco imediatamente para que possamos resolver a situação e encontrar uma solução adequada.",
    "8" : "Se as flores chegarem danificadas, pedimos que entre em contato conosco o mais rápido possível. Solicitaremos fotos das flores danificadas para avaliação e providenciaremos um reembolso ou um novo envio, de acordo com a situação.",
    "9" : "Sim, oferecemos descontos especiais para compras em grande quantidade de flores tropicais. Entre em contato conosco para discutir suas necessidades e requisitos específicos, e teremos prazer em fornecer uma cotação personalizada com preços especiais.",
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Desculpa, não entendi";
    }
}

function validarCadastro(){
    alert("Cadastro Concluído!")
}

