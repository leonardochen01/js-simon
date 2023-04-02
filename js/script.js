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
  console.log(`I numeri generati casualmente sono: ${numberList}`);

  let container = document.querySelector(".numbers");
  let output = numberList.join(" - ");
  container.innerHTML = output;

  function numberDisappear() {
    container.classList.add("hide");
  }

  setTimeout(numberDisappear, 4000);

  setTimeout(verify, 5000);

  function verify() {
    const userNumberList = [];
    for (let i = 1; i <= 5; i++) {
      let userNumber = parseInt(prompt(`Inserisci il ${i}° numero che hai visto`));
      userNumberList.push(userNumber);
      console.log(`Hai inserito i numeri: ${userNumberList}`);
    }

    const userNumberString = userNumberList.toString();
    const randomNumberString = numberList.toString();

    if (userNumberString === randomNumberString) {
      console.log("Hai indovinato tutti i numeri!")
    } else {
      console.log("Non hai indovinato tutti i numeri!")
    }
  }

}





