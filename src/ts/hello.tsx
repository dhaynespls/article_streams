import * as React from "react";

// Class Component

/*
  We mentioned before that components defined as classes have some additional
  features. Local state is exactly that: a feature available only to classes.

  React.Component<props, state>
*/
export class Clock extends React.Component<null, {date: Date}> {
  timerID: any;

  constructor() {
    // Class components should always call the base constructor with props.
    super();
    this.state = { date: new Date() };
  }

  componentDidMount(): void {
    this.timerID = setInterval(
      () => this.updateState(),
      1000
    );
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  updateState(): void {
    this.setState({
      date: new Date()
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h3>Hello, world!</h3>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

// Functional Component

/*
  In TypeScript, interfaces fill the role of naming these types, and are a
  powerful way of defining contracts within your code as well as contracts
  with code outside of your project.
*/
interface ExampleInterface {
  name: string
}

/*
  This function is a valid React component because it accepts a single
  "props" object argument with data and returns a React element. We call such
  components "functional" because they are literally JavaScript functions.
*/
function Welcome(props: ExampleInterface) {
  return <h1>Hello, {props.name}!</h1>;
}

function WelcomeTwo() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
    </div>
  )
}

export function App() {
  return (
    <div>
      <WelcomeTwo />
      <Welcome name="Edite" />
    </div>
  );
}
