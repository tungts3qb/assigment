import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  post: PropTypes.array,
};

PostList.defautProps = {
  post: [],
};

function PostList(props) {
  const { name } = props;
  console.log(name);
  return (
    // <ul className="post-list">
    //   {post.map((post) => (
    //     <li key={post.id}>{post.name.title}</li>
    //   ))}
    // </ul>
  );
}

export default PostList;
