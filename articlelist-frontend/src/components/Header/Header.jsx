import { Button, Container, Navbar } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fs-2 d-flex align-items-center">
          <box-icon name='grid-horizontal' color='#ff9035' size='lg'></box-icon>
          <span className="ms-1" style={{color: '#ff9035'}}>Article</span>
          <span className="text-white">list</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button 
              variant="outline-info" 
              size="md"
              as="a"
              href="https://francisbernas.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Project Portfolio
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;