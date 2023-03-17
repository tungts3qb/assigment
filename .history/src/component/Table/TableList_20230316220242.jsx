import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import BootstrapTable from "react-bootstrap-table-next";

const TableList = (props) => {
  const { data } = props;
  //   console.log(data[0]);
  const columns = [
    {
      text: "Thumbnail",
      dataField: "picture.thumbnail",
      sort: false,
    },
    { text: "Full name", dataField: `{name.title``name.first`, sort: true },
    { text: "Username", dataField: "username", sort: true },
  ];

  //   const newData = {
  //     thumbnail: "aaaaaaa",
  //     fullname: "vvvvvvvvvv",
  //     username: `ddddddddddd`,
  //   };

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
    <BootstrapTable
      keyField="id.value"
      data={data}
      columns={columns}
    ></BootstrapTable>
  );
};

TableList.propTypes = {
  data: PropTypes.array,
};

TableList.defaultProps = {
  data: [],
};

export default TableList;
