import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './BlogPostPage.css';

const BlogPostPage = () => {
  const [blogPost, setBlogPost] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`http://localhost:8001/blog_posts/${id}`)
      .then(response => {
        setBlogPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
      });
  }, [id]); 

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post-container">
      <div className='row'>
      <h1 className="blog-post-title">{blogPost.title}</h1>
      <Link to="/blog" className="back-to-blog-link">Back to Blogs</Link>
      </div>
      <img src={blogPost.featured_image} alt={blogPost.title} className="blog-post-image" />
      <p className="blog-post-content">{blogPost.content}</p>
      <p className="blog-post-description">{blogPost.description}</p>
      
    </div>
  );
};

export default BlogPostPage;
