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
  return <ul className="post-list">{}</ul>;
}

export default PostList;
