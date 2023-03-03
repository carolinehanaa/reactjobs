import logo from './logo.svg';
import './App.css';
import  Home  from './components/pages/Home'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import JobOne from './components/pages/JobOne';
import JobTwo from './components/pages/JobTwo';
import JobThree from './components/pages/JobThree';
import JobFour from './components/pages/JobFour';
import JobFive from './components/pages/JobFive';

function App() {
  return (
    <div className="App">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />

      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="JobOne" element={<JobOne />} />
                <Route path="JobTwo" element={<JobTwo/>} />
                <Route path="JobThree" element={<JobThree/>} />
                <Route path="JobFour" element={<JobFour/>} />
                <Route path="JobFive" element={<JobFive/>} />
                {/* <Route path="sayhello" element={<SayHello />} /> */}

                {/* Using path="*"" means "match anything", so this route
                      acts like a catch-all for URLs that we don't have explicit
                      routes for. */}
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
        </BrowserRouter>      
    </div>
  );
}

function Layout() {
  return (
    <Container bg="light" >
    <Navbar  variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Jobs that Interest me</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/JobOne">JobOne</Link>
        <Link to="/JobTwo">JobTwo</Link>
        <Link to="/JobThree">JobThree</Link>
        <Link to="/JobFour">JobFour</Link>
        <Link to="/JobFive">JobFive</Link>

      </Container>
    </Navbar>
    <Outlet />
  </Container>
  )}

export default App;
