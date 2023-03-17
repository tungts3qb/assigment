import PropTypes from "prop-types";
import { useState } from "react";
import Table from "react-bootstrap/Table";

const TableList = (props) => {
  const { data } = props;

  const obj = data.map((item) => ({
    id: item.login.md5,
    fullname: `${item.name.title} ${item.name.first} ${item.name.last}`,
    username: `${item.login.username}`,
    thumbnail: `${item.picture.thumbnail}`,
  }));
  const tempData = JSON.stringify(obj);
  //   console.log(JSON.stringify(obj));
  const [dataTable, setDataTable] = useState("tempData");
  console.log(dataTable);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Full name</th>
          <th>Username</th>
          <th>Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        {tempData.map((item) => (
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
