function HandleClick() {
  console.log("ButtonClicked");
}
console.log("App rendering")
function App() {
  return (
    <>
      <button onClick={HandleClick}>Click</button>
    </>
  );
}
export default App;
