// Write a function that takes in a string and returns it when reversed
// let food = “eating”
function reverseString(str) {
    
    const characters = str.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');
  
    return reversedString;
  }
  
  
  let food = "eating";
  const reversedFood = reverseString(food);
  console.log(reversedFood); 

  
// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function binary(num,target){
    let left=0;
    let right = num.length -1;
    while(left <=right){
        let middle = Math.floor([left + right]/2);
        if (num[middle] === target){
            return middle;
        }
        else if (num[middle] < target){
            left = middle+1;
        }
        else{
            right = middle -1;
        }
    }
    return null
}
let num = [2,8,0,23,5,45,76];
let target = 23;
console.log(binary(num, target))

// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function multiplyBy4(arr) {
    const multipliedArr = [];
    for (let i = 0; i < arr.length; i++) {
      multipliedArr.push(arr[i] * 4);
    }

    return multipliedArr;
  }
  

  let numArray = [12, 87, 45, 75, 23, 64, 73];
  const multipliedArray = multiplyBy4(numArray);
  console.log(multipliedArray); 
  



// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
let nums = ["10","24","45","56","67"];
nums.forEach(nums);
console.log();


