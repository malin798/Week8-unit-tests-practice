let smallerThan = [];

export const filterNumbers = (array, largerThan) => {

  array.forEach(item => {

    if (item <= largerThan) {
      smallerThan.push(item) 
    }
  });

  return smallerThan;
}


