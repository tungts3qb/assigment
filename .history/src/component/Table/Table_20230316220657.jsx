import React, { useState, useEffect } from "react";
import { getUsers } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const Table = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ key: "name", ascending: true });

  const pageItemCount = 15;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(async () => {
    try {
      const response = await getUsers(search);
      setUsers(response.data.users);
      setPageCount(Math.ceil(response.data.users.length / pageItemCount));
      setCurrentUsers(response.data.users.slice(0, pageItemCount));
    } catch (error) {}
  }, [search]);

  /**************************************** */
  useEffect(() => {
    const currentUsersCopy = [...currentUsers];

    const sortedCurrentUsers = currentUsersCopy.sort((a, b) => {
      return a[sorting.key].localeCompare(b[sorting.key]);
    });

    setCurrentUsers(
      sorting.ascending ? sortedCurrentUsers : sortedCurrentUsers.reverse()
    );
  }, [currentUsers, sorting]);
  /*************************************** */

  function applySorting(key, ascending) {
    setSorting({ key: key, ascending: ascending });
  }

  /************************************** */

  const changePage = (i) => {
    setCurrentPage(i);
    const startItem = (i - 1) * pageItemCount + 1;
    setCurrentUsers(users.slice(startItem - 1, pageItemCount * i));
  };

  const handleChange = (event, value) => {
    changePage(value);
  };

  return (
    <div
      dir="rtl"
      className="bg-background mt-10 px-5 rd1200:px-30 overflow-auto"
    >
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <svg
            className="relative top-10 right-3"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 5H20"
              stroke="#79899e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 8H17"
              stroke="#79899e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
              stroke="#79899e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#79899e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            className="my-3 py-2 pl-3 pr-10 text-sm text-text-secondary shadow-sm focus:ring-2 ring-text-secondary rounded-md w-full rd500:w-120"
            placeholder="search .."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <div className="flex justify-center">
          <select
            className="form-select form-select-sm
                    my-3 py-2 pl-15 pr-2 text-sm text-text-secondary shadow-sm rounded-md w-full
                    focus:ring-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            aria-label=".form-select-sm example"
          >
            <option selected value="1" onClick={() => navigate("/")}>
              users
            </option>
            <option value="2" onClick={() => navigate("/ext")}>
              other users
            </option>
          </select>
        </div>
      </div>

      <table className="w-full border-separate rounded-md">
        <thead>
          <tr className="bg-text-secondary text-white shadow-sm text-center">
            <th
              className="p-2"
              onClick={() => applySorting("name", !sorting.ascending)}
            >
              name
            </th>
            <th
              className="p-2"
              onClick={() => applySorting("name", !sorting.ascending)}
            >
              phone
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((item, index) => (
            <tr
              key={item.id}
              className={
                index % 2 === 0
                  ? "bg-white shadow-sm text-center"
                  : "bg-text bg-opacity-5 shadow-sm text-center"
              }
            >
              <td className="text-text text-sm p-2">{item.name}</td>
              <td className="text-text text-sm p-2">{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="mt-2 pb-20"
        dir="ltr"
        page={currentPage}
        count={pageCount}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Table;
