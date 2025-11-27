//RegistrationForm.js
import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${form.name}\nEmail: ${form.email}`);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <br /><br />
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
//app.js
import React from "react";
import RegistrationForm from "./components/RegistrationForm";

export default function App() {
  return (
    <div>
      <h1>React Form Example</h1>
      <RegistrationForm />
    </div>
  );
}


//3experinnt
//PostsList.js:
import { useState, useEffect } from "react";
import axios from "axios";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map(p => <li key={p.id}><b>{p.title}</b></li>)}
      </ul>
    </div>
  );
}
//App.js:
import React from "react";
import PostsList from "./components/PostsList";

export default function App() {
  return (
    <div>
      <h1>React Axios Data Fetch Example</h1>
      <PostsList />
    </div>
  );
}
