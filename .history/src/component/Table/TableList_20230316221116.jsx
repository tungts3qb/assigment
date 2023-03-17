import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import BootstrapTable from "react-bootstrap-table-next";

const TableList = (props) => {
  const { data } = props;

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
