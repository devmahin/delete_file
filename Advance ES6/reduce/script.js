// const number = [1,2,3]

// function MyFunction(total,value,index,array){
//     console.log(total)
//     return total + (value * value)
// }

// const newNumber = number.reduce(MyFunction)
// console.log(newNumber)


///reduceRight
const num = [10,20,30]
let num2 = num.reduceRight(mYfun)
console.log(num2)
function mYfun(total,value,index,array){
    return total + value
}
