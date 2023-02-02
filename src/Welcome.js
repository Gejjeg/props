import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    static defaultProps = {
        name: "Peter"    
    };
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                <Age age={22}/>
            </div>
        )
    };
};