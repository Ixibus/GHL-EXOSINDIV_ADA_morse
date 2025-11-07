// DICTIONNAIRE
// Annexe 1
const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

// Etape 1 : Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

function getLatinCharacterList(string) {
  //   console.log("*** Etape 1 ***");
  //   console.log(string.split(""));
  return string.split("");
}

getLatinCharacterList("un test de ouf");

// Etape 2 : Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.

function translateLatinCharacter(letter) {
  //   console.log("\n*** Etape 2 ***");
  //   console.log(latinToMorse[letter]);
  return latinToMorse[letter];
}

translateLatinCharacter("A");

// Etape 3 : Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

function encode(string) {
  console.log("\n*** Etape 3 ***");
  let encodeArray = [];
  getLatinCharacterList(string).forEach((el) => {
    encodeArray.push(translateLatinCharacter(el));
  });
  return encodeArray.join("");
}
// console.log(encode("BONJOURJEMAPPELLEFRANCK"));

// Etape 4 : appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

function getMorseCharacterList(string) {
  return string.split("/");
}
// getMorseCharacterList("..- -./- . ... -/-.. ./ --- ..- ..-.");

function translateMorseCharacter(char) {
  return morseToLatin[char];
}
// console.log(translateMorseCharacter("---"));

function decode(morseStr) {
  let decodeArray = [];
  // getMorseCharacterList(morseStr).forEach(el => {
  //   decodeArray.push(translateMorseCharacter(el));
  // });
  // return decodeArray;
  getMorseCharacterList(morseStr).forEach((morseWord) => {
    morseWord.split("/").forEach((morseLetter) => {
      // morseLetter === " " ? decodeArray.push("") : decodeArray.push(translateMorseCharacter(morseLetter));
      decodeArray.push((morseLetter.split(" ").map(el => (translateMorseCharacter(el))).join(""))) ;
    });
  });
  return(decodeArray.join(" "));
}

console.log(decode("..- -./- . ... -/-.. ./--- ..- ..-."));
