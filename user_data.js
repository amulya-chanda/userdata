import './App.css';
import {useState} from 'react';
//import  data  from './Mock-Data';
 export function User_data(props){
    const [search,setsearch]=useState("")
    const handlesearch=(event)=>{
        setsearch(event.target.value)
    }
    
    let searchdata = props.data.filter(
        (data) =>(
          data.first_name.toLowerCase().includes(search.toLowerCase()) ||
          data.last_name.toLowerCase().includes(search.toLowerCase()) ||
          data.email.toLowerCase().includes(search.toLowerCase())
      ));
     console.log(props)    
     return(
        <div className="userdetails">
            <h1>USER LIST</h1>
            <h2>user list table</h2>
            <label >search bar: </label>
            <input placeholder="search for user" onChange={handlesearch} ></input>
            
            <table>
                <tr>
                    <th>id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>email</th>
                    <th>gender</th>
                    <th>ip_address</th>
                    <th>image</th>
                </tr>

            {searchdata.map((item) => (
            <tr key={item.id}>
            
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.ip_address}</td>
                <td><img src={item.image}></img></td>
            </tr>
            
             ))}
             </table>
        </div>
    )
}