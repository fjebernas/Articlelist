function Card(props) {
  return (
    <div className="card text-white bg-primary mb-3" style={{width: '17rem', height: '17rem'}}>
      <div className="card-header">{props.article.category}</div>
      <div className="card-body text-start fs-5">
        <a href={props.article.link} className="card-text text-decoration-none text-white" target="_blank" rel="noreferrer">
          {props.article.description}
        </a>
      </div>
      <div className="card-footer">
        <button className="btn btn-link btn-sm">Edit</button>
      </div>
    </div>
  );
}

export default Card;