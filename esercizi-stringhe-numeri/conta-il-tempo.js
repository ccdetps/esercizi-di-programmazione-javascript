/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/
var sec = 94089999890;
var min = Math.floor (sec/60);
var ore = Math.floor (min/60);
var giorni = Math.floor (ore/24);
var oreleft = ore-giorni*24;
var minleft = min-oreleft*60-giorni*24*60;
var secleft = sec-minleft*60-oreleft*60*60-giorni*24*60*60;
console.log(`Sono passati ${giorni} giorni, ${oreleft} ore, ${minleft} minuti e ${secleft} secondi.`);
