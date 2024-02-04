import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogPage.css'; // Import the CSS file

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the backend
    axios.get('http://localhost:8001/blog_posts')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      <ul className="blog-list">
        {blogPosts.map(post => (
          <li className="blog-item" key={post.id}>
            <img src={post.featured_image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.description}</p>
            <a href={`/blog/${post.id}`}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
