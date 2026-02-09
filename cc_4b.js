const products = [
  { sku: "1111", name: "Tea", category: "groceries", price: 10.00, inventory: 60 },
  { sku: "2222", name: "Coffee", category: "groceries", price: 15.00, inventory: 100 },
  { sku: "3333", name: "Organic Coffee", category: "groceries", price: 18.00, inventory: 50 },
  { sku: "4444", name: "Laundry Detergent", category: "household", price: 20.00, inventory: 30 },
  { sku: "5555", name: "Notebook", category: "office", price: 5.00, inventory: 150 }
];
const discountedProducts = products.map(product=> {
let discountRate = 0;
switch (product.category) {
    case "groceries":
        discountRate = .10;
        break;
    case "household":
        discountRate = .15;
        break;
    case "office":
        discountRate = .5
        break;
}
})
return {
    ...product,
    promoPrice: Number((product.price * (1 - discountRate)))
};

console.log(discountedProducts);