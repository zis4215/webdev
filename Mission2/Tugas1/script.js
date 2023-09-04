
let cartItems = {};

let sidebarVisible = false;

function addToCart(productName, price, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    
    if (quantity > 0) {
        if (cartItems[productName]) {
            cartItems[productName].quantity += quantity;
        } else {
            cartItems[productName] = {
                price: price,
                quantity: quantity
            };
        }

        updateCart();
        updateSidebar(cartItems);
    }
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartList.innerHTML = "";
    let total = 0;

    for (const item in cartItems) {
        const product = cartItems[item];
        const itemTotal = product.price * product.quantity;
        total += itemTotal;

        const li = document.createElement("li");
        li.textContent = `${item} x ${product.quantity} - $${itemTotal}`;
        cartList.appendChild(li);
    }

    cartTotal.textContent = total;
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
    sidebarVisible = true;
}


function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    sidebarVisible = false;
}


function updateSidebar(cartItems) {
    if (Object.keys(cartItems).length > 0) {
        showSidebar();
    }
}


updateSidebar(cartItems);


function closeSidebar() {
    hideSidebar();
}


function nextAction() {
    // Noaction
}


const btnClose = document.getElementById("btn-close");
btnClose.addEventListener("click", closeSidebar);

const btnNext = document.getElementById("btn-next");
btnNext.addEventListener("click", nextAction);

