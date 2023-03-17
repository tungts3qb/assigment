import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  post: PropTypes.array,
};

PostList.defautProps = {
  post: [],
};

function PostList(props) {
  const { data } = props;
  return (
    <ul className="post-list">
      <li key={data.id.value}>{data.name.title}</li>
    </ul>
  );
}

export default PostList;
