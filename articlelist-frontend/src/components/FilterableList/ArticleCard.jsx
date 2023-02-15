import { Button, Card } from "react-bootstrap";

function ArticleCard(props) {

  return (
    <Card bg="light" style={{width: '17rem', height: '14rem'}}>
      <Card.Header className="text-secondary fw-bold">{props.article.category}</Card.Header>
      <Card.Body>
        <Card.Title className="text-primary fs-4 text-start">{props.article.context}</Card.Title>
      </Card.Body>
      <Card.Footer
        as='a'
        target='_blank'
        href={props.article.link}
        rel='noreferrer'
        className="text-info fs-6"
      >
        Follow link
      </Card.Footer>
    </Card>
  );
}

export default ArticleCard;