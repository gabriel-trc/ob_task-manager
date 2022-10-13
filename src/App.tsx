import { useEffect, useState } from 'react';
import { TaskList } from './components/container/TaskList';
import {  TaskModel } from './types/types'

const INITIAL_TASKS: Array<TaskModel> = [
  { completed: true, description: 'Description1', id: 1, name: 'Hola 1', level: 'NORMAL' },
  { completed: true, description: 'Description2', id: 2, name: 'Hola 2', level: 'NORMAL' },
  { completed: true, description: 'Description2', id: 3, name: 'Hola 3', level: 'URGENT' },
  { completed: true, description: 'Description2', id: 4, name: 'Hola 4', level: 'BLOCKING' },
]

interface Props {
  tasks: Array<TaskModel>
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>
}

function App() {
  const [tasks, setTasks] = useState<Array<TaskModel>>([])

  useEffect(function () {
    setTimeout(function () {
      setTasks(INITIAL_TASKS);
    }, 1000)
  }, [])


  return (
    <div className='container'>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
