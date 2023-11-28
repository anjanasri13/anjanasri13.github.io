import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
   <>
   {/* <Header/> */}
        <Routes>
         <Route path='/' element={<Home/>}></Route>
        </Routes>
    </>
  );
}

export default App;
