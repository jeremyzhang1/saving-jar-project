import GroupSearch from '../components/GroupSearch';
import GroupBox from '../components/GroupBox';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import {Helmet} from 'react-helmet';

const users = [
  { id: 1, percentage: 20 },
  { id: 2, percentage: 20 },
  { id: 3, percentage: 20 },
  { id: 4, percentage: 20 },
  { id: 5, percentage: 20 },
]

const goalDetails = [
  {
  id: 'first',
  title: 'Disneyworld',
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
  id: 'second',
  title: 'Rainy Day',
  creator: 'Jack Smith',
  image: 'https://hhsmedia.com/wp-content/uploads/2019/06/rain-3964186_960_720-900x600.jpg',
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
  image: 'http://88designbox.com/upload/2020/01/16/luxury-villa-by-whipple-russell-architects-50.jpg',
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
  image: 'https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/607635/why-square-stock-is-up.jpg&w=2000&op=resize',
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
              <GroupBox 
                title = {goalDetails[0].title}
                usersCompleted = {goalDetails[0].userscompleted}
                usersWorking = {goalDetails[0].usersworking}
                description = {goalDetails[0].description}
                imgsrc = {goalDetails[0].image}
              ></GroupBox>
            </Col>
            <Col sm={4}>
            <GroupBox 
                title = {goalDetails[1].title}
                usersCompleted = {goalDetails[1].userscompleted}
                usersWorking = {goalDetails[1].usersworking}
                description = {goalDetails[1].description}
                imgsrc = {goalDetails[1].image}
              ></GroupBox>
            </Col>
            <Col sm={4}>
            <GroupBox 
                title = {goalDetails[2].title}
                usersCompleted = {goalDetails[2].userscompleted}
                usersWorking = {goalDetails[2].usersworking}
                description = {goalDetails[2].description}
                imgsrc = {goalDetails[2].image}
              ></GroupBox>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            <GroupBox 
                title = {goalDetails[3].title}
                usersCompleted = {goalDetails[3].userscompleted}
                usersWorking = {goalDetails[3].usersworking}
                description = {goalDetails[3].description}
                imgsrc = {goalDetails[3].image}
              ></GroupBox>
            </Col>
            <Col sm={4}>
            <GroupBox 
                title = {goalDetails[4].title}
                usersCompleted = {goalDetails[4].userscompleted}
                usersWorking = {goalDetails[4].usersworking}
                description = {goalDetails[4].description}
                imgsrc = {goalDetails[4].image}
              ></GroupBox>
            </Col>
            <Col sm={4}>
            <GroupBox 
                title = {goalDetails[5].title}
                usersCompleted = {goalDetails[5].userscompleted}
                usersWorking = {goalDetails[5].usersworking}
                description = {goalDetails[5].description}
                imgsrc = {goalDetails[5].image}
              ></GroupBox>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default PageGroups;