import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import NavLinks from "../NavLinks/NavLinks";

function FilterableList(props) {

  const pageSize = 8;

  const [articles, setArticles] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {

    const fetchAllArticles = async () => {
      await axios.get(`http://localhost:8080/api/articlelist/articles?size=${pageSize}`)
        .then(res => {
          setArticles(res.data._embedded.articles);
          setLinks(res.data._links);
        })
        .catch(err => console.error(err));
    }
    fetchAllArticles();
  }, []);

  const onNavigate = (navUri) => {
    const fetchAllArticles = async () => {
      await axios.get(navUri)
        .then(res => {
          setArticles(res.data._embedded.articles);
          setLinks(res.data._links);
        })
        .catch(err => console.error(err));
    }
    fetchAllArticles();
  }

  const articleCards = articles.map(article => (
    <Card bg="light" style={{width: '17rem', height: '14rem'}}>
      <Card.Header>{article.category}</Card.Header>
      <Card.Body>
        <Card.Title>{article.description}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-success" size="sm">Edit</Button>
      </Card.Footer>
    </Card>
  ));


  return (
    <>
      <Container className="d-flex justify-content-center flex-wrap mt-5 mb-4" style={{rowGap: '1rem', columnGap: '1rem'}}>
        {articleCards}
      </Container>
      <NavLinks links={links} onNavigate={onNavigate} />
    </>
  );
}

export default FilterableList;