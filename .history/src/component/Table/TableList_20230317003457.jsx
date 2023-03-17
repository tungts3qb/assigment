import PropTypes from "prop-types";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import DataTable from "../data.json";

const TableList = (props) => {
  // const { data } = props;
  const [order, setOrder] = useState("ASC");
  const [dataTable, setDataTable] = useState(DataTable);
  //   const obj = data?.map((item) => ({
  //     id: item.login.md5,
  //     fullname: `${item.name.title} ${item.name.first} ${item.name.last}`,
  //     username: `${item.login.username}`,
  //     thumbnail: `${item.picture.thumbnail}`,
  //   }));
  //   setDataTable(obj);
  console.log(dataTable);
  const handleSorting = (col) => {
    if (order === "ASC") {
      const sorted = [...dataTable].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setDataTable(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...dataTable].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setDataTable(sorted);
      setOrder("ASC");
    }
  };
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Full name</th>
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

TableList.propTypes = {
  data: PropTypes.array,
};

TableList.defaultProps = {
  data: [],
};

export default TableList;
