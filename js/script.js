/*
- Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.
- Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o traminte input).
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const playButton = document.querySelector("#play-btn");
playButton.addEventListener("click", randomNumberGenerator);

function randomNumberGenerator() {
  const numberList = [];

  while (numberList.length < 5) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!numberList.includes(randomNumber)) {
      numberList.push(randomNumber);
    }
  }
  console.log(numberList)
}





