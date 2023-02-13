import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();



  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <span className="navbar-brand fs-3">
          <span className="text-white">Article</span>
          <span className="text-danger">list</span>
        </span>
        <div className="d-flex">
          <button 
            className="btn btn-primary btn-lg me-3"
            onClick={() => {navigate('/articles')}}
          >
            Articles
          </button>
          <button 
            className="btn btn-outline-success btn-lg"
            onClick={() => {navigate('/articles/create')}}
          >
            New article
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;