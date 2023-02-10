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
		// console.log('1');
		// console.log('constructor');
	}

	componentDidMount() {
		// console.log('check');
		// this.setState({ robots: robots });
		// console.log('2');
		// console.log('componentDidMount');
		// fetch is a method on the window object
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			console.log(response);
			return response.json();
		})
		.then(users => {
			console.log(users)
			this.setState({ robots: users })
		})
	}

	onSearchChange = (event) => {
		// console.log(event.target.value)
		this.setState({ searchfield: event.target.value })
	}
	
	render() {
		// const { robots, searchfield } = this.state; we can remove all the this.state in the render()
		const filteredRobots = this.state.robots.filter(robot => {
			// console.log(robots)
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		// console.log(filteredRobots)
		// console.log('3');
		// console.log('render');
		// Turning if into tertinary operator
		// if (!this.state.robots.length) {
		// 	return <h1>Loading</h1>
		// } else {
		// 	return (
		// 		<div className="tc">
		// 			<h1 className="f1">RoboFriends</h1>
		// 			<SearchBox searchChange={this.onSearchChange} />
		// 			{/* <CardList robots={this.state.robots} /> */}
		// 			{/* <CardList robots={filteredRobots} /> */}
		// 			<Scroll>
		// 				<CardList robots={ filteredRobots } />
		// 			</Scroll>
		// 		</div>
		// 	);
		// }
		return (!this.state.robots.length) ? 
			<h1>Loading</h1> :
			(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					{/* <CardList robots={this.state.robots} /> */}
					{/* <CardList robots={filteredRobots} /> */}
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