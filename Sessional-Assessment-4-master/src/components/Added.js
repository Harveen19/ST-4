import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Cricketers from './Cricketers';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>Vechile Details</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>Vehicle NO</th>
            <th>Car Name</th>
            <th>Model</th>
          </tr>

        </thead>
        <tbody>
          {
            Cricketers.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}

