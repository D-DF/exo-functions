const reverseString = (str) => {
  return str.split("").reverse().join("");
}

const isPalindrome = (str) => {
  if(reverseString(str) === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("été"));