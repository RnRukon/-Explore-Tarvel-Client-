

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';
import LoginToggle from './Components/Login/LoginToggle/LoginToggle';
import Dashboard from './Components/Dashboard/Dashboard'
import TravelsDetails from './Components/Home/Travelers/TravelsDetails/TravelsDetails';
import TravelPost from "./Components/Home/TravelPost/TravelPost";




function App() {

  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/travelsDetails/:id'>
              <TravelsDetails></TravelsDetails>
            </Route>
            <Route exact path='/login'>
              <LoginToggle />
            </Route>
            <Route exact path='/travelPost'>
              <TravelPost />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>

          </Switch>
        </Router>


      </AuthProvider>




    </div>
  );
}

export default App;
