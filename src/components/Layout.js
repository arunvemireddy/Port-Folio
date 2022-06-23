import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Stats from "./Stats";
import Portfolio from './Portfolio';
import Resume from "./resume/Resume";
import About from "./About";
import Intro from "./Intro";
import Profile from "../profile.json"
import Works from './Works';

export default function Layout(props) {

  return (
    <div>
      <Header />
      <Intro data={Profile} />
      {props.children}
      <About data={Profile} />
      <Resume data={Profile} />
      <Works data={Profile}/>
      {/* <Portfolio data={Profile} /> */}
      <Stats data={Profile} />
      <Footer />
    </div>
  )
}


//export default Layout;