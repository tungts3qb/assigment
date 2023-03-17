import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import PostList from "./component/PostList/PostList";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // lay du lieu API o day
    // async function fetchPostList() {
    //   try {
    //     // const requestUrl =
    //     //   "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
    //     const requestUrl = "https://randomuser.me/api/?page=1&results=10";
    //     const response = await fetch(requestUrl);
    //     const responseJSON = await response.json();
    //     const { results } = responseJSON;
    //     // console.log(results);
    //     setPostList(results);
    //   } catch (error) {
    //     console.log("Failed to fetch post list");
    //   }
    // }

    // fetchPostList();
    getData();
  }, []);

  const getData = () => {
    axios("https://randomuser.me/api/?page=1&results=10").then((res) =>
      setPostList(res.data.results)
    );
  };

  return (
    <div className="app">
      <h1>React Hook - PostList</h1>
      <PostList post={postList}></PostList>
    </div>
  );
}

export default App;
