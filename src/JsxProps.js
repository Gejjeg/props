import React from "react";

export class ModifyWelcomeJSX extends React.Component {
    static defaultProps = {
        name: "Peter"    
    };
    render() {
        return (
            <div>
                <p>Welcome, <strong>{this.props.name}</strong></p>
                <p>Your age is {this.props.age}</p>
            </div>
        ) 
    };
};