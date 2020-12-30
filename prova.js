const isPalindrome = (num) => {

    let number = num.toString();
    let reverse = number.split("").reverse().join("");

    if(number === reverse) return true

    return false;

}

console.log(isPalindrome(100001));