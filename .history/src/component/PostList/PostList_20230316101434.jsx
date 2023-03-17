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
  return (
    <ul className="post-list">
      {post.map((item) => (
        <li key={item.id.value}>{item.name.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
