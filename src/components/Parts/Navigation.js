import React from 'react';
import {
  Input,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import InputAsync from './InputAsync';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark fixed="top" expand="md">
          <Container>
            <NavbarBrand href="/">
              <img
                src="https://intranet.byegm.gov.tr/images/logo/logo_header.png"
                alt="Logo"
                style={{ height: '30px' }}
              />
            </NavbarBrand>
            <InputAsync />
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="text-nowrap" nav caret>
                    Menü
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.props.menu.map((route, i) => (
                      <DropdownItem key={'menu' + i}>
                        <Link to={route.path}>{route.name}</Link>
                      </DropdownItem>
                    ))}

                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
