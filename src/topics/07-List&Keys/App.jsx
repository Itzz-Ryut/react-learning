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

  function addTask() {
    if (text !== ""){
      setTasks([...tasks, { id: Date.now(), title: text, priority: "medium" }]);
    setText("");}
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
        <button onClick={addTask}>Add Task</button>
      </div>
    </>
  );
}

export default App;
