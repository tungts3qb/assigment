import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { page, results } = pagination;
  console.log(pagination);
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div>
      <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>
        Prev
      </button>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>
    </div>
  );
}

export default Pagination;

//npm install query-string
// npm install react-bootstrap bootstrap
