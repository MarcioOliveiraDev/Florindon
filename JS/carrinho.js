const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
for (var i = 0; i < removeCartProductButtons.length; i++) {
  removeCartProductButtons[i].addEventListener("click", removeProduct)
}

function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  }

function updateTotal(){
let totalAmount = 0
const cartProducts = document.getElementsByClassName("cart-product")
for (var i = 0; i <cartProducts.length; i++){
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
    const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value

    totalAmount += (productPrice * productQuantity)
    }
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount.toFixed(2).replace(".", ",")
}

const quantityInputs = document.getElementsByClassName("product-qtd-input")
for (var i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener("change", updateTotal)
}

const addToCartButtons = document.getElementsByClassName("w3-hover-deep-orange")
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addProductToCart)
}

function addProductToCart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("product-image")[0].src
    const productTitle = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText
    
    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")

    newCartProduct.innerHTML =
    `
    <td class="product-identification">
        <img src="${productImage}" alt="${productTitle}" class="cart-product-image">
        <strong class="cart-product-title">${productTitle}</strong>
    </td>
    <td>
        <span class="cart-product-price">${productPrice}</span>
    </td>
    <td>
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button type="button" class="remove-product-button">Remover</button>
    </td>
    `

    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCartProduct)

    updateTotal()
    newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", updateTotal)
    newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
}

function finalizarCompra(){
  alert("Compra Finalizada com Sucesso!")
}
