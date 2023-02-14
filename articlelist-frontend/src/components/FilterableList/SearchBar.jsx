import { Container } from "react-bootstrap";

function SearchBar(props) {

  const handleChange = (e) => {
    props.handleChange(e.target.value);
  }

  return (
    <div className="input-group">
      <div className="form-outline w-100">
        <input
          type="search"
          id="search" 
          className="form-control rounded-0 rounded-start"
          placeholder="Type to filter articles ..."
          onChange={handleChange}
          autoComplete='off'
        />
      </div>
    </div>
  );
}

export default SearchBar;