let numeri = {};
numeri.idNumberForm  = document.getElementById('numberForm');
numeri.idNumber      = document.getElementById('number');
numeri.idWord        = document.getElementById('word');
numeri.idNext        = document.getElementById('next');
numeri.idWordCorrect = document.getElementById('wordCorrect');
numeri.number        = -1;
numeri.word          = '';
numeri.cifre = [
    ["zero"],
    ["uno"], 
    ["due"],
    ["tre"],
    ["quattro"],
    ["cinque"],
    ["sei"],
    ["sette"],
    ["otto"],
    ["nove"],
    ["dieci"],
    ["undici"],
    ["dodici"],
    ["tredici"],
    ["quattordici"],
    ["quindici"],
    ["sedici"],
    ["diciassette"],
    ["diciotto"],
    ["diciannove"],
    ["venti"],
    ["ventuno"],
    ["ventidue"],
    ["ventitré", "ventitre"],
    ["ventiquattro"],
    ["venticinque"],
    ["ventisei"],
    ["ventisette"],
    ["ventotto"],
    ["ventinove"],
    ["trenta"],
    ["trentuno"],
    ["trentadue"],
    ["trentatré", "trentatre"],
    ["trentaquattro"],
    ["trentacinque"],
    ["trentasei"],
    ["trentasette"],
    ["trentotto"],
    ["trentanove"],
    ["quaranta"],
    ["quarantuno"],
    ["quarantadue"],
    ["quarantatré", "quarantatre"],
    ["quarantaquattro"],
    ["quarantacinque"],
    ["quarantasei"],
    ["quarantasette"],
    ["quarantotto"],
    ["quarantanove"],
    ["cinquanta"],
    ["cinquantuno"],
    ["cinquantadue"],
    ["cinquantatré", "cinquantatre"],
    ["cinquantaquattro"],
    ["cinquantacinque"],
    ["cinquantasei"],
    ["cinquantasette"],
    ["cinquantotto"],
    ["cinquantanove"],
    ["sessanta"],
    ["sessantuno"],
    ["sessantadue"],
    ["sessantatré", "sessantatre"],
    ["sessantaquattro"],
    ["sessantacinque"],
    ["sessantasei"],
    ["sessantasette"],
    ["sessantotto"],
    ["sessantanove"],
    ["settanta"],
    ["settantuno"],
    ["settantadue"],
    ["settantatré"],
    ["settantaquattro"],
    ["settantacinque"],
    ["settantasei"],
    ["settantasette"],
    ["settantotto"],
    ["settantanove"],
    ["ottanta"],
    ["ottantuno"],
    ["ottantadue"],
    ["ottantatré", "ottantatre"],
    ["ottantaquattro"],
    ["ottantacinque"],
    ["ottantasei"],
    ["ottantasette"],
    ["ottantotto"],
    ["ottantanove"],
    ["novanta"],
    ["novantuno"],
    ["novantadue"],
    ["novantatré", "novantatre"],
    ["novantaquattro"],
    ["novantacinque"],
    ["novantasei"],
    ["novantasette"],
    ["novantotto"],
    ["novantanove"],
    ["cento"]
];

function chooseNumber(event) {
    if (event) { event.preventDefault(); }
    numeri.idWordCorrect.style.color = 'black';
    numeri.idWordCorrect.value = '';
    numeri.idWord.value = '';

    let idx = Math.floor((Math.random()*101));
    if (idx < 0)   idx = 0;
    if (idx > 100) idx = 100;
    numeri.number = idx;
    numeri.word   = numeri.cifre[idx][0];
    numeri.idNumber.value = idx;
    numeri.idWord.focus();
}

function checkNumber(event) {
    if (event) { event.preventDefault(); }

    w = numeri.idWord.value.trim();
    let found = false;
    for (let i = 0; i < numeri.cifre.length; i++) {
        if (w === numeri.cifre[numeri.number][i]) {
            found = true;
            break;
        }
    }
    if (found) {
        numeri.idWordCorrect.style.color = 'green';
        numeri.idWordCorrect.value = 'correto';
        numeri.idNext.focus();
    } else {
        numeri.idWordCorrect.style.color = 'red';
        numeri.idWordCorrect.value = numeri.word;
        numeri.idWord.focus();
    }

    return false;
}

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g,'');
    };
}

numeri.idWord.setAttribute('autocomplete', 'off');
numeri.idNumberForm.addEventListener('submit', checkNumber, false);
numeri.idNext.addEventListener('click', chooseNumber, false);

chooseNumber();
