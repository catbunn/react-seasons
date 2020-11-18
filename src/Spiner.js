import React from 'react';

const Spiner = (props) => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">
			{props.message}
			</div>
		</div>

		);
};

//if a message its not specified this will render
Spiner.defaultProps = {
	message: 'Loading...'
};

export default Spiner;