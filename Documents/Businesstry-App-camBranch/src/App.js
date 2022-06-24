import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute'
import ForgotPassword from './auth/ForgotPassword'
import UpdateProfile from './auth/UpdateProfile'
import Signup from "./auth/Signup";
import Profile from "./auth/Profile"
import Login from './auth/Login'
import Dashboard from './pages/Dashboard'
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';


function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar/>
          <Switch>
            <PrivateRoute path="/user" component={Profile}></PrivateRoute>
            <PrivateRoute path="/update-profile" component={UpdateProfile}></PrivateRoute>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute exact path="/" component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
