import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const Sidebar = ({ users }) => (
	<aside id="sidebar" className="sidebar">
		<ul>
			{users.map((user) => (
				<li key={user.name}>
					<Label as="a" image>
						<img
							src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
							alt={user.name}
						/>
						{user.name}
					</Label>
				</li>
			))}
		</ul>
	</aside>
);

Sidebar.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

export default Sidebar;
