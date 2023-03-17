import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // lay du lieu API o day
    async function fetchPostList() {
      const requestUrl = "";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
    }
  }, []);

  return (
    <div className="app">
      <h1>React Hook - PostList</h1>
    </div>
  );
}

export default App;
