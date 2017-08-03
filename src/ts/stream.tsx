import * as React from "react";

import { Article } from './article'

export function Stream(props: {name: String}) {
  return (
    <div className="bump">
      <p>{props.name}</p>
      <div className="card">
        <div className="card-block">
          <div className="row">
            <div className="row-4 nudge">
              <Article />
            </div>
            <div className="row-4 nudge">
              <Article />
            </div>
            <div className="row-4 nudge">
              <Article />
            </div>
          </div>
        </div>
      </div>         
    </div>
  );
}
