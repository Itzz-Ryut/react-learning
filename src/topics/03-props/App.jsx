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

function App() {
  return (
    <>
      <User name='Aryan' role='Developer' age={20} />
      <User name='Ryut' role='' age={18} />
      <User name='XYZ' role='Studennt' age={12} />
      <User name='A' role='Dev' />
      <User name='A' role='Tester' />
    </>
  );
}
export default App;
