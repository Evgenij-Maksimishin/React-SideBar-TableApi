import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Table from './pages/Table/Table';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/people" element={<Table />} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
