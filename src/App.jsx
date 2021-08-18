import logo from './logo.svg';
import './App.css';
import Signup from './Signin';
import Login from './Login';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
function App(){
  return(
    <>
    <div className="app">
    <BrowserRouter>
    <Switch>
      <Route exact path="/signup" exact component={Signup} />
      <Route exact path="/login" exact component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App;