import PropTypes from "prop-types";
import { useState } from "react";
import Table from "react-bootstrap/Table";

const TableList = (props) => {
  const { data } = props;
  const [dataTable, setDataTable] = useState(data);
  const obj = [
    data.map((item) => ({
      id: item.login.md5,
      fullname: `${item.name.title} ${item.name.title} ${item.name.title}`,
      username: `${item.login.username}`,
      thumbnail: `${item.picture.thumbnail}`,
    })),
  ];

  console.log(JSON.stringify(obj));
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
        {data.map((item) => (
          <tr key={item.login.md5}>
            <td>
              {item.name.title} {item.name.first} {item.name.last}
            </td>
            <td>{item.login.username}</td>
            <td>
              <img src={item.picture.thumbnail} alt="avatar"></img>
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
