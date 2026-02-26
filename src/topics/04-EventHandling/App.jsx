//Click event
/*function HandleClick() {
  console.log("ButtonClicked");
}
console.log("App rendering")
*/

//Input Events
function HandleChange(event){
  console.log(event.target.value)
}
function App() {
  return (
    <>
      {/* <button onClick={HandleClick}>Click</button> */}  
      <input onChange={HandleChange} />
      
    </>
  );
}
export default App;