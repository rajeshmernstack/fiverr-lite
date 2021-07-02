import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  );
}

export default App;
