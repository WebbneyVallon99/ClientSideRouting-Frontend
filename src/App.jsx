import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import Incomplete from "./components/Incomplete";
import Completed from "./components/Completed";

import { BrowserRouter as Router, Routes, Route } from "react-router";


const App = () => {
  const [tasks, setTasks] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await axios.get("http://localhost:8080/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        {/* Currently, we don't have any routes defined. And you can see above that we're
            rendering the TaskList and AddTask components directly, no matter what our URL looks like.
            Let's fix that! */
           }
        <Route path="/" element={<TaskList tasks={tasks} fetchAllTasks={fetchAllTasks}/>} />
        <Route path="/add-task" element={<AddTask fetchAllTasks={fetchAllTasks}/>} />
        <Route path="/incomplete" element={<Incomplete tasks={tasks} fetchAllTasks={fetchAllTasks} />} />
        <Route path="/completed" element={<Completed tasks={tasks} fetchAllTasks={fetchAllTasks}/>} />
      </Routes>
    </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
