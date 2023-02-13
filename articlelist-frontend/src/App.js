import './App.css';
import '../node_modules/bootswatch/dist/darkly/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import FilterableList from './components/FilterableList/FilterableList';
import CreateForm from './components/CreateForm/CreateForm';

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column justify-content-between">
      <Header />
        <div className='my-4'>
          <Routes>
            <Route path='/' element={<FilterableList />} />
            <Route path='/articles' element={<FilterableList />} />
            <Route path='/articles/create' element={<CreateForm />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
