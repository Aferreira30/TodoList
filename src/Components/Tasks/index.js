import { useState} from 'react';

import { Container } from './style';

import Task from './Task';
import NewTask from './newTask';
import { GlobalStorage } from '../context';
import Infos from './info';


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
      <GlobalStorage >
        <Infos toggles={newItem}  />
      </GlobalStorage>
      <NewTask  onSubmit={handleAddNewTask}  />
          { newItem.map(({id, value}, index)=> (
            <GlobalStorage key={id}>
            <Task 
            key={id} 
            value={value} 
            onDelete={()=> deleteTask(index)} 
            onChange={(event)=> handleUpdataTask(event, index)}
            />
            </GlobalStorage>
            ))
          }
 
    </Container>
  )
}
