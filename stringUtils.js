const reverseString = (str) => {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

const isPalindrome = (str) => {
  if(reverseString(str) === "palindrome") {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("emordnilap"))