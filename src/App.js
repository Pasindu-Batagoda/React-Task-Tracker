import { useState } from "react"
//importing header component
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

//Main component, APP (Function based component)
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctors Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])

//Delete task function
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id ))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder:
  !task.reminder } : task
  )
  )

}

  return (
    <div className="container">

      {/*Embedding Header*/}
      {/*Passing in title property (props) to Header*/}

      <Header />
      <AddTasks/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
