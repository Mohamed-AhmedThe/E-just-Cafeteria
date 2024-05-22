const menuItems = document.querySelectorAll('.menu-item');

const selectedItems = [];

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        const itemName = item.dataset.name;
        const itemPrice = parseFloat(item.dataset.price);

        selectedItems.push({ name: itemName, price: itemPrice });

        updateCheckoutDisplay();
    });
});

function updateCheckoutDisplay() {
    console.log('Selected items:');
    selectedItems.forEach((item) => {
        console.log(`${item.name} - $${item.price.toFixed(2)}`);
    });
}
