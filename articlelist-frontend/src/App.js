import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import CreateFormModal from './components/CreateFormModal/CreateFormModal';
import { useState } from 'react';

function App() {

  const [isCreateFormModalShowing, setIsCreateFormModalShowing] = useState(false);

  return (
    <div className="App">
      <Header onAddArticleButtonClick={() => setIsCreateFormModalShowing(true)} />

      <CreateFormModal 
        show={isCreateFormModalShowing} 
        onHide={() => setIsCreateFormModalShowing(false)} 
      />
    </div>
  );
}

export default App;
