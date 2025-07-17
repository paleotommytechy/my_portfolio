// Blog/BlogModal.tsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import type { BlogPost } from './blogData';

interface Props {
  show: boolean;
  handleClose: () => void;
  post: BlogPost | null;
}

const BlogModal = ({ show, handleClose, post }: Props) => {
  if (!post) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ whiteSpace: 'pre-line' }}>
        {post.link ? (
          <p>
            This post is hosted externally. <br />
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read on Dev.to
            </a>
          </p>
        ) : (
          post.content
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BlogModal;
