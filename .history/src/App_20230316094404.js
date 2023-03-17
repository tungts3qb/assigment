import { useState } from "react";
import "./App.scss";

const [postList, setPostList] = useState([]);

function App() {
  return (
    <div className="app">
      <h1>React Hook - PostList</h1>
    </div>
  );
}

export default App;
