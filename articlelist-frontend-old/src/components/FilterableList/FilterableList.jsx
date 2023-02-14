import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import NavLinks from "./NavLinks";

function FilterableList() {

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

  const cards = articles.map(article => (
    <Card key={article._links.self.href} article={article} />
  ));

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center flex-wrap" style={{columnGap: '1rem'}}>
        {cards}
      </div>
      <NavLinks links={links} onNavigate={onNavigate} />
    </div>
  );
}

export default FilterableList;