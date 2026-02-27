import { useState } from "react";
function App() {
  const [rating, setRating] = useState(null);

  return (
    <>
      {[1, 2, 3, 4, 5].map((num) => (
        <button key={num} onClick={() => setRating(num)} style={{ background: num === rating ? "blue" : "#333" }}>
          {" "}
          Rate {num}
        </button>
      ))}
      {rating !== null && (rating < 3 ? <p>"We'll do better 😔"</p> :
        rating === 3 ? <p>"Thanks for the feedback 🙂"</p> :
        <p>"Glad you loved it! 🔥"</p>)}
      <div>
        <button onClick={() => setRating(null)}> Reset</button>
      </div>
    </>
  );
}
export default App;
