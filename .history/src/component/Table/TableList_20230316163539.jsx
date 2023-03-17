import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

// TableList.propTypes = {
//   data: PropTypes.array,
// };

// TableList.defaultProps = {
//   data: [],
// };

const TableList = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Full name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>1</td>
          <td>Mark</td>
          <td>Otto</td> */}
          {data.map((item) => {
            <th key={item.login.md5}>{item.picture.thumbnail}</th>;
          })}
        </tr>
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
