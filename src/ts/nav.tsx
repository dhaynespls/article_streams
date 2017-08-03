import * as React from "react";

export function Nav() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-sm navbar-inverse navbar-color fixed-top">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".dual-collapse">
            <span className="navbar-toggler-icon">
            </span></button>
          <div className="container">
            <a className="navbar-brand d-flex mx-auto" href="#">
              My WashPost
            </a>
          </div>
        </nav>
      </div>
    );
}
