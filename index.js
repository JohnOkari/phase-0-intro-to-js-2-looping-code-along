function writeCards(arrayString, eventName) {
  let thanksCards = [];
  for (let i = 0; i < arrayString.length; i++) {
    thanksCards.push(
      `Thank you, ${arrayString[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return thanksCards;
}

function countDown(positiveNumber) {
  while (positiveNumber > 0) {
    console.log(positiveNumber);
    positiveNumber -= 1;
  }
  console.log(positiveNumber);
}
