import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Flip, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "../../data/application.properties";
import { toastError, toastSuccess } from "../../utils/utilities";
import CreateFormModal from "../CreateFormModal/CreateFormModal";
import NavLinks from "../NavLinks/NavLinks";
import ArticleCard from "./ArticleCard";
import SearchBar from "./SearchBar";

function FilterableListAndCreator(props) {

  const pageSize = 8;
  const articlesFromTheStartUri = `${baseUrl}/articles?size=${pageSize}`;

  const [articles, setArticles] = useState([]);
  const [links, setLinks] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    fetchArticles(articlesFromTheStartUri);
  }, [articlesFromTheStartUri]);

  const fetchArticles = async (uri) => {
    await axios.get(uri)
      .then(res => {
        setArticles(res.data._embedded.articles);
        setLinks(res.data._links);
        setTotalArticles(res.data.page.totalElements);
      })
      .catch(err => console.error(err));
  }

  const handleDelete = (uri) => {
    axios.delete(uri)
      .then(() => {
        toastSuccess(`Article deleted!`);
        fetchArticles(articlesFromTheStartUri);
      })
      .catch(err => {
        toastError(`Can't delete article!`);
        console.error(err)
      });
  }

  const articleCards = articles.map(article => (
    <ArticleCard
      key={article._links.self.href}
      article={article}
      onDelete={handleDelete}
    />
  ));

  const [isCreateFormModalShowing, setIsCreateFormModalShowing] = useState(false);

  const [newArticle, setNewArticle] = useState({
    context: "",
    category: "",
    link: ""
  });
  
  const onCreateFormSubmit = () => {
    axios.post(`${baseUrl}/articles`, newArticle)
      .then(() => {
        setIsCreateFormModalShowing(false);
        setNewArticle({context: "", category: "", link: ""});
        toastSuccess(`Article created!`);
        fetchArticles(articlesFromTheStartUri);
      })
      .catch(err => {
        toastError(`Can't create article!`);
        console.error(err)
      });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />

      <CreateFormModal 
        show={isCreateFormModalShowing}
        onHide={() => {
          setIsCreateFormModalShowing(false);
          setNewArticle({context: "", category: "", link: ""});
        }}
        onContextChange={value => {setNewArticle({...newArticle, context: value})}}
        onCategoryChange={value => {setNewArticle({...newArticle, category: value})}}
        onLinkChange={value => {setNewArticle({...newArticle, link: value})}}
        onSubmit={onCreateFormSubmit}
      />

      <Container className="mt-4 mb-5">
        <Row className="justify-content-md-center mb-3">
          <Col md='6' className="d-flex justify-content-center">
            <Button
              size="lg"
              variant="warning"
              onClick={() => setIsCreateFormModalShowing(true)}
            >
              <FontAwesomeIcon icon='plus' color="white" />
              <span className="ms-1">Article</span>
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md='6'>
            <SearchBar
                onChange={value => {
                  value.length > 0 ? fetchArticles(`${baseUrl}/articles/search/findByContextContaining?infix=${value}&size=${pageSize}`)
                                  : fetchArticles(articlesFromTheStartUri);
                }
              }
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center" >
          <div className="d-flex justify-content-md-start justify-content-center flex-wrap mt-5 mb-4" style={{width: '74rem', minHeight: '464px', rowGap: '1rem', columnGap: '1rem'}}>
            {
              articleCards.length > 0 ? articleCards 
                                      : <p className="w-100 text-center text-muted fs-3 fst-italic">No articles</p>
            }
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col md='6'>
            <p className="text-muted text-center fst-italic">Total of {totalArticles} articles</p>
            <NavLinks links={links} onNavigate={(navUri) => fetchArticles(navUri)} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FilterableListAndCreator;