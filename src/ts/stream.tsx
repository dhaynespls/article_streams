import * as React from "react";

import { Article } from './article'
import { HeadArticle } from './head_article'

export function Stream(props: {name: string, bump: string, reason: string}) {
  return (
    <div className={props.bump}>
      <p className="text-muted"><strong>{props.name}</strong> &bull; {props.reason}</p>
      <div className="card">
        <div className="card-block">
          <HeadArticle />
          <br />
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
            <div className="row-4 nudge">
              <br />
              <br />
              <br />
              <br />
              <br />
              <button type="button" className="btn btn-sm btn-inverse">></button>
            </div>
          </div>
        </div>
      </div>         
    </div>
  );
}
