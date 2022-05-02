import React from "react";



class PersonRow extends React.Component{

    seniorCitizen = (age) => {
        const className = '';
        if (age > 65){
            className = 'table-danger';
        }
        return className;
    }
    render() {
        const {person, key} = this.props;
        return (<tr key={key} className={this.seniorCitizen(person.age)} >
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
        </tr>);
    }
}

export default PersonRow;