import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="app">
      <h1>React Hook - PostList</h1>
    </div>
  );
}

export default App;
