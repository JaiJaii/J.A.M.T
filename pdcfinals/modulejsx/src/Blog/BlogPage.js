import React, { useState } from "react";
import BlogList from './BlogList';

const BlogPage = () => {
  const [posts, setPosts] = useState([{ title: '', content: '', image: '' }]);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: '' });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: '', content: '', image: '' });
    }
  };

  return (
    <div>
      <h1>My Blog</h1>
      <BlogList posts={posts} />
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />

      <textarea
        placeholder="Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />

      <input
        type="text"
        placeholder="Image URL (optional)"
        value={newPost.image}
        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
      />

      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}

export default BlogPage;