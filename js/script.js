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