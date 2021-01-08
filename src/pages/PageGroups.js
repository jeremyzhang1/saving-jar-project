import GroupSearch from '../components/GroupSearch';
import GroupBox from '../components/GroupBox';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import {Helmet} from 'react-helmet';

const goalDetails = [
  {
  title: 'Trip to Disneyworld!',
  creator: 'John Smith',
  image: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/2/1440/540/75/dam/disney-world/admission/WDW_SWGE_1440x540.png?1605208793974',
  imageAlt: 'disney!',
  createDate: '1/17/2020',
  description: 'This is a description of the group. We all want to go to disneyland! Therefore, we should all really try really hard to save for disneyland. And like, we should also really encourage each other to save to go to disneyland. yeah. and im going to keep going on about diensy land. Go disney! ',
  users: users, 
  usersworking: users.length, //need to instead do completed
  userscompleted: 10,
},

{
  title: 'Rainy Day',
  creator: 'Jack Smith',
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhhsmedia.com%2F30175%2Fopinion%2Frain-is-underrated%2F&psig=AOvVaw2VXcnktysVAfoLxEUnKd57&ust=1610176845441000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC4p6nmi-4CFQAAAAAdAAAAABAI',
  imageAlt: 'rain!',
  createDate: '1/07/2020',
  description: 'You never really know when the sky is going to fall. Better to have some extra dough in the account. Who knows, you might even need it tomorrow. Or maybe you put so much into this account that you can just retire earlier. Year!',
  users: users, 
  usersworking: users.length, //need to instead do completed
  userscompleted: 12,
},

{
  title: 'Dream House',
  creator: 'Michael Phelps',
  image: 'https://www.google.com/url?sa=i&url=http%3A%2F%2F88designbox.com%2Ftag%2Fdream-house&psig=AOvVaw2S3RjhaDQNZA-OTuA2urwo&ust=1610176983476000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLijwOvmi-4CFQAAAAAdAAAAABAD',
  imageAlt: 'mansion',
  createDate: '1/25/2020',
  description: 'I want a mansion. If I save $x each month, I will, in fact, get that manion. Nothing more needs to be said.',
  users: users, 
  usersworking: users.length, //need to instead do completed
  userscompleted: 12,
},

{
  title: 'Wedding',
  creator: 'Princess Diana',
  image: 'https://images.squarespace-cdn.com/content/v1/5e8734078136f513e25d34c4/1587400261143-X4ICLQCW8N70J8PQ2FWQ/ke17ZwdGBToddI8pDm48kApm4bZ6Mn3TiUWou3kA3bp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWZaykogqWzieOupsqeSuBYug-y5Ut2InYZT1FrJD3yL-rj95DA1mjJIBxXFGHkuyQ/Beach+Wedding+Crim+Barefoot+Beach+Bride.jpg?format=2500w',
  imageAlt: 'beach wedding',
  createDate: '5/20/2019',
  description: 'Marriage is exciting! And expensive. Let’s all save for the greatest day of our lives together! ',
  users: users, 
  usersworking: users.length, //need to instead do completed
  userscompleted: 14,
},

{
  title: 'Roth IRA',
  creator: 'Steve Jobs',
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fool.com%2Finvesting%2F2021%2F01%2F07%2Fwhy-square-stock-jumped-on-thursday%2F&psig=AOvVaw25QcJHqTmANWF8nzez8Qlj&ust=1610177139935000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiC57Xni-4CFQAAAAAdAAAAABAD',
  imageAlt: 'Stocks',
  createDate: '3/4/2020',
  description: 'I dont know a lot about investing. All I know is that I can put $6,000 in each year. Lets work on that together so that we are all financially stable!',
  users: users, 
  usersworking: users.length, //need to instead do completed
  userscompleted: 492,
},

{
  title: 'PS5',
  creator: 'Andrew Jackson',
  image: 'https://images.pushsquare.com/35dc0becfde2e/ps5-playstation-5-stock-guide-1.900x.jpg',
  imageAlt: 'PS5',
  createDate: '11/20/2020',
  description: 'Its all the craze. Ready to sell my soul for this PS5. Are you?',
  users: users, 
  usersworking: users.length, //need to instead do completed
  userscompleted: 237,
},
]

setConfiguration({ gutterWidth: 30 });

function PageGroups() {
  const groupStyle={
    backgroundColor: "#c8e1ef",
    padding: "50px"
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