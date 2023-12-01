import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import './Form.css'
import { v4 as uuidv4 } from 'uuid';

const Form  = ({addTask}) =>{
    const [isOpen, setIsOpen] = useState(false) //Determina si podemos ver el form

    const openModal = () => {   
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleSubmitTask = (e) =>{        //Crea la tarea
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const newTask = {
            title,
            description,
            id: uuidv4(),
            createdAt: new Date().toLocaleString()
        }
        addTask(newTask)
        closeModal()
    }
    
    return (
        <div>
            <div className='btnNewTask'>
                <button onClick={openModal}><FaPlusCircle /></button>
            </div>     
            {isOpen && (
                <div className='modal-background' >
                    <div className='modal'>
                        <h2>Crea una nueva tarea</h2>
                        <form onSubmit={handleSubmitTask}>
                            <div className="input-container">
                                <label htmlFor="title">Ingrese un título:</label>
                                <input required type="text" id='title' name='title' placeholder='Titulo ejemplo' />
                            </div>
                            <div className="input-container">
                                <label htmlFor="description">Ingrese una descripción:</label>
                                <textarea required name="description" id="description" ></textarea>
                            </div>
                            <div className='controls-form'>
                                <button role='button' type='button' onClick={closeModal}>Cancelar</button>
                                <button type='submit'>Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Form