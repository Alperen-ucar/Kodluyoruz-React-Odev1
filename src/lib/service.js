import axios from "axios";
import { async } from "regenerator-runtime";



async function getData(user_id){
    const {data : data1} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);

    console.log(data1);
}

export default getData;