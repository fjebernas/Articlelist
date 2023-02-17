import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Modal, Row, Stack } from "react-bootstrap";

function ArticleCard(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    props.onDelete(props.article._links.self.href);
  }

  const getHeaderBgColor = (category) => {
    return category === 'front-end' ? `#3a7299`
      : category === 'back-end' ? `#3b7570`
      : '#343a40';
  }

  return (
    <>
      <Card bg='light' style={{width: '17rem', height: '14rem'}} className="w-100">
        <Card.Header className="text-white fw-bold d-flex align-items-center justify-content-center" style={{background: getHeaderBgColor(props.article.category)}}>
          {
            props.article.category === 'front-end' ? <FontAwesomeIcon icon='code' />
              : props.article.category === 'back-end' ? <FontAwesomeIcon icon='database' />
              : <></>
          }
          <span className="ms-1 text-capitalize">{props.article.category}</span>
        </Card.Header>
        <Card.Body className="overflow-auto">
          <Card.Title className="fs-4 text-start">{props.article.context}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="info"
              size="sm"
              as="a"
              href={props.article.link}
              target="_blank"
              rel="noreferrer"
              className="w-100 me-auto"
            >
              <FontAwesomeIcon icon='link' color="white" />
            </Button>
            <Button
              variant="danger"
              size="sm"
              className="px-3"
              onClick={handleShow}
            >
              <FontAwesomeIcon icon='trash-can' />
            </Button>
          </Stack>
        </Card.Footer>
      </Card>
      <Modal show={show} onHide={handleClose} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Delete this article?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroupItem>
              <span className="text-muted">Category: </span>
              <span className="text-capitalize">{props.article.category}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span className="text-muted">Context: </span>
              {props.article.context}
            </ListGroupItem>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ArticleCard;