import React from "react";
import GroupPreview from '../components/GroupPreview';
import { Container, Row, Col } from 'react-grid-system';

class GroupBox extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <h2>Group Title</h2>
            <GroupPreview/>
          </Col>
          <Col sm={4}>
            <h2>Group Title</h2>
            <GroupPreview/>
          </Col>
          <Col sm={4}>
            <h2>Group Title</h2>
            <GroupPreview/>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h2>Group Title</h2>
            <GroupPreview/>
          </Col>
          <Col sm={4}>
            <h2>Group Title</h2>
            <GroupPreview/>
          </Col>
          <Col sm={4}>
            <h2>Group Title</h2>
            <GroupPreview/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GroupBox;