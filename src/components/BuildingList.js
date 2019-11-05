import React from 'react';

class BuilingList extends React.Component {
	render() {
		const { data, selectedUpdate, filter, removeWithId } = this.props;

		const buildingList = data.filter(b => !filter || (b.code.toLowerCase().includes(filter) || b.name.toLowerCase().includes(filter))).map(directory => {
			return (
				<tr key={directory.id}>
					<td onClick={e => selectedUpdate(directory.id)}>{directory.code}</td>
					<td onClick={e => selectedUpdate(directory.id)}>{directory.name}</td>
				</tr>
			);
		});

		return <>{buildingList}</>;
	}
}
export default BuilingList;
