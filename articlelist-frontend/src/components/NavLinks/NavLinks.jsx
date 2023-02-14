import { Pagination } from "react-bootstrap";

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
		navLinks.push(<Pagination.First key="first" onClick={handleNavFirst} />);
	}
	if ("prev" in props.links) {
		navLinks.push(<Pagination.Prev key="prev" onClick={handleNavPrev} />);
	}
	if ("next" in props.links) {
		navLinks.push(<Pagination.Next key="next" onClick={handleNavNext} />);
	}
	if ("last" in props.links) {
		navLinks.push(<Pagination.Last key="last" onClick={handleNavLast} />);
	}

  return (
    <div>
      <Pagination className="d-flex justify-content-center">
        {navLinks}
      </Pagination>
    </div>
  );
}

export default NavLinks;