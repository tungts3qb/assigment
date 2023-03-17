import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const columns = [
  { label: "Thumbnail", accessor: "thumbnail", sortable: false },
  { label: "Full name", accessor: "full_name", sortable: true },
  { label: "Username", accessor: "user_name", sortable: true },
];

const TableList = (props) => {
  const { data } = props;
  //   console.log(data);
  const [tableData, setTableData] = useState(data);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  function handleSortingChange(accessor) {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  }

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...data].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  return (
    // <Table striped bordered hover size="sm">
    //   <thead>
    //     <tr>
    //       <th>Thumbnail</th>
    //       <th>Full name</th>
    //       <th>Username</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((item) => (
    //       <tr key={item.login.md5}>
    //         <td>
    //           <img src={item.picture.thumbnail} alt=""></img>
    //         </td>
    //         <td>
    //           {item.name.title} {item.name.first} {item.name.last}
    //         </td>
    //         <td>{item.login.username}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </Table>

    <Table striped bordered hover size="sm">
      {/* <thead>
        <tr>
          {columns.map(({ label, accessor, sortable }) => {
            return (
              <th
                key={accessor}
                onClick={sortable ? () => handleSortingChange(accessor) : null}
              >
                {label}
              </th>
            );
          })}
        </tr>
      </thead> */}
      <thead>
        <tr>
          {columns.map(({ label, accessor, sortable }) => {
            const cl = sortable
              ? sortField === accessor && order === "asc"
                ? "up"
                : sortField === accessor && order === "desc"
                ? "down"
                : "default"
              : "";
            return (
              <th
                key={accessor}
                onClick={() => handleSortingChange(accessor)}
                className={cl}
              >
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.login.md5}>
            <td>
              <img src={item.picture.thumbnail} alt=""></img>
            </td>
            <td>
              {item.name.title} {item.name.first} {item.name.last}
            </td>
            <td>{item.login.username}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TableList.propTypes = {
  data: PropTypes.array,
};

TableList.defaultProps = {
  data: [],
};

export default TableList;
