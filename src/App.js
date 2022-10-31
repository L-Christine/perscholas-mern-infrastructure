import { useState } from 'react'
import AuthPage from './pages/AuthPage';
import NewOrderPage from './pages/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';

function App() {
  //state to hold the user data. null == not logged in
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      {user ? (
      <>
      <NavBar />
      <Routes>
        <Route path='/orders/new' element={<NewOrderPage />} />
        <Route path='/orders' element={<OrderHistoryPage />} />
      </Routes> 
      </>
      ): (<AuthPage />)
      }
    </div>
  );
}

export default App;