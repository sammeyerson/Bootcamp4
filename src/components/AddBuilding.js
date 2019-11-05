import React from 'react';

class AddABuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            name: "",
            address: "",
            latitude: "",
            longitude: "",
            showAdd: false,
            flash: <></>
        }
    }

    submitForm = (e) => {
        const {code, name, address, latitude, longitude} = this.state;
        const {data, updateData} = this.props;
        this.setState({flash: <></>});
        if (name === "" || code === "") {
            this.setState({flash: <div>
                Please provide a code and a name
            </div>})
        } else {
            const id = Math.max(...data.map((building) => building.id))+1;
            const newBuilding = {
                id,
                name,
                address,
                code,
                coordinates: {
                    latitude,
                    longitude
                }
            }
            updateData([...data, newBuilding]);
            this.setState({
                code: "",
                name: "",
                address: "",
                latitude: "",
                longitude: "",
                showAdd: false,
            })
        }
    }

    render () {
        const {showAdd, flash} = this.state;

        if (!showAdd) {
            return (
                <div>
                    <button onClick={e => this.setState({showAdd: true})} style={{alignItems:'center', backgroundColor: 'lightgray', color:'black'}}>
                        Add New Building
                    </button>
                </div>
            );
        }

        return (

            <div>
                {flash}
                <div>
                    <label>
                      Code:
                    </label>
                    <input value={this.state.code} onChange={e => this.setState({code: e.target.value})}/>
                </div>
                <div>
                    <label>
                      Name:
                    </label>
                    <input value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                </div>
                <div>
                    <label>
                      Address:
                    </label>
                    <input value={this.state.address} onChange={e => this.setState({address: e.target.value})}/>
                </div>
                <div>
                    <label>
                      Latitude:
                    </label>
                    <input value={this.state.latitude} onChange={e => this.setState({latitude: e.target.value})}/>
                </div>
                <div>
                    <label>
                      Longitude:
                    </label>
                    <input value={this.state.longitude} onChange={e => this.setState({longitude: e.target.value})}/>
                </div>
                <button onClick={this.submitForm} style={{color:'black'}}>Add</button>
                <button onClick={e => this.setState({showAdd: false})} style={{color:'black'}}>Cancel</button>
            </div>


        );
    }
}

export default AddABuilding;
