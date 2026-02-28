import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: "Study", title: "Study", priority: "medium" },
    { id: "Game", title: "Game", priority: "high" },
    { id: "Sleep", title: "sleep", priority: "low" },
    { id: "Eat", title: "Eat", priority: "low" },
  ]);
  const [text, setText] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [taskPriority, setPriority] = useState("")

  function addTask() {
    if (text !== "" && taskPriority !== ""){
      setTasks([...tasks, { id: Date.now(), title: text, priority: taskPriority }]);
    setText("");
    setPriority("")}
  }
  function inputText(e) {
    setText(e.target.value);
  }
  function removeTask(remove) {
    setTasks(tasks.filter((task) => task.id !== remove));
  }
  const filteredTasks =
    activeFilter === "all"
      ? tasks
      : tasks.filter((task) => task.priority === activeFilter);


  return (
    <>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.priority}{" "}
            <button onClick={() => removeTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Filter Tasks</p>
        <button onClick={() => setActiveFilter("all")}>All</button>
        <button onClick={() => setActiveFilter("high")}>High</button>
        <button onClick={() => setActiveFilter("medium")}>Medium</button>
        <button onClick={() => setActiveFilter("low")}>Low</button>
      </div>
      <div>
        <input
          value={text}
          onChange={inputText}
          type='text'
          placeholder='Enter Title'
        />
        <select value={taskPriority} name="priority" id="priority" onChange={(e) => setPriority(e.target.value)}>
          <option value="">--Choose Priority--</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
    </>
  );
}

export default App;
