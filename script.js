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
  return latinToMorse[letter] ?? letter;
}

translateLatinCharacter("A");

// Etape 3 : Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

function encode(string) {
  // console.log("\n*** Etape 3 ***");
  let encodeArray = [];
  getLatinCharacterList(string).forEach((el) => {
    encodeArray.push(translateLatinCharacter(el));
  });
  return encodeArray.join("");
}
encode("BONJOUR JE MAPPELLE FRANCK");

// Etape 4 : appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

function getMorseCharacterList(string) {
  // console.log("\n*** Etape 4 ***");

  return string.split("/");
}
// getMorseCharacterList("..- -./- . ... -/-.. ./ --- ..- ..-.");

function translateMorseCharacter(char) {
  return morseToLatin[char];
}
// console.log(translateMorseCharacter("---"));

function decode(morseStr) {
  console.log("\n*** Etape 4 ***");

  let decodeArray = [];
  getMorseCharacterList(morseStr).forEach((morseWord) => {
    morseWord.split("/").forEach((morseLetter) => {
      decodeArray.push(
        morseLetter
          .split(" ")
          .map((el) => translateMorseCharacter(el))
          .join("")
      );
    });
  });
  return decodeArray.join(" ");
}

console.log(decode("..- -./- . ... -/-.. ./--- ..- ..-."));

// Etape 5 : Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.

function encodeV2(string) {
  console.log("\n*** Etape 5 ***");
  let encodeArray = [];
  getLatinCharacterList(string.toUpperCase()).forEach((latinWord) => {
    latinWord.split(" ").forEach((latinLatter) => {
      encodeArray.push(
        latinLatter
          .split("")
          .map((el) => translateLatinCharacter(el))
          .join("")
      );
    });
  });
  return encodeArray.join(" ");
}

console.log(encodeV2("SOS"));

// ----- HTML INTERFACE -----

const latinInput = document.getElementById("latinTextEntry");
const morseOutput = document.querySelector(".outputTextLTM");

const morseInput = document.getElementById("morseTextEntry");
const latinOutput = document.querySelector(".outputTextMTL");

latinInput.addEventListener(
  "input",
  (e) => (morseOutput.textContent = encodeV2(e.target.value))
);
morseInput.addEventListener(
  "input",
  (e) => (latinOutput.textContent = decode(e.target.value))
);

// togle system

const body = document.querySelector("body");
const lTMTab = document.getElementById("LTM_li");
const lTMDisplay = document.getElementById("latinToMorse");
const mTLTab = document.getElementById("MTL_li");
const mTLDisplay = document.getElementById("morseToLatin");

const barUlSelector = document.getElementById("barSelector");

lTMTab.addEventListener("click", () => {
  lTMDisplay.style.display = "flex";
  mTLDisplay.style.display = "none";
  barUlSelector.style.display = "block";
  barUlSelector.style.left = "calc(50% - 220px)";
  body.style.backgroundColor = "var(--bg-latin-to-morse)";
});

barUlSelector.addEventListener("click", () => console.log("yes"));

mTLTab.addEventListener("click", () => {
  mTLDisplay.style.display = "flex";
  lTMDisplay.style.display = "none";
  barUlSelector.style.display = "block";
  barUlSelector.style.left = "calc(50% + 10px)";
  body.style.backgroundColor = "var(--bg-morse-to-latin)";
});
