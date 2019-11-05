import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddABuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data:props.data
    };
  }

  filterUpdate=(value)=> {
    this.setState({filterText: value.toLowerCase()});
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate=(id)=> {
    this.setState({selectedBuilding: id});
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

  removeWithId = (id) => {
    const newData = this.state.data.filter((dd) => dd.id !== id);
    this.setState({data: newData});
  }

  updateData = (newData) => {
    this.setState({data: newData});
  }


  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1 style={{ textAlign: "center"}}>UF Directory Application</h1>
        </div>

        <Search filterUpdate={this.filterUpdate}/>
        <AddABuilding
        data={this.state.data}
        updateData={this.updateData}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code</b>
                    </td>
                    <td>
                      <b>Building Name</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filter={this.state.filterText}
                    removeWithId={this.removeWithId}
                    selectedUpdate={this.selectedUpdate}
                  />
                </table>
              </div>
            </div>
            <div>
              <ViewBuilding
              selectedBuilding={this.state.selectedBuilding}
              data={this.state.data}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
