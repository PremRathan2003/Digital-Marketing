import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogPage.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts from the backend
    axios.get('http://localhost:8001/blog_posts')
      .then(response => {
        setBlogPosts(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
        setLoading(false); // Set loading to false even in case of error
      });
  }, []);

  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="blog-list">
          {blogPosts.length > 0 ? (
            blogPosts.map(post => (
              <li className="blog-item" key={post.id}>
                <img src={post.featured_image} alt={post.title} loading="lazy" />
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p>{post.description}</p>
                <Link to={`/blog/${post.id}`}>Read More</Link>
              </li>
            ))
          ) : (
            <p>No blog posts available.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default BlogPage;
