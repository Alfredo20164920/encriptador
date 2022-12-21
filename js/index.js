const text = document.getElementById('text');

//buttons
const encryptBtn = document.getElementById('encrypt');
const decryptBtn = document.getElementById('decrypt');
const copyBtn = document.getElementById('copy');

// Show the result
const result = document.getElementById('result');

// Other variables
const aside = document.getElementsByClassName('aside_previus');

// Event listeners
encryptBtn.addEventListener('click', () => {
    
    let textValue = normalizeText(text.value);

    aside[0].style.display = 'none';
    result.style.display = 'block';

    result.innerText = encrypt(textValue);

    encrypt(textValue);
    

});

copyBtn.addEventListener('click', copy);

// Specials functions
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalizeText(str) {
    /**
     * Remove accents
     * Convert to lowercase
     * Remove special characters
     * Remove numbers
     */
    return removeAccents(str.toLowerCase()).replace(/[^a-zA-Z0-9 ]/g, '').replace(/[0-9]/g, '');;
}

// Main functins
function encrypt(str) {
    return str
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function copy() {
    const copyText = document.getElementById("result").textContent;
    navigator.clipboard.writeText(copyText);
}