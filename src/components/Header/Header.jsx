import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

const muiTheme = getMuiTheme({
  mugshot: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    display: 'inline-block',
    alignContent: 'center'
  },
  raisedButton: {
    marginTop: '21px',
    float: 'right'
  }
});

const Header = () => (
  // <Row center="xs">
  <Row>
    <Col xs={12} sm={4} md={4} lg={4}>
      <h1> Phil Steinke </h1>
    </Col>
    <Col xs={12} sm={4} md={4} lg={4}>
      <Row center="xs">
        <img
          src={require(`../../images/philsteinke mugshot bw.png`)}
          alt="Phil Steinke"
          style={muiTheme.mugshot}
        />
      </Row>
    </Col>
    <Col xs={12} sm={4} md={4} lg={4}>
      <RaisedButton
        containerElement={<Link to="/contact" />}
        label="Get in touch"
        secondary
        style={muiTheme.raisedButton}
      />
    </Col>
  </Row>
);

export default Header;
