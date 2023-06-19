import {useContext, useState} from 'react'

import { Container } from './style'

import Task from './Task'
import NewTask from './newTask'



export default function TasksTodo() {
  const [newItem, setNewItem] = useState([]);

  const  handleAddNewTask = (newItems)=>{
    const itensCopy = Array.from(newItem);
    itensCopy.push({id: newItem.length, value: newItems});
    setNewItem(itensCopy);
  };

  const handleUpdataTask = ({target}, index)=>{
    const itensCopy = Array.from(newItem);
    itensCopy.splice(index, 1 , { id: index, value: target.value});
    setNewItem(itensCopy);
  };

  const deleteTask=(index)=>{
    const itensCopy = Array.from(newItem);
    itensCopy.splice(index,1);
    setNewItem(itensCopy);
  };



  return (
    <Container>   
      <>
      <div className="contInfo">
          <div className="contTarefasCriadas">
            <p>Tarefas criadas</p>
            <span>{newItem.length}</span>
          </div>
          <div className="contTarefasConcluidas" >
            <p>Concluídas</p>
            <span>
              <p>
                {
           
                 } 
                 </p>
              <p>de</p>
            </span>
          </div>
      </div>
      <NewTask  onSubmit={handleAddNewTask}  />
          { newItem.map(({id, value}, index)=> (
            <Task 
            key={id} 
            value={value} 
            onDelete={()=> deleteTask(index)} 
            onChange={(event)=> handleUpdataTask(event, index)}
            />
            ))
            }

      </>
    </Container>
  )
}
