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
        <li key={item.id.value}>
          {item.name.title} {item.name.first} {item.name.last} ||{" "}
          {item.login.username} ||{" "}
          {
            <img
              src={item.picture.thumbnail}
              style={{ borderRadius: "50%", width: "42px", objectFit: "cover" }}
            ></img>
          }
        </li>
      ))}
    </ul>
  );
}

export default PostList;

// npm i axios
