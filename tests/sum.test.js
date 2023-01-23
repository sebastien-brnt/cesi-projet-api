const sum = require("../helpers/sum");

test("adds 1 + 2 to equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds string + number to equals error", () => {
  expect(sum("1", 2)).toBe(
    "Erreur : Une des valeurs renseignées n'est pas un nombre"
  );
});
