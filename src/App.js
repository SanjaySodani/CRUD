import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';
import EditUser from './EditUser';
import CreateUser from './CreateUser';
import Users from './Users';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Dashboard/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/create-user' element={<CreateUser/>} />
        <Route exact path='/edit-user/:id' element={<EditUser/>} />
      </Routes>
    </Router>
  );
}

export default App;