// script.js
function changeText() {
    document.getElementById('textDisplay').textContent = "You clicked the button! 🎉";
}

function calculateProduct() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultDisplay').textContent = "Please enter valid numbers.";
        return;
    }
    
    const result = num1 * num2;
    document.getElementById('resultDisplay').textContent = `The product is: ${result}`;
}

