const add = (a, b) => {
  return a + b;
}

const sub = (a, b) => {
  return a - b;
}

const mul = (a, b) => {
  return a * b;
}

const div = (a, b) => {
  return a / b;
}

const cal = (choix, nb, nb2) => {
  switch(choix) {
    case "+":
      console.log(add(nb, nb2));
      break;
    case "-":
      console.log(sub(nb, nb2));
      break;
    case "*": 
    console.log(mul(nb, nb2));
      break;
    case "/": 
    console.log(div(nb, nb2));
      break;

    default:
      console.log("Vous n'avez pas choisi d'opérateur")
  }
}

cal("+", 2, 2)