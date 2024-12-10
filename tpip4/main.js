// Utility: Save to localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Utility: Get from localStorage
function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Utility: Save to sessionStorage
function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

// Utility: Get from sessionStorage
function getFromSessionStorage(key) {
    return JSON.parse(sessionStorage.getItem(key)) || [];
}

// Add product to cart
function addToCart(productName, price) {
    const cart = getFromLocalStorage("cart");
    cart.push({ productName, price });
    saveToLocalStorage("cart", cart);
    alert(`${productName} added to cart!`);
}

// Event: Page Load
window.addEventListener("load", () => {
    console.log("Page loaded!");
    const cart = getFromLocalStorage("cart");
    console.log("Current Cart:", cart);
});

// Event: Scroll
window.addEventListener("scroll", () => {
    console.log("Page is scrolling...");
});

// Event: Resize
window.addEventListener("resize", () => {
    console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
});

// Form Example: Submit and Reset (not implemented in this example but demoed below)
document.addEventListener("DOMContentLoaded", () => {
    // Simulating a form
    const form = document.createElement("form");
    form.innerHTML = `
        <input type="text" id="name" placeholder="Enter name" required>
        <input type="email" id="email" placeholder="Enter email" required>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    `;
    document.body.appendChild(form);

    // Event: Submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        saveToSessionStorage("userDetails", { name, email });
        alert("Form submitted!");
        console.log("User Details:", getFromSessionStorage("userDetails"));
    });

    // Event: Reset
    form.addEventListener("reset", () => {
        console.log("Form reset!");
    });

    // Event: Focus and Blur
    const nameInput = document.getElementById("name");
    nameInput.addEventListener("focus", () => console.log("Name input focused!"));
    nameInput.addEventListener("blur", () => console.log("Name input blurred!"));

    // Event: Change
    nameInput.addEventListener("change", () => console.log("Name input value changed!"));
});
