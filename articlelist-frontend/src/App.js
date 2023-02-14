import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import CreateFormModal from './components/CreateFormModal/CreateFormModal';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {

  const [isCreateFormModalShowing, setIsCreateFormModalShowing] = useState(false);

  return (
    <div className="App bg-secondary min-vh-100 d-flex flex-column justify-content-between">
      <Header onAddArticleButtonClick={() => setIsCreateFormModalShowing(true)} />





      <Footer />

      {/* modals */}
      <CreateFormModal 
        show={isCreateFormModalShowing} 
        onHide={() => setIsCreateFormModalShowing(false)} 
      />
    </div>
  );
}

export default App;
