import React from 'react';
import { Row } from 'react-bootstrap';

import data from './assets/data.json';
import HornedBeast from './HornedBeasts';

class Main extends React.Component {


	render() {
		return (
			<main>
				{
					<Row xs={1} md={3}>;
						{data.map(element => {
							return (
								<HornedBeast
									title={element.title}

									image_url={element.image_url}
									description={element.description}
									showModal={this.props.showModal}
									modalData={this.props.modalData}
									

								/>
							);
						})}
					</Row>
				}

			</main>
		);
	}
}

export default Main;
