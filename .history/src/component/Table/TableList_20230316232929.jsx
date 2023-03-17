import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const TableList = (props) => {
  const { data } = props;
  const obj = data.map((item) => ({
    id: item.login.md5,
    fullname: `${item.name.title} ${item.name.first} ${item.name.last}`,
    username: `${item.login.username}`,
    thumbnail: `${item.picture.thumbnail}`,
  }));

  const [dataTable, setDataTable] = useState(obj);
  const [order, setOrder] = useState("ASC");
  //   console.log(dataTable);
  const handleSorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
    }
  };
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th onClick={() => handleSorting("fullname")}>Full name</th>
          <th onClick={() => handleSorting("username")}>Username</th>
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
