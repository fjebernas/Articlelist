import { Form, InputGroup } from "react-bootstrap";

function SearchBar(props) {

  const handleChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <div className="form-outline w-100">
      <div className="input-group mt-1">
        <InputGroup>
          <InputGroup.Text id="search" className="bg-primary">
            <box-icon name='search-alt' color='white'></box-icon>
          </InputGroup.Text>
          <Form.Control
            id="search"
            placeholder="Filter articles by keywords ..."
            onChange={handleChange}
            autoComplete='off'
          />
        </InputGroup>
        {/* <input
          type="search"
          id="search" 
          className="form-control form-control-lg rounded"
          placeholder="Filter articles by keywords ..."
          onChange={handleChange}
          autoComplete='off'
        /> */}
      </div>
    </div>
  );
}

export default SearchBar;