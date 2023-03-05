import axios from "axios";

export async function getUsers(id){
    const {data:users}=await axios("https://jsonplaceholder.typicode.com/users/"+id)
    const {data:shared}=await axios("https://jsonplaceholder.typicode.com/posts/"+users.id)
    return  console.log(users,shared) 

}