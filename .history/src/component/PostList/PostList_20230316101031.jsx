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
  console.log(data[0]);
  return (
    <ul className="post-list">
      <li key={data[0].id.value}>{data[0].name.title}</li>
    </ul>
  );
}

export default PostList;
