import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootswatch/dist/solar/bootstrap.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilterableListAndCreator from './components/FilterableList/FilterableListAndCreator';

function App() {
  return (
    <>
      <div className="App min-vh-100 d-flex flex-column justify-content-between">
        <Header />
        <FilterableListAndCreator />
        <Footer />
      </div>
    </>
    
  );
}

export default App;
