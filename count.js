const count = (nbMin, nbMax, step) => {
  for(let i = nbMin; i <= nbMax; i += step) {
    console.log(i)
  }
}

count(1, 10, 7);