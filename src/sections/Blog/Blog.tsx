// Blog.tsx
import React, { useState } from 'react';
import { blogPosts, type BlogPost } from './blogData';
import BlogModal from './BlogModal';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [show, setShow] = useState(false);

  const handleOpen = (post: BlogPost) => {
    setSelectedPost(post);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedPost(null);
    setShow(false);
  };

  return (
    <section id="blog" className="py-5">
      <div className="text-center mb-4" data-aos="fade-up">
        <h2 className="fw-bold">📝 Blog</h2>
        <p className="text-muted">Short articles, ideas, and dev tips</p>
      </div>

      <div className="row g-4">
        {blogPosts.map((post) => (
          <div className="col-md-6" key={post.id}>
            <div className="card h-100 shadow-sm" onClick={() => handleOpen(post)} style={{ cursor: 'pointer' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BlogModal show={show} handleClose={handleClose} post={selectedPost} />
    </section>
  );
};

export default Blog;
