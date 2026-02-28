import { useState } from "react";

// ============================
// Event Handling: onChange
// ============================

/*
function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  const filteredList = [
    "React",
    "JavaScript",
    "Python",
    "TypeScript",
    "Node",
    "CSS",
    "HTML",
    "Vue",
  ].filter((item) => item.toLowerCase().includes(text.toLowerCase()));
  return (
    <>
      <input onChange={handleChange} placeholder='Search' />
      {text !== "" ? filteredList.length == 0 ? (
        <p>"No results found 😕"</p>
      ) : (
        <p>Searching For: {text}</p>
      ) : null}

      {filteredList.map((item) => (
        <li key={item}> {item}</li>
      ))}
    </>
  );
}
  */

// ==========================
// Event HAndling: onsubmit
// ==========================

function App() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        paaceholder='Enter name'
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default App;
