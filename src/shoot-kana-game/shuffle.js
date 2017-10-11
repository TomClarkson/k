export default function shuffle(arr) {
  const array = [...arr];
  let m = array.length;

  // While there remain elements to shuffle
  while (m) {

    // Pick a remaining element
    let i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    let t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
