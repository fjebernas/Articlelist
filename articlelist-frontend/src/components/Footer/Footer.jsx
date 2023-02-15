function Footer() {
  return (
    <footer className="mb-0 mt-auto py-3 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h5 className="pt-2 pb-2 fs-6">
              <span className='fw-light text-muted'>
                Articlelist by
              </span>
              <a
                href="https://github.com/fjebernas/Articlelist"
                className="text-decoration-none text-primary"
                target="_blank"
                rel="noreferrer">
                &nbsp;Francis Bernas
              </a>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;