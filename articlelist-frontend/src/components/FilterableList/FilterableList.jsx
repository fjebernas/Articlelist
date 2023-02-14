import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavLinks from "../NavLinks/NavLinks";
import ArticleCard from "./ArticleCard";
import SearchBar from "./SearchBar";

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

  const handleFilterTextChange = (text) => {
  }

  const articleCards = articles.map(article => (
    <ArticleCard key={article._links.self.href} article={article} />
  ));


  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md='6'>
          <SearchBar onChange={handleFilterTextChange} />
        </Col>
      </Row>
      <Row>
        <div className="d-flex justify-content-center flex-wrap my-4" style={{rowGap: '1rem', columnGap: '1rem'}}>
          {articleCards}
        </div>
      </Row>
      <Row className="justify-content-md-center">
        <Col md='6'>
          <NavLinks links={links} onNavigate={onNavigate} />
        </Col>
      </Row>
    </Container>
  );
}

export default FilterableList;