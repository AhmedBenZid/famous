import './App.css';
import NavBar from './Components/Home/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/Routes/PrivateRoutes';
import Dashboard from './Components/Admin/Dashboard';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAuthUser } from './JS/Actions/authActions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthUser())
  }, [])
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
