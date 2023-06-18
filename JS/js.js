var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2500); // Change image every 2 seconds
}

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