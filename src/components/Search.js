import React from 'react';

class Search extends React.Component {
	filterUpdate(v) {
		//Here you will need to update the value of the filter with the value from the textbox
		this.props.filterUpdate(v)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value

		return (
			<form >
				<input style={{backgroundColor:'lightgray'}} type="text" onChange={choice => this.filterUpdate(choice.target.value)} placeholder="Search for a building" />
			</form>
		);
	}
}
export default Search;
