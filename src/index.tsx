import * as React from "react";
import * as ReactDOM from "react-dom";

import { Clock } from "./ts/hello";

require('./scss/global.scss');

ReactDOM.render(
  <Clock />,

  // Render to <div id="root"></div>
  document.getElementById("root")
);
