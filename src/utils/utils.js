export const shuffleArray = (array) => {
  // copy array to manipulate
  let arrayCopy = [...array];
  let mixedArray = [];
  // loop through copy until no elements left
  while (arrayCopy.length > 0) {
    let randNum = Math.floor(Math.random() * arrayCopy.length);
    // add removed elements to mixedArray as looping occurs
    mixedArray.push(arrayCopy.splice(randNum, 1)[0]);
  }
  return mixedArray;
};
