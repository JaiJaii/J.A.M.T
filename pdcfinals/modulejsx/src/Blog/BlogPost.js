import React from "react";
import PropTypes from 'prop-types';

const BlogPost = ({ title, content, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      {image && <img src={image} alt="Blog post" />}
      <p>{content}</p>
    </div>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default BlogPost;