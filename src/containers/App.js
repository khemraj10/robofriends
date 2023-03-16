import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
// import { robots } from './robots';
import './App.css';

// const state = {
// 	robots: robots,
// 	searchfield: '',
// }

class App extends Component {

	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(users => {
			// console.log(users);
			this.setState({ robots: users })
		})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (!this.state.robots.length) ? 
			<h1>Loading</h1> :
			(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={ filteredRobots } />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}

export default App;