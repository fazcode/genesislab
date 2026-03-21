"use client";

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Set up Next.js project", done: true },
  { id: 2, text: "Configure Tailwind CSS", done: true },
  { id: 3, text: "Build interactive components", done: true },
  { id: 4, text: "Add animations & polish", done: false },
  { id: 5, text: "Deploy to production", done: false },
];

export default function TaskTracker() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]);
    setNewTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const completed = tasks.filter((t) => t.done).length;
  const progress = tasks.length ? (completed / tasks.length) * 100 : 0;

  return (
    <div className="glass rounded-2xl p-6 w-full max-w-md">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-400 rounded-full" />
        Task Tracker
      </h3>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>
            {completed}/{tasks.length} completed
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ul className="space-y-2 mb-4 max-h-52 overflow-y-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-3 group p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                task.done
                  ? "bg-indigo-500 border-indigo-500"
                  : "border-gray-600 hover:border-indigo-400"
              }`}
            >
              {task.done && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span className={`flex-1 text-sm ${task.done ? "line-through text-gray-500" : "text-gray-200"}`}>
              {task.text}
            </span>
            <button
              onClick={() => removeTask(task.id)}
              className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all text-lg leading-none"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={addTask} className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
}
