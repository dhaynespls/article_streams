import * as React from "react";

import { Stream } from './stream';
import { Nav } from './nav';
import { Footer } from './footer';

export function Main() {
  return (
    <div className="container">
      <Nav />
      <Stream name="test"/>
      <Stream name="test2"/>
      <Stream name="test3"/>
      <Stream name="test4"/>
      <Footer />
   </div>
  );
}
