import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavLinks from "../NavLinks/NavLinks";
import ArticleCard from "./ArticleCard";
import SearchBar from "./SearchBar";

function FilterableList(props) {

  useEffect(() => {
    props.fetchAllArticles(`http://localhost:8080/api/articlelist/articles?size=8`);
  }, []);

  const articleCards = props.articles.map(article => (
    <ArticleCard key={article._links.self.href} article={article} />
  ));


  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md='6'>
          <SearchBar onChange={() => {}} />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <div className="d-flex flex-wrap my-5" style={{width: '74rem', rowGap: '1rem', columnGap: '1rem'}}>
          {articleCards}
        </div>
      </Row>
      <Row className="justify-content-md-center">
        <Col md='6'>
          <NavLinks links={props.links} onNavigate={(navUri) => props.fetchAllArticles(navUri)} />
        </Col>
      </Row>
    </Container>
  );
}

export default FilterableList;