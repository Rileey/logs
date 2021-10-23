import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import ActiveLogs from './ActiveLogs';
import ArchivedLogs from './ArchivedLogs';
import ExpiringLogs from './expiringlogs';
import './components/FontAwesomeIcons/fontAwesomIcons'

function App() {



  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/activelogs">
          <ActiveLogs />
        </Route> 
        <Route exact path="/archivedlogs">
          <ArchivedLogs />
        </Route>
        <Route exact path="/expiringlogs">
          <ExpiringLogs />
        </Route>
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
