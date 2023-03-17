import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function handlePageChange(newPage) {
  if (onPageChange) {
    onPageChange(newPage);
  }
}
function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { page, results } = pagination;
  return (
    <div>
      <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>
        Prev
      </button>
    </div>
  );
}

export default Pagination;
