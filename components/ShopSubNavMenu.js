import React from 'react';
import Link from 'next/link';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class ShopSubNavMenu extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: 'tshirts'
        };
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

      render() {
        return (
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'tshirts' })}
                  onClick={() => { this.toggle('tshirts'); }}>
                    T-Shirts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'hats' })}
                  onClick={() => { this.toggle('hats'); }}>
                  Hats
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="tshirts">
                <Row>
                  <Col sm="12">
                  <Card body>
                      <CardTitle>Custom T-Shirts</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="hats">
                <Row>
                  <Col>
                    <Card body>
                      <CardTitle>Custom Hats</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            <style global jsx>{`
                .nav-tabs .nav-link {
                    background-color: #fff;
                    border-radius: 0;
                    cursor: pointer;
                    margin-right: .1rem;
                    opacity: .7;
                }
                .nav-tabs .nav-link.active {
                    opacity: 1;
                }
                .card {
                    border: none;
                    border-radius: 0;
                }
            `}</style>
          </div>
        );
    }
}