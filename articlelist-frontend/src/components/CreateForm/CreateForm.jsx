import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../common/InputText";

function CreateForm() {

  const navigate = useNavigate();

  const [article, setArticle] = useState({
    description: '',
    category: '',
    keywords: '',
    link: ''
  });

  const handleDescriptionChange = (value) => {
    setArticle({...article, description: value});
  }

  const handleCategoryChange = (value) => {
    setArticle({...article, category: value});
  }

  const handleKeywordsChange = (value) => {
    setArticle({...article, keywords: value});
  }

  const handleLinkChange = (value) => {
    setArticle({...article, link: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8080/api/articlelist/articles`, article)
      .then(() => {
        navigate('/articles');
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">Add Article</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <InputText
                  name='description'
                  onChange={handleDescriptionChange}
                  placeholder='e.g. Things that make an API powerful'
                />
                <InputText
                  name='category'
                  onChange={handleCategoryChange}
                  placeholder='e.g. back-end'
                />
                <InputText
                  name='keywords'
                  onChange={handleKeywordsChange}
                  placeholder='e.g. spring java api'
                />
                <InputText
                  name='link'
                  onChange={handleLinkChange}
                  placeholder='e.g. https://example.com'
                />
                <button
                  type="submit"
                  className=" btn btn-lg btn-success w-100"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;