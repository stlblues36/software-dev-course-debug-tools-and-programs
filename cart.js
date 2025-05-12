const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // <= to <
      total += cartItems[i].price; // undefined index
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate < 0 || discountRate > 1) { // discountRate
      throw new Error("Invalid discount rate. It must be between 0 and 1.");
  }
  return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  if (isNaN(total)) { // is a number
      throw new Error("Invalid total value. Cannot generate receipt.");
  }
  for (const item of cartItems) {
      receipt += `${item.name}: $${item.price}\n`;
  }
  receipt += `Total: $${total.toFixed(2)}`; // may not be a number
  return receipt;
}

// entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

//Test the corrected program with the given cart and a few edge cases: 
// 1. Empty cart
const emptyCart = [];
const emptyTotal = calculateTotal(emptyCart);
const emptyDiscountedTotal = applyDiscount(emptyTotal, 0.2);
const emptyReceipt = generateReceipt(emptyCart, emptyDiscountedTotal);
document.getElementById("emptyTotal").textContent = `Total: $${emptyDiscountedTotal}`;
document.getElementById("emptyReceipt").textContent = emptyReceipt;
// 2. Cart with one item
const singleItemCart = [{ name: "Tablet", price: 300 }];
const singleItemTotal = calculateTotal(singleItemCart);
const singleItemDiscountedTotal = applyDiscount(singleItemTotal, 0.2);
const singleItemReceipt = generateReceipt(singleItemCart, singleItemDiscountedTotal);
document.getElementById("singleItemTotal").textContent = `Total: $${singleItemDiscountedTotal}`;
document.getElementById("singleItemReceipt").textContent = singleItemReceipt;
// A discountRate of 0 or 1
const zeroDiscountRate = applyDiscount(singleItemTotal, 0);
const oneDiscountRate = applyDiscount(singleItemTotal, 1);
document.getElementById("zeroDiscountRate").textContent = `Total with 0% discount: $${zeroDiscountRate}`;
document.getElementById("oneDiscountRate").textContent = `Total with 100% discount: $${oneDiscountRate}`;
document.getElementById("receipt").textContent = singleItemReceipt;
