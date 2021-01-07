import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageHome from './pages/PageHome';
import PageDashboard from './pages/PageDashboard';
import PageGroups from './pages/PageGroups';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PageLogin} />
        <Route exact path="/home" component={PageHome} />
        <Route exact path="/dashboard" component={PageDashboard} />
        <Route exact path="/groups" component={PageGroups} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
