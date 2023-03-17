import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

TableList.propTypes = {
  data: PropTypes.array,
};

TableList.defaultProps = {
  data: [],
};

const TableList = (props) => {
  console.log(props);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Full name</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
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
