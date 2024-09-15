// let arr = ["apple", "banana", "cherry", ["mango", "orange", "grapes"], "kiwi"]  
// let brr = []

// // ["apple", "banana","cherry", ["mango", "orange", "grapes"], kiwi]

// for(let i = 0; i<=arr.length-1; i++){
// //    console.log(arr[i],typeof arr[i])
//     // brr[i] = arr[i]
   
//      if(typeof(arr[i]) == "object"){
//                // arr[i] = 
//             //    let k = arr[i] //["mango", "orange", "grapes"]
//             //     let crr = []
//             //    for(let j = 0; j<=k.length-1; j++){
//             //       crr[j] = k[j]
//             //    }

//             //     brr[i] = crr // ["mango", "orange", "grapes"]

//             brr[i] = [...arr[i]]
                    
//      }


//      else if(typeof(arr[i]) != "object"){
//            brr[i] = arr[i]
//      }

// }

// // arr[0] = "papaya"

// arr[3][1] = "papaya"

// console.log("arr: ",arr)
// console.log("brr: ",brr)



// make a  looking nested of nested of nested aarays as exmaple


// let arr = [ "apple", "banana", "cherry", ["mango", ["orange"], "grapes", ["pineapple", ["papaya"], "kiwi", ["strawberry", "blueberry", "blackberry"]], "kiwi"] ]


// structuredClone 

let arr = [10,20,[30,40,50,[60,70,80,[90,100,110]]]]

let brr = structuredClone(arr)  // deep copy => 100% true  // 17


console.log("arr: ",arr)

console.log("brr: ",brr)