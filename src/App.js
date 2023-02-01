import React from "react";
import { Welcome } from "./Welcome";
import { ModifyWelcome } from "./modifyWelcome";

export class App extends React.Component {
    render() {
        return <ModifyWelcome name="Masodi" age={20}/>;
    };
};