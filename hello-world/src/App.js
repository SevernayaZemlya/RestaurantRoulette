import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}><code>&lt;{'Sidebar Content'} /&gt;</code></Col>
            <Col xs={12} md={8}><code>&lt;{'Main Content'} /&gt;</code></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
