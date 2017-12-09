/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/


var giorno = 3;
switch (giorno) {
  case 1:
    console.log('lunedì');
    break;
  case 2:
    console.log('martedì');
    break;
  case 3:
    console.log('mercoledì');
    break;
  case 4:
    console.log('giovedì');
    break;
  case 5:
    console.log('venerdì');
    break;
  case 6:
    console.log('sabato');
    break;
  case 7:
    console.log('domenica');
    break;
  default:
    console.log('errore');
}
