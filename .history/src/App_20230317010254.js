import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./component/Pagination/Pagination";
import PostList from "./component/PostList/PostList";
import queryString from "query-string";
import TableList from "./component/Table/TableList";
// import { writeJsonFile } from "write-json-file";

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
    const paramString = queryString.stringify(filter);
    console.log(paramString);
    axios(`https://randomuser.me/api/?${paramString}`).then((res) => {
      setPostList(res.data.results);
      setPagination(res.data.info);
      // writeJsonFile("/data.json", postList, "string");
    });
  }, [filter]);

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      page: newPage,
    });
  }

  return (
    <div className="app">
      <h1>React Hook - PostList</h1>
      {/* <PostList post={postList}></PostList> */}
      <TableList data={postList}></TableList>
      {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
    </div>
  );
}

export default App;
