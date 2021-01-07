import GroupSearch from '../components/GroupSearch';
import GroupBox from '../components/GroupBox';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

setConfiguration({ gutterWidth: 20 });

function PageGroups() {
  const groupStyle={
    backgroundColor: "#c8e1ef"
  }
  const buttonStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px"
  }

  return (
    <div style={groupStyle}>
        <h1>Find Goals</h1>
        <GroupSearch/>
        <button style={buttonStyle}>+ Create a Goal</button>
        <Container>
          <Row>
            <Col sm={4}>
              <GroupBox/>
            </Col>
            <Col sm={4}>
              <GroupBox/>
            </Col>
            <Col sm={4}>
              <GroupBox/>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <GroupBox/>
            </Col>
            <Col sm={4}>
              <GroupBox/>
            </Col>
            <Col sm={4}>
              <GroupBox/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default PageGroups;