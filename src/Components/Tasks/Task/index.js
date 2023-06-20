import { useContext, useState} from 'react';

import { Container,FormTask } from './style';

import lixeira from "../../../Imgs/LIXEIRA.svg";
import btnA from "../../../Imgs/btnAtive.svg";

import { GlobalContext } from '../../context';

export default function Task({onChange, onDelete, value,id}) {
const global = useContext(GlobalContext)

  return ( 
    <Container  >
      <FormTask ativeToggle={global.toggle}>
        <div className="btn" key={id}>
               <button type='button' onClick={(event)=>{
                    event.preventDefault();
                    global.setToggle(!global.toggle) 
               }}>
                {
                  global.toggle === true ? 
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
