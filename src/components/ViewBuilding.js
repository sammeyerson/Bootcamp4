import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { selectedBuilding, data } = this.props;

		const buildDescript = (building) => {
			if (!building) {
				return (
					<>
						{' '}
						<i>Click on a name to view more information</i>
					</>
				);
			}
			return (
				<>
					Code: {building.code}
					<br/>
					Name: {building.name}
					<br/>
					Address: {building.address}
					<br/>
					Coordinates(Lat, Long): {building.coordinates && `${building.coordinates.latitude}, ${building.coordinates.longitude}`}
				</>
			)
		}

		return (
			<div>
					{buildDescript(data.find((building) => building.id === selectedBuilding))}
			</div>
		);
	}
}
export default ViewBuilding;
