const number = [10,20,30,40]
const name = ["Tamim", "Sakib", "Rakib", "Adib"]
const obj =[
    {name : "Mahin howlader", availableBook:30},
    {name : "hasan ", availableBook:10},
    {name : "Adib", availableBook:5},
    {name : "Babul howlader", availableBook:4},
    {name : "Sakib ", availableBook:1}
]

///
const newNumber = number.map ((num) => {
    return num * 2
})
console.log(newNumber)


////
const newName = name.map(name => {
   return name.toUpperCase();

})
console.log(newName)



////
const newObj = obj.map((item) => {
    return item.name
})

console.log(newObj)


