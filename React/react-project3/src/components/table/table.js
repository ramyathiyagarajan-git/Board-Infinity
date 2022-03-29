import React from 'react'
import Userform from '../userform/userform'
import { useState } from "react";
import './table.css';


function Table ()  {


var [result, setResult] = useState(); 

var [table, setTable] = useState([]); 


const handleChildChange = (data) => {

    const product = parseInt(data.data1)*parseInt(data.data2)*parseInt(data.data3);
    setResult(product); 

    data['Product'] = product;

    console.log(data);

    const tempTable = JSON.parse(JSON.stringify(table));
    tempTable.push(data);
    setTable(tempTable);

    console.log(table);

}

return (
    <div>

     <Userform callParent={handleChildChange}></Userform>
     
    <h1>User Data</h1>
    <table >
        <thead>
                <tr>
                    <th>Data1</th>
                    <th>Data2</th>
                    <th>Data3</th>
                    <th>Product</th>
                    
                    
               </tr>
        </thead>
        <tbody>

            {table.map(data =>(<tr>
                     <td>{data.data1}</td>
                     <td>{data.data2}</td>
                     <td>{data.data3}</td>
                     <td>{data.Product}</td>
                                        
                </tr>))}
                
         </tbody>
    </table>

    <p> Product of the numbers entered  = {result} </p>
    
    </div>

  );

}

export default Table;