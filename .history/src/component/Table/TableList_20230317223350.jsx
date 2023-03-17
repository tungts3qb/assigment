import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const TableList = () => {
  const [order, setOrder] = useState("ASC");
  const [dataTable, setDataTable] = useState([]);
  let dataLocal = localStorage.getItem("jsondata");
  useEffect(() => {
    setDataTable(JSON.parse(dataLocal));
  }, [dataLocal]);

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
    <Table striped bordered hover size="sm" className="table-custom">
      <thead className="text-center">
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
      <tbody className="text-center">
        {dataTable.map((item) => (
          <tr key={item.id}>
            <td>{item.fullname}</td>
            <td>{item.username}</td>
            <td className="text-center">
              <img
                src={item.thumbnail}
                alt="avatar"
                className="image-thumbnail"
              ></img>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableList;
