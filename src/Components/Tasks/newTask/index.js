import { Container,FormNewTask } from './style';

import { useState } from 'react';

import mais from "../../../Imgs/btnMAis.svg";

export default function NewTask({onSubmit}) {
  const [newTask, setNewTask] = useState("");

  const setNewItem = ({target})=>{
    setNewTask(target.value);
  };

  const submit = (event)=>{
    event.preventDefault();
    onSubmit(newTask);
    setNewTask("")
  };


  return (
    <Container>
      <FormNewTask  onSubmit={submit}>
        <input  id='inputTask' onChange={setNewItem}  placeholder='Adicione uma nova tarefa'  value={newTask}/>
        <button type='submit'>
            <span>Criar</span>
          <img src={mais} alt="add" />
        </button>
      </FormNewTask>
    </Container>
  )
}
