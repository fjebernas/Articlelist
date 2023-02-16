import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateFormModal(props) {

  const handleClose = () => {
    props.onHide();
  }

  const handleContextChange = (e) => {
    props.onContextChange(e.target.value);
  }

  const handleCategoryChange = (e) => {
    props.onCategoryChange(e.currentTarget.value);
  }

  const handleLinkChange = (e) => {
    props.onLinkChange(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <Modal
      show={props.show}
      onHide={handleClose}
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
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>context</Form.Label>
            <Form.Control
              onChange={handleContextChange}
              type='text'
              placeholder='e.g. What makes an API powerful.'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Category</Form.Label>
            <Form.Select onChange={handleCategoryChange}>
              <option>--Select one--</option>
              <option value='Front-end'>Front-end</option>
              <option value='Back-end'>Back-end</option>
              <option value='Other'>Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Link</Form.Label>
            <Form.Control
              onChange={handleLinkChange}
              type='text'
              placeholder='e.g. example.com'
            />
          </Form.Group>

          <Button 
            variant='success' 
            type='button'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateFormModal;