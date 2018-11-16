import React from 'react';
import PropTypes from 'prop-types';

const inputStyle = {
	fontSize: '16px'
};
const AddMessage = (props) => {
	let input;

	return (
		<section id="new-message" className={'section__input'}>
			<input
				style={inputStyle}
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						props.dispatch(input.value, 'Me');
						input.value = '';
					}
				}}
				type="text"
				ref={(node) => {
					input = node;
				}}
				className={'form__field'}
			/>
		</section>
	);
};

AddMessage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default AddMessage;
