const klinkers = ["a", "e", "i", "o", "u"];
const medeklinkers = ["b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z"];

const woordenlijst = fetch("woordenlijst.txt")
  .then((response) => response.text())
  .then((text) => text.trim().split("\n"));

const NIVEAU = 3;

function mask(woord) {
  const to_mask = [];
  while (to_mask.length < NIVEAU) {
    const pos = Math.floor(Math.random() * woord.length);
    if (!to_mask.includes(woord[pos])) {
      to_mask.push(woord[pos]);
    }
  }
  for (let i = 0; i < to_mask.length; i++) {
    woord = woord.replace(to_mask[i], i.toString());
  }
  return [woord, to_mask];
}

let woord = "";
while (woord.length <= NIVEAU + 3) {
  woord = woordenlijst[Math.floor(Math.random() * woordenlijst.length)];
}
console.log(woord);
console.log(mask(woord)[0]);