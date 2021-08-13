import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

export class FilterForm extends Component {

	submittedNumber = (event) => {
		// event.preventDefault();
		this.setState ({
			num: event.target.value
		});
		console.log(event);
		this.props.updateTheNumber(this.setState.num);
	};


	
	render() {
		return (
			<div>
				<Form.Select onChange= {this.submittedNumber} aria-label="Floating label select example" name ="select" >
				
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
					<option value="All">All</option>
					{/* <Button variant="primary" type="submit">
						Submit
					</Button> */}
				</Form.Select>
			</div>
		);
	}
}

export default FilterForm;
