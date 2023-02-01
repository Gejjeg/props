import React from "react";

export class ModifyWelcome extends React.Component {
    static defaultProps = {
        name: "Peter"    
    };
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
            </div>
        ) 
    };
};