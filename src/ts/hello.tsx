import * as React from "react";

export interface HelloProps { 
    compiler: string;
    framework: string;
}

require('../scss/style.scss');

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
