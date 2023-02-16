import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootswatch/dist/solar/bootstrap.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilterableListAndCreator from './components/FilterableList/FilterableListAndCreator';
import ScrollToTop from 'react-scroll-to-top';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faDatabase, faGrip, faLink, faPlus, faSearch, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function App() {

  library.add(faGrip, faSearch, faPlus, faDatabase, faCode, faTrashCan, faLink);

  return (
    <div className="App min-vh-100 d-flex flex-column justify-content-between">
      <Header />
      <FilterableListAndCreator />
      <ScrollToTop smooth color='white' style={{background: '#839496'}} />
      <Footer />
    </div>
  );
}

export default App;
