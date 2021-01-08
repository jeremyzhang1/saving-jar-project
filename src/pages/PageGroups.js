import GroupSearch from '../components/GroupSearch';
import GroupBox from '../components/GroupBox';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import {Helmet} from 'react-helmet';


setConfiguration({ gutterWidth: 30 });

function PageGroups() {
  const groupStyle={
    backgroundColor: "#c8e1ef"
  }
  const createButtonStyle = {
    backgroundColor: "#0e71a9",
    color: "#ffffff",
    fontSize: 16,
    height: 30,
    width: 160,
    borderRadius: "20px",
    marginBottom: "10px"
  }

  return (
    <div style={groupStyle}>
      <Helmet>
          <style>{'body { background-color: #C8E1EF; }'}</style>
      </Helmet>
      
        <h1>Find Goals</h1>
        <GroupSearch/>
        <button style={createButtonStyle}>+ Create a Goal</button>
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