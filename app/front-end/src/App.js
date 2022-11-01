import { Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';
import SellPage from './pages/SellPage';
import MyCars from './pages/MyCars';
import EditPage from './pages/EditPage';
import './styles/index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/register" element={ <LoginPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/sell" element={ <SellPage /> } />
      <Route path="/mycars" element={ <MyCars /> } />
      <Route path="/mycars/edit/:id" element={ <EditPage /> } />
    </Routes>
  );
}

export default App;
