function translateNumbers(numbersArray){
    const frenchNumbers = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'];
    let frenchWords = [];
    for(let i= 0; i<numbersArray.length;i++){
        let number = numbersArray[i];
        frenchWords.push(frenchNumbers[number-1]);
    }
    return frenchWords;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result=translateNumbers(numbers);
console.log(result);
