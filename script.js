let cart = {};

// Function to update the cart when a product's quantity changes
function updateCart(product, price) {
    const quantity = document.getElementById(product.toLowerCase() + "Qty").value;

    if (quantity > 0) {
        cart[product] = { quantity: quantity, price: price * quantity };
    } else {
        delete cart[product]; // Remove from cart if quantity is 0
    }

    calculateTotal();        // Recalculate the total price
    displayCartSummary();    // Update the cart summary display
}

// Function to remove a specific item from the cart
function removeFromCart(product) {
    if (cart[product]) {
        delete cart[product]; // Remove the item from the cart
    }
    calculateTotal();        // Recalculate the total price
    displayCartSummary();    // Update the cart summary display
}

// Function to clear the entire cart
function clearCart() {
    cart = {};               // Reset the cart to an empty object
    calculateTotal();        // Set the total price to 0
    displayCartSummary();    // Clear the cart summary display
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = 0;
    for (let item in cart) {
        total += cart[item].price; // Sum up prices of items in the cart
    }
    document.getElementById("totalPrice").innerText = "Total: GH₵" + total.toFixed(2); // Display total
}

// Function to display the current cart summary
function displayCartSummary() {
    const cartSummary = document.getElementById("cartSummary");
    cartSummary.innerHTML = ""; // Clear previous summary

    for (let item in cart) {
        const productDetails = document.createElement("div");
        productDetails.innerHTML = `${item}: ${cart[item].quantity} kg - GH₵${cart[item].price.toFixed(2)} 
            <button onclick="removeFromCart('${item}')">Remove</button>`;
        cartSummary.appendChild(productDetails); // Add product details with remove button
    }
}

// Function to handle order placement (to be implemented later)
function placeOrder() {
    // Currently just shows an alert; can be modified to handle actual order submission
    alert("Proceeding to payment...");
}
// Function to handle order placement - opens the payment modal
function placeOrder() {
    document.getElementById("paymentModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("paymentModal").style.display = "none";
}

// Function to process payment based on the selected option
function processPayment(method) {
    alert("You have selected " + method + " as your payment method.");
    closeModal();
}
function searchSite() {
    // Clear previous highlights
    clearHighlights();

    // Get the search term
    const searchTerm = document.querySelector('.search-container input[type="text"]').value.trim().toLowerCase();
    if (!searchTerm) return;

    // Get all text nodes in the body and highlight matches
    highlightMatches(document.body, searchTerm);
}

// Function to clear previous highlights
function clearHighlights() {
    const highlights = document.querySelectorAll("mark.highlight");
    highlights.forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
    });
}

