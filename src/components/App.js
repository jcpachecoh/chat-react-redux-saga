import React, { Component } from 'react';
import './App.css';
import { SidebarContainer } from '../containers/SideBar';
import { MessagesList } from '../containers/MessagesList';
import { AddMessage } from '../containers/AddMessage';
import Header from './Header';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div id="container">
					<SidebarContainer />
					<section id="main">
						<MessagesList />
						<AddMessage />
					</section>
				</div>
			</div>
		);
	}
}

export default App;
