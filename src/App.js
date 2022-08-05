import React, { useState } from "react";
import "./App.css";

function App() {
  let infoObj = {};
  const showData = () => {
    console.log("Name : ", name);
    console.log("Username : ", username);
    console.log("Phone : ", phone);
    console.log("Email : ", email);
    console.log("Gender : ", gender);
    console.log("Descriptio : ", description);

    setEmail(" ");
    setName(" ");
    setPhone(" ");
    setUsername(" ");
    setGender(" ");
    setDescription(" ");
  };

  const [name, setName] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <header className="App-Header">
        <h2>Registration</h2>
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Name:</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              autoFocus={true}
            />
            <label>Username:</label>
            <input
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email:</label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone:</label>
            <input
              value={phone}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />

            <label>Gender:</label>
            <div className="gender">
              <input
                value="Male"
                name="gender"
                type="radio"
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Male</label>

              <input
                value="Female"
                name="gender"
                type="radio"
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Female</label>

              <input
                value="Other"
                name="gender"
                type="radio"
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Other</label>
            </div>
            <label>Description</label>
            <textarea
              placeholder="Describe yourself...."
              rows={1}
              cols={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div>
              <button onClick={showData}>Submit</button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
