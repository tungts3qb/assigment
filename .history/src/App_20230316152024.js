import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./component/Pagination/Pagination";
import PostList from "./component/PostList/PostList";
import queryString from "query-string";

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    results: 10,
  });

  const [filter, setFilter] = useState({
    page: 1,
    results: 10,
  });

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

    const paramString = queryString.stringify(filter);
    console.log(paramString);
    axios(`https://randomuser.me/api/?${paramString}`).then((res) => {
      setPostList(res.data.results);
      setPagination(res.data.info);
    });

    getData();
  }, [filter]);

  const getData = () => {
    const paramString = queryString.stringify(filter);
    console.log(paramString);
    axios(`https://randomuser.me/api/?${paramString}`).then((res) => {
      setPostList(res.data.results);
      setPagination(res.data.info);
    });
  };

  function handlePageChange(newPage) {
    // console.log("newPage", newPage);
    setFilter({
      ...filter,
      page: newPage,
    });
  }

  return (
    <div className="app">
      <h1>React Hook - PostList</h1>
      <PostList post={postList}></PostList>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
