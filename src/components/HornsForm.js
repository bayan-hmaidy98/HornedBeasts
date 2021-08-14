import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';


export class FilterForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			horns: this.props.Data
		};
		console.log(this.state.horns);
	}

	updateTheNumber = (event) => {
		console.log(event.target.value);
		const choosenNumber = event.target.value;
		if (choosenNumber !== 'All') {
			const showRequired = this.props.Data.filter(item => item.horns === parseInt(choosenNumber));
			this.setState({
				horns: showRequired
			});
			console.log(showRequired);
		}

		else {
			this.setState({
				horns: this.props.Data
			});
			console.log(this.state.horns);
		}
	}

	render() {
		return (
			<div>
				<Form.Select onChange={event => this.updateTheNumber(event)} aria-label="Floating label select example" name="select" >

					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
					<option value="100">One Hundred</option>
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
