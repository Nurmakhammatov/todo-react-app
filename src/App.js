import "./App.css";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/active" element={<Todo />} />
        <Route path="/completed" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
