import stringWidth from "string-width";
import { gree ,greeee} from "./app.js";
import slugify from "slugify";
import axios from "axios";
// const title=slugify("selamin aleykum sdfsd sdfsd")
// console.log(title)
// console.log(stringWidth('a'))
// console.log(gree(greeee))



// setTimeout(()=>{
//     console.log("hello")
// },2000)


// setInterval(()=>{
//      console.log("hello")
//  },2000)
 
// ()=>{
//     console.log("hi")
// }
// const sayHi=(cb) =>{
//     cb()
// } 

// sayHi(
//     ()=>{
//         console.log("hi")
//     }
// )

// const url='https://jsonplaceholder.typicode.com/todos/2';

//  fetch(url)
//  .then(resbonse=>resbonse.json())
//  .then(data=>{console.log(data)
     
//     fetch("https://jsonplaceholder.typicode.com/todos/4")
//     .then(resbonse=>resbonse.json())
//     .then(data=>console.log(data))})
        

// async function getVe(url){
//     const resbonse=await (await fetch(url)).json
//     return resbonse
// }

// console.log("new")
// getVe("https://jsonplaceholder.typicode.com/todos/2")
// getVe("https://jsonplaceholder.typicode.com/todos/4")


// (async ()=>{
//     const { data:post2} =await axios("https://jsonplaceholder.typicode.com/todos/2")
//     const { data:post4} =await axios("https://jsonplaceholder.typicode.com/todos/4")
//     const { data:post6} =await axios("https://jsonplaceholder.typicode.com/todos/6")
//     const { data:post8} =await axios("https://jsonplaceholder.typicode.com/todos/8")

//     return console.log(post2,post4,post6,post8)
// })();
 



// const getco=()=>{
//     return new Promise((resolve,rej)=>{
       
//         setTimeout(()=>{resolve("okey")},2000)
//       })
      
// }

// getco()
// .then(data=>console.log(data))
// .catch(ror=>console.log(ror))


// const pro= new Promise((re,ror)=>{
//     re("okey")
    
// })


// (()=>{pro
//     .then(resbonse=>console.log(resbonse))
//     .catch(ror=>{console.log(ror)})}
// )();

// const getco=(num)=>{
//     return new Promise((rej,ror)=>{
        
//         if(num===200){
//             rej("okey")
//         }
//         else{
//             ror("ror")
//         }
        
//     })
// }

// getco(200).then(resbonse=>console.log(resbonse)).catch(ror=>console.log(ror))



















































































//  const  getUs=()=>{
//     return new Promise (async(rej,ror)=>{
//       const {data}=await axios("https://jsonplaceholder.typicode.com/todos/")
//       rej(data)
//     })
// }

// getUs().then(rebon=>console.log(rebon))
//        .catch(ror=>console.log(ror))






// const getUser=(userId)=>{
// return new Promise(async(rej,ror)=>{
//     const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+userId)
//     rej(user)
// })
// };



// (async()=>{
//    const user= await getUser(4)

// const users=await getUser(4)
// console.log(user,users)
// })();



// const dzi=["abcd","dhf","naberr","oppo"]



// const filterede =dzi.every(i=>i.length>200)
// console.log(filterede)
 



























const getC=(id)=>{
    return new Promise(async(resolve,rejec)=>{
        const  {data:user}=await axios("https://jsonplaceholder.typicode.com/todos/"+id)
        rejec(user)
    })
}

getC(2)
.then(resbonse=>console.log(resbonse))
.catch(ror=>console.log(ror))
