import './App.css';
import NavBar from './Components/Home/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/Routes/PrivateRoutes';
import Dashboard from './Components/Admin/Dashboard';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAuthUser } from './JS/Actions/authActions';
import ListUsers from './Components/Admin/ListUsers';
import AdminRoute from './Components/Routes/AdminRoutes';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthUser())
  }, [])
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <AdminRoute path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
