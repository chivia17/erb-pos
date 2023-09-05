import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Category from './pages/Category';
import Login from './pages/Login';
import POS from './pages/POS';
import Provider from './pages/Provider';
import AppProvider from './providers/app';

//Providers
import ProductProvider from './context/ProductContext';
import UserProvider from './context/UserContext';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <UserProvider>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<Layout />}>
                <Route path='/home' element={ <POS />} />
                <Route path='/category' element={<Category />} />
                <Route path='/provider' element={<Provider />} />
              </Route>
            </Routes>
          </ProductProvider>
        </UserProvider>
      </Router>
    </AppProvider>
  );
}
