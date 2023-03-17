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
      {data.map((item) => (
        <li key={item.id.value}>{item.name.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
