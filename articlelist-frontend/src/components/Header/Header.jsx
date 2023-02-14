import { Button, Container, Navbar } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fs-2">
          <span className="text-white">Article</span>
          <span className="text-info">list</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button 
              variant="success" 
              size="md" 
              onClick={() => props.onAddArticleButtonClick()}
            >
              Add article
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;