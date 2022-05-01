import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Systems from './Components/Systems';
import Faults from './Components/Faults';
import Security from './Components/Security';
import Traffic from './Components/Traffic';


function App() {
  return (
    <div>
       <Router>
           <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/systems' component={Systems}></Route>
              <Route exact path='/faults' component={Faults}></Route>
              <Route exact path='/security' component={Security}></Route>
              <Route exact path='/traffic' component={Traffic}></Route>
            </Switch>
          </div>
       </Router>
    </div>
  );
}

export default App;