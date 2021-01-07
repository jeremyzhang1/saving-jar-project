import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageHome from './pages/PageHome';
import PageGroups from './pages/PageGroups';
import PageGoal from './pages/PageGoal';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PageLogin} />
        <Route exact path="/home" component={PageHome} />
        <Route exact path="/groups" component={PageGroups} />
        <Route exact path="/goal" component={PageGoal} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
