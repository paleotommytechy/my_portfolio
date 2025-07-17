import React from 'react';
import type { BlogPost } from './blogData';

interface Props {
  post: BlogPost;
}

const BlogCard = ({ post }: Props) => {
  return (
    <div className="card h-100 shadow-sm" data-aos="fade-up">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title}</h5>
        <small className="text-muted mb-2">{post.date}</small>
        <p className="card-text">{post.excerpt}</p>
        {post.link && (
          <a href={post.link} className="btn btn-sm btn-primary mt-auto" target="_blank">
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
