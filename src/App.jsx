function User() {
  return (
    <>
      <h2>Name: Ryut</h2>
      <p>Role: Student</p>
    </>
  );
}

function Hobbies() {
  const hobby = 'coding'
  return (
    <>
    <p>Hobby: {hobby}</p>
    </>
  );
}

function Status() {
  const age = 22
  return (
    <>
      <p>Status: {age >= 18 ? 'You are an Adult.' : 'You are a minor.'}</p>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Main App</h1>
      <User />
      <Hobbies />
      <Status />
      <User/>
    </>
  );
}
export default App;
