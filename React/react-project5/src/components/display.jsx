import React from 'react'
import './display.css';
import { useState,useEffect } from "react";

const Display = () => {

    const [users, setUsers] = useState([]);
    const [specific, setSpecific] = useState("i print");

    useEffect(() => {
        
        fetch('http://localhost:3001/users')
        .then(res => 
           res.json()
        )
        .then(dt => {
            setUsers((dt.data)) 
        })
        
    }, [])

   const renderData = (data) => {

        
        fetch(`http://localhost:3001/users/${data}`)
        .then(res => 
            res.json()
         )
        .then(dt => setSpecific(dt))
    }


  return (
    <>
    <table>
            <thead>
                <tr>
                    <th>
                        Email
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Id
                    </th>
                    <th>
                        get data
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.id}</td>
                    <td><button onClick={ () => renderData(user.id) }>SHOW DATA</button></td>
                </tr>)}
            </tbody>
        </table>

        <div>
            {specific}
        </div>
    </>
  )
}

export default Display