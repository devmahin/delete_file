const number = [1,2,3,4,5,6,7,8,9]



const student = [{name : "mahin", number : 70, subject : "math"},
                {name : "karim", number : 85, subject : "Math"},
                {name : "ram", number : 33, subject : "English"},
                {name : "shyam", number : 80, subject : "Bangla"},
                {name : "jodu", number : 75, subject : "Bangla"},
                {name : "mahin", number : 20, subject : "Bangla"},
];



///find
const greterThan = number.find(function(num){
    return num > 3
})

console.log(greterThan)

const getStudent = student.find((exam)=> {
    return exam.number < 33
})
console.log(getStudent)


///filter
const filterNum = number.filter((num)=> {
    return num > 5

})
console.log(filterNum)



const filterStudent = student.filter((stu)=> {
    return stu.number < 50 && stu.subject === "Bangla"

})
console.log(filterStudent)




///filter dublicate

const DublicateNumber =[1,2,3,4,5,6,7,8,9,1,2,3,4,5]
let dublicater = DublicateNumber.filter((value,index,arr) => {
    return arr.indexOf(value) === index
})

console.log(dublicater)