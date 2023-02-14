import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootswatch/dist/lumen/bootstrap.css';
import Header from './components/Header/Header';
import CreateFormModal from './components/CreateFormModal/CreateFormModal';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import FilterableList from './components/FilterableList/FilterableList';

function App() {

  const [isCreateFormModalShowing, setIsCreateFormModalShowing] = useState(false);

  return (
    <>
      <div className="App min-vh-100 d-flex flex-column justify-content-between">
        <Header onAddArticleButtonClick={() => setIsCreateFormModalShowing(true)} />
        <FilterableList />
        <Footer />
      </div>

      {/* modals */}
      <CreateFormModal 
        show={isCreateFormModalShowing} 
        onHide={() => setIsCreateFormModalShowing(false)} 
      />
    </>
    
  );
}

export default App;
