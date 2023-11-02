let sum = 0
function sumOfEvenNumbers(start, end){
    for(let i = start; i<= end; i++){
        if(i%2 == 0){
            sum = sum + i
        }
        
    }
    console.log(sum)
}
// = means assigning
// == means comparing values
let start = 1
let end = 7
sumOfEvenNumbers(start, end)

