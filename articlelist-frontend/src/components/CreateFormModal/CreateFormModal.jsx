import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { baseUrl } from '../../data/application.properties';

function CreateFormModal(props) {

  const [newArticle, setNewArticle] = useState({
    description: "",
    category: "",
    keywords: "",
    link: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${baseUrl}/articles`, newArticle)
      .then(res => {
        console.log(res);
        props.fetchArticles(`${baseUrl}/articles?size=8`);
        props.onHide();
      })
      .catch(err => console.error(err));
  }

  const handleDescriptionChange = (e) => {
    setNewArticle({...newArticle, description: e.target.value});
  }

  const handleCategoryChange = (e) => {
    setNewArticle({...newArticle, category: e.target.value});
  }

  const handleKeywordsChange = (e) => {
    setNewArticle({...newArticle, keywords: e.target.value});
  }

  const handleLinkChange = (e) => {
    setNewArticle({...newArticle, link: e.target.value});
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
          Add Article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleDescriptionChange}
              type='text'
              placeholder='e.g. What makes an API powerful.'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              onChange={handleCategoryChange}
              type='text'
              placeholder='e.g. Back-end'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Keywords</Form.Label>
            <Form.Control
              onChange={handleKeywordsChange}
              type='text'
              placeholder='e.g. Spring Java API'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Link</Form.Label>
            <Form.Control
              onChange={handleLinkChange}
              type='text'
              placeholder='e.g. example.com'
            />
          </Form.Group>

          <Button variant='success' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateFormModal;