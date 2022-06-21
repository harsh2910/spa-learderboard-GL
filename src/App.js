import React from 'react';
import './App.css';
import LeaderBoard from './Component/LeaderBoard';
import 'h8k-components';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
  } from "react-router-dom";
import Rank from './Component/Rank';
import Point from './Component/Point';
import Age from './Component/Age';
import Name from './Component/Name';
import data from './data.json';

const arr = data.list



const title = "SPA - LeaderBoard";

function App() {
	return (
		<Router>
			<h8k-navbar header={title}></h8k-navbar>
			<div style={{display:'flex', marginTop:'30px',justifyContent: 'center'}}>
			<div>
					<NavLink data-testid="route-rank" className="nav-link navbar-brand" to="/rank">Rank</NavLink>
					<NavLink data-testid="route-age" className="nav-link navbar-brand" to="/age">Age</NavLink>
					<NavLink data-testid="route-points" className="nav-link navbar-brand" to="/points">Points</NavLink>
					<NavLink data-testid="route-name" className="nav-link navbar-brand" to="/name">Name</NavLink>
				</div>
			</div>
			<Routes>
				<Route path="/" element={<LeaderBoard arr={arr} />} />
				<Route path='/age' element={<Age arr={arr} />} />
				<Route path='/points' element={<Point arr={arr} />} />
				<Route path='/rank' element={<Rank arr={arr} />} />
				<Route path='/name' element={<Name arr={arr} />} />			
			</Routes>
		</Router>

		
	);
}

export default App;
