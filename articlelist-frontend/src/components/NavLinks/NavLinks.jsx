function NavLinks(props) {

  const handleNavFirst = (e) => {
    e.preventDefault();
    props.onNavigate(props.links.first.href);
  }

  const handleNavPrev = (e) => {
    e.preventDefault();
    props.onNavigate(props.links.prev.href);
  }

  const handleNavNext = (e) => {
    e.preventDefault();
    props.onNavigate(props.links.next.href);
  }

  const handleNavLast = (e) => {
    e.preventDefault();
    props.onNavigate(props.links.last.href);
  }

  const navLinks = [];

  if ("first" in props.links) {
		navLinks.push(<button className="btn btn-warning btn-sm mx-1" key="first" onClick={handleNavFirst}>First</button>);
	}
	if ("prev" in props.links) {
		navLinks.push(<button className="btn btn-warning btn-sm mx-1" key="prev" onClick={handleNavPrev}>Prev</button>);
	}
	if ("next" in props.links) {
		navLinks.push(<button className="btn btn-warning btn-sm mx-1" key="next" onClick={handleNavNext}>Next</button>);
	}
	if ("last" in props.links) {
		navLinks.push(<button className="btn btn-warning btn-sm mx-1" key="last" onClick={handleNavLast}>Last</button>);
	}

  return (
    <div>
      {navLinks}
    </div>
  );
}

export default NavLinks;