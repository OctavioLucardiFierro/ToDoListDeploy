import React from 'react'
import { useState } from 'react'
import './nota.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const Nota  = ({task, deleteTask}) =>{
    const {title, description, createdAt, id} = task

    const [terminado, SetTerminado]= useState(false)

    const handleTerminado = () =>{
        SetTerminado(!terminado)
    }


    return (
        <div className='nota'>
            <div className='todoIzq'>
                {
                    terminado
                    ? <div className='containerBotones'><h2><IoMdCheckmarkCircleOutline color='#8BEA6A'/>  <strike>{title}</strike></h2>
                        <button className='deleteButton' onClick={() => deleteTask(task.id)}> <MdDeleteForever /></button>
                    </div>

                    : <div className='containerBotones'>
                        <h2>{title}</h2> 
                        <button className='deleteButton' onClick={() => deleteTask(task.id)}> <MdDeleteForever /></button>
                    </div>
                }
                

                {
                    terminado
                    ? <p><strike>{description}</strike></p>
                    : <p>{description}</p>
                }
                
                <div className='TaskButton'>
                    <div className='dateTask'>
                    <span>{createdAt}</span>
                    </div>
                    <div className='btn'>
                    {
                        terminado
                        ?<button  onClick={handleTerminado}>No lo termine</button>
                        : <button  onClick={handleTerminado}>Tarea hecha</button>
                    }
                    </div>
                   
                     
                </div>
                    
            </div>
        </div>
    )
}

export default Nota