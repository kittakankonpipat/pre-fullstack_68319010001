// ฟังก์ชั่น

// แบบปกติ ฟังก์ชั่นที่มีการรับค่า 
function calculateTotal(price, quatity ) {
    return price * quatity;
}

console.log(`ราคารวม ${calculateTotal(25, 4 )}`);

// แบบ arrow function 
const calculateTotalArrow = (price, quatity) => price * quatity;
console.log(`ราคาราม ${calculateTotal (20, 3)}`)


// แบบ arrow function + default parameter
const calculateWithVat = (price, quatity, vat = 0.07) => {
    const subtotal = price * quatity;
    return (subtotal + subtotal * vat) . toFixed(2);
}

console.log(`รวมค่า Vat ${calculateWithVat(100, 2)}`)