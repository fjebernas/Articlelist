import axios from "axios";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

function FilterableList() {

  const [pageSize, setPageSize] = useState(6);

  const [articles, setArticles] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {

    const fetchAllArticles = async () => {

      await axios.get(`http://localhost:8080/api/articlelist/articles?size=${pageSize}`)
        .then(res => {
          setArticles(res.data._embedded.articles);
          console.log(res.data._embedded.articles);
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
          console.log(res.data._embedded.articles);
          setLinks(res.data._links);
        })
        .catch(err => console.error(err));

    }

    fetchAllArticles();

  }

  const cards = articles.map(article => (
    <div key={article._links.self.href} className="card text-white bg-primary mb-3" style={{width: '20rem', height: '14rem'}}>
      <div className="card-header">{article.category}</div>
      <div className="card-body text-start fs-5">
        <a href={article.link} className="card-text text-decoration-none text-white" target="_blank" rel="noreferrer">
          {article.description}
        </a>
      </div>
      <div className="card-footer">
        <button className="btn btn-link btn-sm">Edit</button>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center flex-wrap" style={{columnGap: '10px'}}>
        {cards}
      </div>
      <NavLinks links={links} onNavigate={onNavigate} />
    </div>
  );
}

export default FilterableList;