import { Button, Card, Col, Container, Row } from "react-bootstrap";

function ArticleCard(props) {

  const handleDelete = () => {
    props.onDelete(props.article._links.self.href);
  }

  return (
    <Card bg="light" style={{width: '17rem', height: '14rem'}}>
      <Card.Header className="text-secondary fw-bold">{props.article.category}</Card.Header>
      <Card.Body>
        <Card.Title className="text-primary fs-4 text-start">{props.article.context}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Container fluid>
          <Row>
            <Col xs={8} className='p-0'>
              <Button
                variant="info"
                size="sm"
                as="a"
                href={props.article.link}
                target="_blank"
                rel="noreferrer"
                className="me-2 w-100"
              >
                Source
              </Button>
            </Col>
            <Col xs={4} className='p-0'>
              <Button variant="danger" size="sm" className="me-2 w-75" onClick={handleDelete}>Delete</Button>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default ArticleCard;