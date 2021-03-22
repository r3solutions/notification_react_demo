import './App.css';
import Home from "./Home"
import Signup from "./Signup"
import Login from "./Login"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
