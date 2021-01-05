import userEvent from '@testing-library/user-event';
import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
  ]);

  const [input, setInput] = useState('')

  //fica no lugar do didUpdate
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas')

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

    return () => {};
  }, []);

  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])



  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input])
    setInput('')
  }, [input, tarefas]);


  const totalTarefas = useMemo(()=> tarefas.lenght, [tarefas])
  

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}> {tarefa} </li>
        ))}
      </ul>
      <br/>
      <p>{totalTarefas}</p><br/>
        
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
