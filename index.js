let score = 0;
let species;

let selectionInput1 = prompt(`What is the capitol of NY State?
[1] Buffalo
[2] Albany
[3] Cleveland
`);

selectionInput1 = Number(selectionInput1);
if (Number.isNaN(selectionInput1)) {
  alert("Stop fooling around and take this seriously!");
} else if (selectionInput1 < 1 || selectionInput1 > 3) {
  alert("Your number must be 1, 2, or 3!!!");
} else if (selectionInput1 == 2) {
  score += 1;
}

let selectionInput2 = prompt(`Which of these is the 3rd planet from the sun?
[1] Pluto
[2] Venus
[3] Earth
`);

selectionInput2 = Number(selectionInput2);
if (Number.isNaN(selectionInput2)) {
  alert("Stop fooling around and take this seriously!");
} else if (selectionInput2 < 1 || selectionInput2 > 3) {
  alert("Your number must be 1, 2, or 3!!!");
} else if (selectionInput2 == 3) {
  score += 1;
}

let selectionInput3 = prompt(`Which organ pumps blood around the human body?
[1] heart
[2] liver
[3] brain
`);

selectionInput3 = Number(selectionInput3);
if (Number.isNaN(selectionInput3)) {
  alert("Stop fooling around and take this seriously!");
} else if (selectionInput3 < 1 || selectionInput3 > 3) {
  alert("Your number must be 1, 2, or 3!!!");
}
if (selectionInput3 == 1) {
  score += 1;
}

if (score < 3) {
  species = "an alien";
}

if (score == 3) {
  species = "a human";
}

alert(
  `You scored ${score} out of a potential 3 points. You qualify as ${species}!`,
);
