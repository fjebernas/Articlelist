import { Button, Card } from "react-bootstrap";

function ArticleCard(props) {
  return (
    <Card bg="light" style={{width: '17rem', height: '14rem'}}>
      <Card.Header>{props.article.category}</Card.Header>
      <Card.Body>
        <Card.Title
          as='a'
          href={props.article.link}
          className="text-decoration-none fs-4"
        >
          {props.article.description}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-success" size="sm">Edit</Button>
      </Card.Footer>
    </Card>
  );
}

export default ArticleCard;