import * as React from "react";

import { Stream } from './stream';
import { Nav } from './nav';
import { Footer } from './footer';

export function Main() {
  return (
    <div className="container">
      <Nav />
      <Stream name="Sponsored Stories" bump="bump-top" reason="Automatically subscribed"/>
      <Stream name="Political Analysis" bump="bump" reason="Based on your interest in Politics"/>
      <Stream name="Washington Capitals" bump="bump" reason="Subscribed manually"/>
      <Stream name="Style" bump="bump" reason="Popular amongst other users"/>
      <Footer />
   </div>
  );
}
