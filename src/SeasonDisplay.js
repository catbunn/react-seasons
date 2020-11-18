import './SeasonDisplay.css';
import React from 'react';

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const {message, iconName} = seasonConfig[season];

	return ( 
		<div className= {`season-display ${season}`} >
		<i className={`icon-left massive ${iconName} icon`} />
		<h1> {message} </h1>
		<i className= {`icon-right massive ${iconName} icon`} />
		</div>
		);
};

const seasonConfig = {
	summer: {
		message: 'Lets hit the beach',
		iconName:'sun'
	},
	winter: {
		message: 'Burr, it is cold!',
		iconName:'snowflake'
	}
};

const getSeason = (lat, month) =>{
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer': 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}

};




export default SeasonDisplay;
