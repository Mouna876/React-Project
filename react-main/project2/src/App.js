import './App.css';
import { nanoid } from "nanoid";
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { useState } from "react";

function App(props) {
  const newTask = { id: `todo-${nanoid()}`, name, completed: false };
  const [tasks, setTasks] = useState(props.tasks);
  const completedTasks = props.tasks.filter(task => task.completed);
  const incompleteTasks = props.tasks.filter(task => !task.completed);
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  const tasksWords =
    taskList.length !== 1 ? "tâches restantes" : "tâche restante";
  const headingText = `${taskList.length} ${tasksWords}`;

  const taskList2 = props.tasks2.map((task2) => (
    <FilterButton id={task2.id} name={task2.name} />
  ));
  function addTask(name) {
    const newTask = { id: "id", name, completed: false };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">{taskList2}</div>

      <table>
        <thead>
          <tr>
            <th>Tâches terminées</th>
            <th>Tâches restantes</th>
            <th>Total de tâches</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{completedTasks.length === 1 ? "1 tâche terminée" : `${completedTasks.length} tâches terminées`}</td>
            <td>{incompleteTasks.length === 1 ? "1 tâche restante" : `${incompleteTasks.length} tâches restantes`}</td>
            <td>{taskList.length === 1 ? "1 tâche total" : `${taskList.length} tâches totales`}</td>
          </tr>
        </tbody>
      </table>
      <h2 id="list-heading">{headingText}</h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
