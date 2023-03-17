import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const columns = [
  { label: "Thumbnail", accessor: "thumbnail", sortable: false },
  { label: "Full name", accessor: "full_name", sortable: true },
  { label: "Username", accessor: "user_name", sortable: true },
];

function handleSortingChange(accessor) {
  console.log(accessor);
}

const TableList = (props) => {
  const [sortField, setSortField] = useState("full_name");
  const [order, setOrder] = useState("asc");
  const { data } = props;
  console.log(data);
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
                // ...
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
