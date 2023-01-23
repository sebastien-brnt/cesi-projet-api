function sum(number1, number2) {
  if (Number.isInteger(number1) && Number.isInteger(number2)) {
    return number1 + number2;
  }

  return "Erreur : Une des valeurs renseignées n'est pas un nombre";
}

module.exports = sum;
