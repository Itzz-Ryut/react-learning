// Props component
/*
function User(props) {
  console.log(props);
  return (
    <>
      <p>{props.name}</p>
      <p>{props.role}</p>
      <p>{props.age >= 18 ? "Adult" : "Minor"}</p>
    </>
  );
}
  */


// destructing Component
function User({ name, role, age }) {
  return(<>
    <p>{name} - {role} - {age >= 18 ? "Adult" : "Minor"}</p>
  </>
  );
}

function App() {
  return (
    <>
      <User name='Aryan' role='Developer' age={20} />
      <User name='Ryut' role='Designer' age={16} />
      <User name='XYZ' role='Gamer' age={22} />
    </>
  );
}
export default App;
