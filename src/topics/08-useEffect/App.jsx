import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);

  const [postLoading, setPostLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  const [error, setError] = useState(null);
  const [view, setView] = useState(true);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (view) {
      setPostLoading(true);
      setData(null);
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setPostLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setPostLoading(false);
        });
    } else {
      setPostLoading(true);
      setData(null);
      fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setPostLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setPostLoading(false);
        });
    }
  }, [view]);

  useEffect(() => {
    setUserLoading(true);
    setUser(null);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
        setUserLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setUserLoading(false);
      });
  }, [userId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  },[]);

  if (postLoading || userLoading) return <p> Loading...</p>;
  if (error) return <p> Error: {error}</p>;

  return (
    <>
      <div>
        <h4>Current Time:</h4>
        <p>{time.toLocaleTimeString()}</p>
      </div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
      <div>
        <button onClick={() => setView(true)}>Home</button>
        <button onClick={() => setView(false)}>Profile</button>
      </div>
      <div>
        <h1>User Data</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
      </div>
      {[1, 2, 3, 4, 5].map((num) => (
        <button key={num} onClick={() => setUserId(num)}>
          {num}
        </button>
      ))}
    </>
  );
}
export default App;
