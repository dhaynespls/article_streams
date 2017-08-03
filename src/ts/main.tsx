import * as React from "react";

import { Stream } from './stream';
import { Nav } from './nav';
import { Footer } from './footer';

export function Main() {
  return (
    <div className="container">
      <Nav />
      <Stream />
      <Stream />
      <Stream />
      <Stream />
      <Footer />
   </div>
  );
}
