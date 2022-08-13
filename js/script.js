var valorEfeitoSeguro = "";
var adValoremCTe = "";
var pctgICMS = "";

var adValoremTramontina = 0;
var adValoremVBR = 0;

function capturar() {
    
    valorEfeitoSeguro = document.getElementById('valorEfeitoSeguro').value;
    adValoremCTe = document.getElementById('adValoremCTe').value;
    pctgICMS = document.getElementById('pctgICMS').value;

    adValoremTramontina = parseFloat((valorEfeitoSeguro * 0.035) / 100);
    adValoremVBR = parseFloat(adValoremCTe - (adValoremCTe * pctgICMS) / 100);

    document.getElementById('adValoremTramontina').innerHTML = adValoremTramontina;
    document.getElementById('adValoremVBR').innerHTML = adValoremVBR;

}

var placaAntiga = "";
var placaNova = "";
var placaAntiga2 = "";
var placaNova2 = "";

function toMercosul () {

    placaAntiga = document.getElementById('placaAntiga').value.toUpperCase();

    if (placaAntiga.charAt(4) === '0') {
        placaNova = placaAntiga.replace('0', 'A');
    } else if (placaAntiga.charAt(4) === '1') {
        placaNova = placaAntiga.replace('1', 'B');
    } else if (placaAntiga.charAt(4) === '2') {
        placaNova = placaAntiga.replace('2', 'C');
    } else if (placaAntiga.charAt(4) === '3') {
        placaNova = placaAntiga.replace('3', 'D');
    } else if (placaAntiga.charAt(4) === '4') {
        placaNova = placaAntiga.replace('4', 'E');
    } else if (placaAntiga.charAt(4) === '5') {
        placaNova = placaAntiga.replace('5', 'F');
    } else if (placaAntiga.charAt(4) === '6') {
        placaNova = placaAntiga.replace('6', 'G');
    } else if (placaAntiga.charAt(4) === '7') {
        placaNova = placaAntiga.replace('7', 'H');
    } else if (placaAntiga.charAt(4) === '8') {
        placaNova = placaAntiga.replace('8', 'I');
    } else if (placaAntiga.charAt(4) === '9') {
        placaNova = placaAntiga.replace('9', 'J');
    }

    document.getElementById('placaNova').innerHTML = placaNova;    

}

function fromMercosul () {

    placaAntiga2 = document.getElementById('placaAntiga2').value.toUpperCase();

    if (placaAntiga2.charAt(4) === 'A') {
        placaNova2 = placaAntiga2.replace('A', '0');
    } else if (placaAntiga2.charAt(4) === 'B') {
        placaNova2 = placaAntiga2.replace('B', '1');
    } else if (placaAntiga2.charAt(4) === 'C') {
        placaNova2 = placaAntiga2.replace('C', '2');
    } else if (placaAntiga2.charAt(4) === 'D') {
        placaNova2 = placaAntiga2.replace('D', '3');
    } else if (placaAntiga2.charAt(4) === 'E') {
        placaNova2 = placaAntiga2.replace('E', '4');
    } else if (placaAntiga2.charAt(4) === 'F') {
        placaNova2 = placaAntiga2.replace('F', '5');
    } else if (placaAntiga2.charAt(4) === 'G') {
        placaNova2 = placaAntiga2.replace('G', '6');
    } else if (placaAntiga2.charAt(4) === 'H') {
        placaNova2 = placaAntiga2.replace('H', '7');
    } else if (placaAntiga2.charAt(4) === 'I') {
        placaNova2 = placaAntiga2.replace('I', '8');
    } else if (placaAntiga2.charAt(4) === 'J') {
        placaNova2 = placaAntiga2.replace('J', '9');
    }

    document.getElementById('placaNova2').innerHTML = placaNova2;    

}