import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { Nota, Form, NotaList } from "./Componentes";
import { useLocalStorage } from './useLocalStorage'


function App() {

  const [tasks, setTasks] = useLocalStorage('tasks',[]); //Array con las tareas
  const [currentTasks, setCurrentTask] = useState([]); //Array con las tareas buscadas
  const [searchString, setSearchString] = useState(""); //String para buscar
  const addTask = (task) => {
    //Funcion para añiadir las tareas al array tasks
    setTasks([...tasks, task]);
  };
  const deleteTask = (taskId) => {
    //Funcion para eliminar las tareas al array tasks
    setTasks(tasks.filter((task) => task.id != taskId));
  };

  const handleFilterChange = (e) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    setCurrentTask(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString, tasks]);

  return (
    <>
      <div className="mainContainer">
        <h1>TO DO LIST</h1>
        <input className="buscarTarea" type="text" placeholder="Buscar una tarea" onChange={handleFilterChange} value={searchString}/>

        <Form addTask={addTask} />
        <div className="noteContainer">
          <NotaList currentTasks={currentTasks} tasks={tasks} searchString={searchString} deleteTask={deleteTask}/>
        </div>
      </div>
    </>
  );
}

export default App;
