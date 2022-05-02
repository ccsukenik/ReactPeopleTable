import React from "react";

class PersonForm extends React.Component {
    render() {
        const { firstName, lastName, age } = this.props;
        const { onFirstNameChange, onLastNameChange, onAgeChange, onAddClick, onClearClick, } = this.props;

        return (
            <div className="container">
                <div className="row jumbotron"><div className="col-md-3">
                    <input onChange={this.onLastNameChange} value={this.firstName} type="text" name="firstName" placeholder="First Name" className="form-control"/>
                </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Last Name" name="lastName" className="form-control"
                            value={this.lastName} onChange={onLastNameChange} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Age" name="age" className="form-control"
                            value={this.age} onChange={onAgeChange} />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={onAddClick}>Add</button>
                        <button className="btn btn-danger ml-3" onClick={onClearClick}>Clear All</button>
                    </div>
                </div>
            </div>);
    }
}

export default PersonForm;