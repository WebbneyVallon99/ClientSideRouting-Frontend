import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, fetchAllTasks }) => {
  const filteredTasks = tasks.filter (task => !task.completed)
  return (
    <div>
      {tasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} fetchAllTasks={fetchAllTasks} />
        ))
      ) : (
        <p style={{color: "white"}}>No tasks found</p>
      )}
    </div>
  );
};





export default TaskList;
