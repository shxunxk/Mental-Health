import './App.css'
import LoginPage from './Pages/Login/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Login/Home/Home';

function App () {
  return (
    <Router>
        <Routes >
            <Route path="login">
              <Route index element={<LoginPage />} />
            </Route>
        </Routes>
        <Routes >
            <Route path="home">
              <Route index element={<Home />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;