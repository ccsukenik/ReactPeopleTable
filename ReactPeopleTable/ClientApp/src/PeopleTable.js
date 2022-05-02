import React from "react";
import PersonForm from "./PersonForm";
import PersonRow from "./PersonRow";

class PeopleTable extends React.Component{
    state = { people: [], firstName: '', lastName: '', age: '' };

    generateTable = () => {
        if(this.state.people.length === 0){
            return (<h1>Add people now!!!</h1>)
        }
        else {
            return ( <table className='table table-striped'>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Weight</th>
            </tr>
        </thead>
        <tbody>
            {this.state.people.map((p, k) => <PersonRow person={p} key={k} />)}
        </tbody>
    </table>)}
    }

    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }

    onLasttNameChange = e => {
        this.setState({ lastName: e.target.value });
    }

    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }

    onAddClick = () => {
        const { firstName, lastName, age, people } = this.state;
        const person = { firstName, lastName, age };
        const copy = [ person, ...people ];
        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }

    onClearClick = () => {
       this.setState({people: []});

    }

    render() {
        return (   
    <div className='container mt-5'>
        <PersonForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            age={this.state.age}
            onChangeFirstName={this.onChangeFirstName}
            onChangeLastName={this.onChangeLastName}
            onChangeAge={this.onChangeAge}
            onAddClick={this.onAddClick}
            onClearClick={this.onClearClick} 
            />
        {this.generateTable()}
    </div>);
        
    }
}


export default PeopleTable;