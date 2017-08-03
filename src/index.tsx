import * as React from "react";
import * as ReactDOM from "react-dom";

import { Nav } from "./ts/nav";

require('./scss/global.scss');

ReactDOM.render(
  <Nav />,

  // Render to <div id="root"></div>
  document.getElementById("root")
);
