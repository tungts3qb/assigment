import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import DataTable from "../data.json";

const TableList = (props) => {
  const [order, setOrder] = useState("ASC");
  const [dataTable, setDataTable] = useState(JSON.parse(dataLocal));
  let dataLocal = localStorage.getItem("jsondata");
  useEffect(() => {}, [dataLocal]);
  const handleSorting = (col) => {
    if (order === "ASC") {
      const sorted = [...dataTable].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setDataTable(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...dataTable].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setDataTable(sorted);
      setOrder("ASC");
    }
  };
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th
            onClick={() => {
              handleSorting("fullname");
            }}
          >
            Full name
          </th>
          <th
            onClick={() => {
              handleSorting("username");
            }}
          >
            Username
          </th>
          <th>Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((item) => (
          <tr key={item.id}>
            <td>{item.fullname}</td>
            <td>{item.username}</td>
            <td>
              <img src={item.thumbnail} alt="avatar"></img>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableList;
