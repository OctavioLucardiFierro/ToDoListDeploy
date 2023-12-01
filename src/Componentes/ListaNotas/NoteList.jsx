import React from 'react'
import Nota from '../Notas/Nota'
import { FaRegSadCry } from "react-icons/fa";



const NotaList  = ({tasks, deleteTask, searchString, currentTasks}) =>{
    return (
        <div className='containerFilter'>
            {tasks.length == 0 && <h2>No tenés tareas aún</h2>}
            
            {tasks.length != 0 && searchString != '' && currentTasks.length == 0 && <h2>No se encontraron tareas <FaRegSadCry /></h2> }

            {currentTasks.map(task =>(
          <Nota task={task} key={task.id} deleteTask={deleteTask}/>
        ) ) }
        </div>
    )
}

export default NotaList