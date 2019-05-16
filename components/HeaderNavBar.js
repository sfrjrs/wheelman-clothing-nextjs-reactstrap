import React from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class HeaderNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    return (
        <div>
            <Navbar id="hdrNav" color="dark" dark fixed="top" expand="md">
                <Link href="/">
                    <NavbarBrand href="/" className="mr-auto">
                        <img className="hdr-logo" src="/static/logos/wheelman_opt_web.jpg" alt="wheelman clothing logo" />
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={this.toggleNavbar} role="button" aria-label="Navigation Menu Toggle" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <Link href="/">
                                <NavLink href="/">Home</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/about">
                                <NavLink href="/about">About</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/shop">
                                <NavLink href="/shop">Shop</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <style jsx>{`
                .hdr-logo {
                    max-height: 3rem;
                }
            `}</style>
        </div>
    );
  }
}