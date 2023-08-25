import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/About';
import About from './pages/About';
import Events from './pages/events';
import Blogs from './pages/blogs';
import Register from './pages/Register/Register';
//import Cards from './component/cards/Cards';
import Signin from './pages/Signin/Signin';

function App() {
return (
	<div>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' element= {<About/>} />
		<Route path='/events' element={<Events/>}/>
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/Register' element={<Register/>} />
    <Route path='/Signin' element={<Signin/>}/>
	</Routes>
  
	</div>
 
);
}

export default App;
