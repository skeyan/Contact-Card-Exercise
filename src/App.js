/*
	Eva Yan
	January 7 2020
	CUNY 2X/TTP BOOTCAMP
*/

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class ContactCardComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class="card-container">
				<div class="card">
					<p><b>Name: </b>{this.props.name}</p>
					<p><b>Mobile: </b>{this.props.mobile}</p>
					<p><b>Work: </b>{this.props.work}</p>
					<p><b>Email: </b>{this.props.email}</p>
				</div>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<h1>Contact Cards in React!</h1>
				<ContactCardComponent />
				<ContactCardComponent name="Yev" mobile="646-333-6666" work="212-222-3333" email="yev@cleric.com" />
				<ContactCardComponent name="Artagan" mobile="646-333-2222" work="212-333-3333" email="artagan@wizard.com" />
				<ContactCardComponent name="Mook" mobile="646-333-1111" work="212-323-5555" email="mook@cleric.com" />
			</div>
		);
	}
}

ContactCardComponent.propTypes = {
	name: PropTypes.string,
	mobile: PropTypes.string,
	work: PropTypes.string.isRequired,
	email:PropTypes.string
}

ContactCardComponent.defaultProps = {
	name: "Jace Murphy",
	mobile: "646-432-3232",
	work: "212-452-2323",
	email: "jmurphy@company.com"
}

export default App;
