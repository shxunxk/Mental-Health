import './App.css'
import LoginPage from './Pages/Login/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/Login/SignIn';
import Connection from './Pages/Connections/Connection';
import FindAPeer from './Pages/FindAPeer/FindAPeer';
import Peer from './Pages/FindAPeer/Peer';
function App () {
  return (
    <Router>
      {/* <Navbar/> */}
        <Routes >
            <Route path="login">
              <Route index element={<LoginPage />} />
            </Route>
            <Route path="signin">
              <Route index element={<SignIn />} />
            </Route>
        </Routes>
        <Routes >
            <Route path="home">
              <Route index element={<Home />} />
            </Route>
        </Routes>
        <Routes >
            <Route path="connections">
              <Route index element={<Connection />} />
            </Route>
        </Routes>
        <Routes >
            <Route path="find-a-peer">
              <Route index element={<FindAPeer />} />
              <Route path=":id" element={<Peer/>}/>
            </Route>
        </Routes>
        <Routes >
            <Route path="support-groups">
              <Route index element={<FindAPeer />} />
              <Route path=":id" element={<Peer/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;