import React from "react";

export class Welcome extends React.Component {
    static defaultProps = {
        name: "Peter"    
    };
    render() {
        return <p>Welcome, {this.props.name}</p>
    };
};