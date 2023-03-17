import { useEffect } from "react";
import "./App.scss";

function App() {
  // const [postList, setPostList] = useState([]);

  useEffect(() => {
    // lay du lieu API o day
    async function fetchPostList() {
      const requestUrl =
        "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log(responseJSON);
      const { data } = responseJSON.data;
    }

    fetchPostList();
  }, []);

  return (
    <div className="app">
      <h1>React Hook - PostList</h1>
    </div>
  );
}

export default App;
