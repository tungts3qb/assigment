import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  post: PropTypes.array,
};

PostList.defautProps = {
  post: [],
};

function PostList(props) {
  const { post } = props;
  console.log(post);
  return <ul className="post-list">{}</ul>;
}

export default PostList;
