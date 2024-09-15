
// let arr = ["apple", "banana", "cherry"]


// let brr = arr

// brr[0] = "papaya"


// let crr = brr 


// crr[1] = "kiwi"


// console.log("arr: ",arr)


// let arr = ["apple", "banana", "cherry"]

// let brr = arr  // shallow copy

// let brr = []

// for(let i = 0; i <= arr.length-1; i++){
//     // console.log(typeof arr[i])
//     brr[i] = arr[i]
// }
// let brr = [...arr]  // deep copy => 100% true nahi hae

// arr[0] = "papaya"

// console.log("arr: ",arr)

// console.log("brr: ",brr)





// Nested Array: 


let arr = ["apple", "banana", "cherry", ["mango", "orange", "grapes"], "kiwi"]

console.log(arr)


// for(let i = 0; i <= arr.length-1; i++){
//     console.log(i, arr[i])
// }

// let k = arr[3] // ["mango", "orange", "grapes"]

// console.log(k[1]) // orange

console.log(arr[3][1])