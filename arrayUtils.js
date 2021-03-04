const biggest = (tab) => {
  return Math.max.apply(null, tab)
}

console.log(biggest([1, 2, 3, 4]));

const sortAscend = (liste) => {
  return liste.sort((a, b) => a - b);
}

console.log(sortAscend([2, 4, 1, 7]))

const makeUnique = (tableau) => {
  return Array.from(new Set (tableau));
}

console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))