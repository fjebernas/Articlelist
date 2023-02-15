import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootswatch/dist/solar/bootstrap.css';
import Header from './components/Header/Header';
import CreateFormModal from './components/CreateFormModal/CreateFormModal';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import FilterableList from './components/FilterableList/FilterableList';
import axios from 'axios';
import { baseUrl } from './data/application.properties';

function App() {

  const [isCreateFormModalShowing, setIsCreateFormModalShowing] = useState(false);

  const [articles, setArticles] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchArticles(`${baseUrl}/articles?size=8`);
  }, []);

  const fetchArticles = async (uri) => {
    await axios.get(uri)
      .then(res => {
        setArticles(res.data._embedded.articles);
        setLinks(res.data._links);
      })
      .catch(err => console.error(err));
  }

  return (
    <>
      <div className="App min-vh-100 d-flex flex-column justify-content-between">
        <Header onAddArticleButtonClick={() => setIsCreateFormModalShowing(true)} />
        <FilterableList articles={articles} links={links} fetchArticles={fetchArticles} />
        <Footer />
      </div>

      {/* modals */}
      <CreateFormModal 
        show={isCreateFormModalShowing} 
        onHide={() => setIsCreateFormModalShowing(false)}
        fetchArticles={fetchArticles}
      />
    </>
    
  );
}

export default App;
