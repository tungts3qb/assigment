import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./component/Pagination/Pagination";
import queryString from "query-string";
import TableList from "./component/Table/TableList";

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
    axios(`https://randomuser.me/api/?${paramString}`).then((res) => {
      setPostList(res.data.results);
      setPagination(res.data.info);
    });
  }, [filter]);
  saveDateLocalStorage(postList);

  function saveDateLocalStorage(oldData) {
    const obj = oldData?.map((item) => ({
      id: item.login.md5,
      fullname: `${item.name.title} ${item.name.first} ${item.name.last}`,
      username: `${item.login.username}`,
      thumbnail: `${item.picture.thumbnail}`,
    }));
    localStorage.setItem("jsondata", JSON.stringify(obj));
  }

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      page: newPage,
    });
  }

  return (
    <div className="app">
      <h1 className="title">Assignment Details</h1>
      <TableList></TableList>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
