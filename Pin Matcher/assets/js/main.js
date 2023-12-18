// User Pin Generate 

const generateButton = document.getElementById('generate-btn');

generateButton.addEventListener('click', function(){
    const generatedPin = Math.floor(1000 + Math.random() * 9000);
    const generatePinTextBox = document.getElementById('generateTextbox');
    generatePinTextBox.value = generatedPin;
})


