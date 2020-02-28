export const hackerSpeak = (words) => {

   let mapObj = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5"
  };

  const replacedLetters = words.replace(/a|e|i|o|s/gi, function(matched) {
    return mapObj[matched.toLowerCase()]
  });

  return replacedLetters
}



