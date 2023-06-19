import React,{useState} from 'react';

import { Container,FormTask } from './style';

import lixeira from "../../../Imgs/LIXEIRA.svg";
import btnA from "../../../Imgs/btnAtive.svg";

export default function Task({onChange, onDelete, value,id}) {
  const [toggle, setToggle] = useState(false);
  const ative = toggle;
 function handleClick(event){
    event.preventDefault();
    setToggle(!toggle) 
    
 }

  return (
    <Container  >
      <FormTask ativeToggle={ative}>
        <div className="btn" key={id}>
               <button type='button' onClick={handleClick}  >
                {
                  toggle === true ? 
                  <img src={btnA}  alt='btn' id='checked'/> : 
                  null 
                }
               </button>
        </div>
        <p name="tarefas" id="tarefas" onChange={onChange} value={value} >{value}</p>
        <button onClick={onDelete} id='delete'>
          <img src={lixeira} alt="Deletar" />
        </button>
      </FormTask>
    </Container>
 
  )
}
