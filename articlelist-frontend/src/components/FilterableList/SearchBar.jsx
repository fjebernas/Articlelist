function SearchBar(props) {

  const handleChange = (e) => {
    props.handleChange(e.target.value);
  }

  return (
    <div className="form-outline w-100">
      <div className="input-group">
        <input
          type="search"
          id="search" 
          className="form-control form-control-lg rounded-0 rounded-start"
          placeholder="Filter articles by keywords ..."
          onChange={handleChange}
          autoComplete='off'
        />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;