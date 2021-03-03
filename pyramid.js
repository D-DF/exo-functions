const pyramid = (nbElement, renverse, str) => {
  if(!renverse) {
    for(let i = 0; i <= nbElement; i++) {
      console.log(str.repeat(i));
    } 
  } else {
    for(let i = nbElement; i >= 1; i--) {
      console.log(str.repeat(i))
    }
  }
}

(pyramid(10, false, "D"))