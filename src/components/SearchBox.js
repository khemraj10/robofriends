import React from "react";

// searchfield is not used in upcoming videos because not needed in this component
const SearchBox = ({ searchChange }) => {
	return (
		<div className="pa2">
			<input 
				className="pa3 ba b--green bg-lightest-blue"
				type="search" 
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;