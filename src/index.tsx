import * as React from "react";
import * as ReactDOM from "react-dom";

import { Main } from "./ts/main"

require('./scss/global.scss');

ReactDOM.render(
  <Main />,
  // Render to <div id="root"></div>
  document.getElementById("root")
);
