import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './Components/Pages/About-Us/AboutUs';
import ContactUs from './Components/Pages/Contact-Us/ContactUs';
import Packs from './Components/Pages/Packs/Packs';
import Dashboard from './Components/Pages/UserDashboard.js/Dashboard';
import { getAuthUser } from './JS/Actions/authActions';
import PrivateRoute from './Components/Routes/PrivateRoute';
import Gallery from './Components/Pages/Gallery/Gallery';
import Catgegory from './Components/Pages/Gallery/Category';
import Album from './Components/Pages/Gallery/Album';
// import Dashboard from './Components/Admin/Dashboard.js'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthUser())
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <PrivateRoute path="/packs" component={Packs} />
          <Route exact path='/gallery/:title' component={Album} />
          <Route path="/gallery" component={Gallery} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
