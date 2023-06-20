import {useContext} from 'react';

import { GlobalContext } from '../../context';

export default function Infos({toggles}) {
  const {toggle} = useContext(GlobalContext);
    console.log( toggle);

  return (
    <div className="contInfo">
          <div className="contTarefasCriadas">
            <p>Tarefas criadas</p>
            <span>{toggles.length}</span>
          </div>
          <div className="contTarefasConcluidas" >
            <p>Concluídas</p>
            <span>      
              <p>
                  {
                    toggle === true ? toggle===true + length : 0
                  }
             </p> 
              <p>de</p>
              <p>
                  {toggles.length}
              </p>
            </span>
          </div>
      </div>
  )
}
