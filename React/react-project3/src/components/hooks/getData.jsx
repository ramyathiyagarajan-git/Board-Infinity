import {useState} from "react";
const GetData = () => {

    const[data1 , setData1] = useState();

    fetch('https://reqres.in/api/users?page=2.')
    .then(resp => resp.json())
    .then(dt => {setData1(dt.data)})

    
    
    return data1;
}

export default GetData;
