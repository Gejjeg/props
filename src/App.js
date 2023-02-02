import React from "react";
import { Welcome } from "./Welcome";
import { ModifyWelcome } from "./modifyWelcome";
import { ModifyWelcomeJSX } from "./JsxProps";

export class App extends React.Component {
    render() {
        return <ModifyWelcomeJSX name="Masodi" age={20}/>;
    };
};