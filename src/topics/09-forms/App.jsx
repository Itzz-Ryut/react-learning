import { useState } from "react";
function App() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    terms: false,
  });

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    if (userData.name.length < 3)
      newErrors.name = "Username must be at least 3 characters";
    if (!userData.email.includes("@")) newErrors.email = "Email must contain @";
    if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!userData.terms) newErrors.terms = "Terms must be accepted";

    Object.keys(newErrors).length > 0
      ? setErrors(newErrors)
      : setShowForm(false);
    return;
  }

  return showForm ? (
    <form onSubmit={handleSubmit}>
      <p>
        Username:
        <input
          type='text'
          name='name'
          value={userData.name}
          onChange={handleChange}
          placeholder='Enter Name'
        />
      </p>
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <p>
        Email:
        <input
          type='text'
          name='email'
          value={userData.email}
          onChange={handleChange}
          placeholder='Enter email'
        />
      </p>
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <p>
        Password:
        <input
          type={passwordShow ? "text" : "password"}
          name='password'
          value={userData.password}
          onChange={handleChange}
          placeholder='Enter password'
        />
        <button type='button' onClick={() => setPasswordShow(!passwordShow)}>
          {passwordShow ? `🐵` : `🙈`}
        </button>
      </p>
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <p>
        <select name='role' value={userData.role} onChange={handleChange}>
          <option value=''>--Select Role--</option>
          <option name='admin' value='admin'>
            Admin
          </option>
          <option name='user' value='user'>
            User
          </option>
        </select>
      </p>
      <input
        type='checkbox'
        name='terms'
        id='terms'
        checked={userData.terms}
        onChange={handleChange}
      />
      <label htmlFor='terms'>Terms</label>
      {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}

      <p>
        <button type='submit'>Submit</button>
      </p>
    </form>
  ) : (
    <div>Welcome, {userData.name}! Registration complete ✅</div>
  );
}

export default App;
