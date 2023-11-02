// function calcTotalAmount(billingAmount, tippingPercentage){
//     let tipping = tippingPercentage/100 + 1
//     let totalAmount = billingAmount*tipping
//     let tippingAmout = totalAmount - billingAmount
//     return totalAmount
// }

function calcTotalAmount(billingAmount, tippingPercentage){
    let decimal = tippingPercentage/100
    let tippingAmout = decimal*billingAmount
    let totalAmount = tippingAmout + billingAmount
    return totalAmount
}
let tippingPercentage = 10
let billingAmount = 55
let print = calcTotalAmount(billingAmount, tippingPercentage)
console.log(print)