import { useState } from "react";

function App() {
  const [publicView, setPublicView] = useState(true);
  const [status, setStatus] = useState("");
  const [notif, setNotif] = useState(true);
  const [nameChecked, setNameChecked] = useState(false);
  const [bioChecked, setBioChecked] = useState(false);
  const [photoChecked, setPhotoChecked] = useState(false);

  let color = "default";

  if (status === "online") {
    color = "green";
  } else if (status === "away") {
    color = "yellow";
  } else if (status === "offline") {
    color = "red";
  } else {
    color = "default";
  }

  const totalChecked = nameChecked + bioChecked + photoChecked;
  return (
    <>
      <button onClick={() => setPublicView(!publicView)}>
        {publicView ? "Public View" : "Private View"}
      </button>
      {publicView ? (
        <>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Journey</li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li>Name</li>
            <li>About</li>
            <li>History</li>
          </ul>
        </>
      )}
      <select
        name='status'
        id='status'
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value=''>--Ur Status--</option>
        <option value='online'>Online</option>
        <option value='away'>Away</option>
        <option value='offline'>Offline</option>
      </select>
      <p>
        <span style={{ color: color, fontSize: "1.5rem" }}>•</span> Ryut
      </p>
      {notif ? (
        <div>
          <p>🔔 You have a new message!</p>
          <button onClick={() => setNotif(false)}>X</button>
        </div>
      ) : (
        <p>No Notification</p>
      )}

      <div>
        <input
          type='checkbox'
          id = 'name'
          onChange={(e) => setNameChecked(e.target.checked)}
        />{" "}
        <label htmlFor='name'>Name</label>
        <input
          type='checkbox'
          id = 'bio'
          onChange={(e) => setBioChecked(e.target.checked)}
        />{" "}
        <label htmlFor='bio'>Bio</label>
        <input
          type='checkbox'
          id ="photo"
          onChange={(e) => setPhotoChecked(e.target.checked)}
        />{" "}
        <label htmlFor='photo'>Photo</label>
      </div>
      {totalChecked === 0 ? (
        <p>Profile empty 😶</p>
      ) : totalChecked < 3 ? (
        <p>Profile incomplete ⚠️</p>
      ) : (
        <p>Profile complete! ✅</p>
      )}
    </>
  );
}

export default App;
