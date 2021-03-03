const isOdd = (nombre) => {
  if(nombre % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

// console.log(isOdd(3));

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isEven(5))