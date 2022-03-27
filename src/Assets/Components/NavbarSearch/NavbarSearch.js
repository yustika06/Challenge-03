import React from 'react'
import { Button, Container,Dropdown,DropdownButton,Form,FormControl,Nav,Navbar} from 'react-bootstrap'
import '../NavbarSearch/NavbarSearch.css'
import UIMG from '../../img/U.png'
import rectangle62 from '../../img/Rectangle 62.png'
import fi_menu from '../../img/fi_menu.png'

export const NavbarSearch = () => {
  return (
    <div>
    <Navbar  id='nav' expand="lg">
    <img src={fi_menu} id='menu'></img>
    <img src={rectangle62}></img>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <img src={UIMG} alt='logo-home'/>
        <DropdownButton id="dropdown" title="Unis Badri">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>

    </div>
  )
}
