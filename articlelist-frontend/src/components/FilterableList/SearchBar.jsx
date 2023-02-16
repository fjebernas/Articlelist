function SearchBar(props) {

  const handleChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <div className="form-outline w-100">
      <div className="input-group">
        <input
          type="search"
          id="search" 
          className="form-control form-control-lg rounded"
          placeholder="Filter articles by keywords ..."
          onChange={handleChange}
          autoComplete='off'
        />
      </div>
    </div>
  );
}

export default SearchBar;