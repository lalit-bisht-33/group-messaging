import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import {Main} from "./pages/main/main";
import {Login} from "./pages/login";
import {Navbar} from "./components/navbar";
import {Createpost} from "./pages/create-post/createpost";

function App() {
  return (
    <div className="App">
      <Router> {/*allowing your app to respond to changes in the URL. */}
        <Navbar/>  {/* Navbar should be always there*/}
        <Routes>{/*used to define all the possible routes in your application. */}
          <Route path='/' element={<Main/>}/>      {/* render the main when path is match (element)*/}
          <Route path='/login' element={<Login/>} />
          <Route path='/createpost' element={<Createpost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
