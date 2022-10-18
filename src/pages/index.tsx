import { useEffect, useState } from 'react';
import { TaskList } from '../components/container/TaskList';
import { Loader } from '../components/pure/Loader'
import { Register } from '../components/pure/forms/Register'
import { TaskModel } from '../types/types'
import { UserModel } from '../types/types'

const INITIAL_TASKS: Array<TaskModel> = [
  { completed: true, description: 'Description1', id: 1, name: 'Hola 1', level: 'NORMAL' },
  { completed: false, description: 'Description2', id: 2, name: 'Hola 2', level: 'NORMAL' },
  { completed: false, description: 'Description2', id: 3, name: 'Hola 3', level: 'URGENT' },
  { completed: true, description: 'Description2', id: 4, name: 'Hola 4', level: 'BLOCKING' },
]



function App() {

  const [tasks, setTasks] = useState<Array<TaskModel>>([])
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    setTimeout(function () {
      setTasks(INITIAL_TASKS);
      setLoading(false)
    }, 1000)
  }, [])


  return (
    <div className='container'>
      <a href="/api/auth/login">Login</a>
      {loading ?
        <Loader text='Cargando tareas...' /> :
        <TaskList tasks={tasks} setTasks={setTasks} />
      }
      <Register {...{ email: '', password: '', userName: '', role: 'USER' }} />
    </div>
  );
}

export default App;
