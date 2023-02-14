import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditFormModal(props) {

  const [updatedArticle, setupdatedArticle] = useState({
    description: "",
    category: "",
    keywords: "",
    link: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(props.article._links.self.href, updatedArticle)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }

  const handleDescriptionChange = (e) => {
    setupdatedArticle({...updatedArticle, description: e.target.value});
  }

  const handleCategoryChange = (e) => {
    setupdatedArticle({...updatedArticle, category: e.target.value});
  }

  const handleKeywordsChange = (e) => {
    setupdatedArticle({...updatedArticle, keywords: e.target.value});
  }

  const handleLinkChange = (e) => {
    setupdatedArticle({...updatedArticle, link: e.target.value});
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleDescriptionChange}
              type='text'
              placeholder={props.article.description}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              onChange={handleCategoryChange}
              type='text'
              placeholder={props.article.category}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Keywords</Form.Label>
            <Form.Control
              onChange={handleKeywordsChange}
              type='text'
              placeholder={props.article.keywords}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Link</Form.Label>
            <Form.Control
              onChange={handleLinkChange}
              type='text'
              placeholder={props.article.link}
            />
          </Form.Group>

          <Button variant='success' type='submit'>
            Update
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditFormModal;