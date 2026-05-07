import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([
    "Setup Jenkins Pipeline",
    "Connect GitHub Repository",
    "Build React App",
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>🚀 DevOps CI/CD Dashboard</h1>

        {loading ? (
          <p className="loading">Loading backend data...</p>
        ) : (
          <p className="message">{message}</p>
        )}

        <h2>📌 Pipeline Tasks</h2>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>✔ {task}</li>
          ))}
        </ul>

        <div className="footer">
          <p>Built with React + Node + Jenkins</p>
        </div>
      </div>
    </div>
  );
}

export default App;