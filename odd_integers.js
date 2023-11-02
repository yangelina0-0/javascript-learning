function countOddNumbers(start, end){
    let count = 0 
    
    for(let i = start; i<= end; i++){
        if (i%2 !== 0){
            count++
        }
    } 
    return count
}
let start = 1
let end = 100
let result = countOddNumbers(start, end)
console.log(`there are ${result} odd numbers between ${start} and ${end}`)