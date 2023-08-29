import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import AppProvider from './providers/app';

//Providers
import UserProvider from './context/UserContext';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/home' element={<Home />}></Route>
          </Routes>
        </UserProvider>
      </Router>
    </AppProvider>
  );
}
